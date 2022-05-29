export interface NewsData {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: {
          date: string;
          title: string;
        };
        html: any
      };
    }[];
  };
}
