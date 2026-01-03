import React from "react";
import { Row, Text, Card, IconButton } from "@once-ui-system/core";
import { person } from "@/resources";

export const metadata = {
  title: `Contact — ${person.name}`,
};

export default function ContactPage() {
  return (
    <Row fillWidth padding="12" horizontal="center">
      <Card maxWidth="m" padding="12">
        <Row direction="column" gap="8">
          <Text variant="display-default-l">Contact</Text>
          <Text variant="display-default-m">Get in touch</Text>

          <Text>Email</Text>
          <Text>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </Text>

          <Text>Phone</Text>
          <Text>
            <a href={`tel:+923135758807`}>+92 313 5758807</a>
          </Text>

          <Row gap="8">
            <IconButton icon="email" tooltip="Email" href={`mailto:${person.email}`} />
            <IconButton icon="phone" tooltip="Call" href={`tel:+923135758807`} />
          </Row>
        </Row>
      </Card>
    </Row>
  );
}
