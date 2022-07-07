import { IGatsbyImageData } from "gatsby-plugin-image";

export type TProjectImageQuery = {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
};
