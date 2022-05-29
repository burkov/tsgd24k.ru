import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { FC, useState } from "react";
import { NewsData } from "../types/News";
import dayjs from "dayjs";
import { dateFormats } from "../misc/dateformats";
import { Button, Collapse, Flex, Heading, Text } from "@chakra-ui/react";

const PieceOfNews: FC<{ date: string; title: string; html: any }> = ({
  title,
  html,
  date,
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "24px" }}>
      <Flex>
        <div style={{ minWidth: "160px" }}>
          {dayjs(date).format(dateFormats.DDMMMMYYYY)}
        </div>
        <Heading size="sm">{title}</Heading>
      </Flex>
      <Flex>
        <div style={{ minWidth: "160px" }} />
        <div>
          <Text
            dangerouslySetInnerHTML={{ __html: html }}
            noOfLines={isOpen ? undefined : 3}
          />
          <Button onClick={() => setOpen((e) => !e)} variant="link" size="sm">
            {isOpen ? "Скрыть" : "Показать"}
          </Button>
        </div>
      </Flex>
    </div>
  );
};

const IndexPage: FC<{ data: NewsData }> = ({ data }) => {
  return (
    <Layout heading="Новости">
      {data.allMarkdownRemark.edges.map(
        ({
          node: {
            id,
            html,
            frontmatter: { title, date },
          },
        }) => {
          return <PieceOfNews key={id} date={date} title={title} html={html} />;
        }
      )}
    </Layout>
  );
};

export const query = graphql`
  query News {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, ASC]
      }
      filter: { fields: { sourceName: { eq: "news" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;
