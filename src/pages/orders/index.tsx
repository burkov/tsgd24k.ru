import React, { FC } from "react";
import Layout from "../../components/Layout";
import DocumentsTable from "../../components/DocumentTable";
import { AllMarkdownRemark } from "../../types/AllMarkdownRemark";
import { graphql } from 'gatsby';

const OrdersPage: FC<{ data: AllMarkdownRemark }> = ({ data }) => {
  return (
    <Layout heading="Распоряжения">
      <DocumentsTable data={data} />
    </Layout>
  );
};

export const query = graphql`
  query Orders {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
      filter: { fields: { sourceName: { eq: "orders" } } }
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


export default OrdersPage;
