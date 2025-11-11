import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from "next/navigation";
import { allowedProjectSlugs } from "@/resources";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  const files = fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");

  // If this directory is the projects folder, filter to the allowed slugs only.
  // This lets us keep only the projects the user wants listed while leaving files on disk untouched.
  const projectsPathEnding = path.join("work", "projects");
  if (dir.endsWith(projectsPathEnding) || dir.indexOf(projectsPathEnding) !== -1) {
    return files.filter((file) => allowedProjectSlugs.includes(path.basename(file, path.extname(file))));
  }

  return files;
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  // Normalize date fields: allow frontmatter to use `publishedAt`, `date`, or `datePublished`.
  const publishedAt = data.publishedAt || data.date || data.datePublished || "";

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
