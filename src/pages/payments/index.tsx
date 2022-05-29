import React, { FC } from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { DocsData } from "../../types/DocsData";
import DocumentsTable from "../../components/DocumentTable";

const PaymentsPage: FC<{ data: DocsData }> = ({ data }) => {
  return (
    <Layout heading="Информация о тарифах">
      <DocumentsTable data={data} />
    </Layout>
  );
};

export const query = graphql`
  query Payments {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, ASC]
      }
      filter: { fields: { sourceName: { eq: "payments" } } }
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

export default PaymentsPage;
