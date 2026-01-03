import React from "react";
import { Row, Text, Button, Card } from "@once-ui-system/core";
import { person } from "@/resources";

export const metadata = {
  title: `Resume — ${person.name}`,
};

export default function ResumePage() {
  return (
    <Row fillWidth padding="12" horizontal="center">
      <Card maxWidth="m" padding="12">
        <Row direction="column" gap="8">
          <Text variant="display-default-l">{person.name}</Text>
          <Text variant="display-default-m">{person.role}</Text>

          <Text variant="display-default-m">Download</Text>
          <Row gap="8">
            <Button href="/resume.pdf" variant="primary" size="m">
              Download Resume (PDF)
            </Button>
            <Button href="/resume.pdf" variant="secondary" size="m" target="_blank">
              Open in new tab
            </Button>
          </Row>

          <Text variant="display-default-m">Summary</Text>
          <Text>
            Danish Iqbal is a Full Stack Engineer. This page is a lightweight resume view — a
            downloadable PDF is available below and via the floating Resume button.
          </Text>

          <Text variant="display-default-m">Experience (Highlights)</Text>
          <ul>
            <li>Full Stack Engineer — Freelance & Personal Projects (2023 - Present)</li>
            <li>Full Stack Dev Intern — Dynamics Solutions and Technology, Lahore (Aug 2025 - Oct 2025)</li>
          </ul>

          <Text variant="display-default-m">Contact</Text>
          <Text>{person.email} • +92 313 5758807</Text>
        </Row>
      </Card>
    </Row>
  );
}
