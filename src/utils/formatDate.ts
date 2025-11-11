export function formatDate(date: string | undefined | null, includeRelative = false) {
  // Defensive: if date is missing, return an empty string (caller can choose how to display)
  if (!date) return "";

  const currentDate = new Date();

  // If date doesn't contain a time portion, normalize it to a full ISO-like string
  if (typeof date === "string" && !date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date as string);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = isNaN(targetDate.getTime())
    ? ""
    : targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
    });

  if (!includeRelative) {
    return fullDate;
  }

  return fullDate ? `${fullDate} (${formattedDate})` : formattedDate;
}
