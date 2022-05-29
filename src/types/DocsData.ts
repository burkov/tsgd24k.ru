export interface DocsData {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: {
          date: string;
          title: string;
          file?: {
            publicURL: string;
          };
        };
      };
    }[];
  };
}
