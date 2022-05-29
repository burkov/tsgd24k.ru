import React, { FC } from "react";
import Layout from "../../components/Layout";
import DocumentsTable from "../../components/DocumentTable";
import { graphql } from "gatsby";
import { DocsData } from "../../types/DocsData";

const DocsPage: FC<{ data: DocsData }> = ({ data }) => {
  return (
    <Layout heading="Документы">
      <DocumentsTable data={data} />
    </Layout>
  );
};

export const query = graphql`
  query Documents {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, ASC]
      }
      filter: { fields: { sourceName: { eq: "docs" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            file {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default DocsPage;
