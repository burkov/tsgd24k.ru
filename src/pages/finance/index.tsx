import React, { FC } from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { AllMarkdownRemark } from "../../types/AllMarkdownRemark";
import DocumentsTable from "../../components/DocumentTable";

const AboutPage: FC<{ data: AllMarkdownRemark }> = ({ data }) => {
  return (
    <Layout heading="Финансовая отчетность">
      <DocumentsTable data={data} />
    </Layout>
  );
};

export const query = graphql`
  query Finance {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
      filter: { fields: { sourceName: { eq: "finance" } } }
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

export default AboutPage;
