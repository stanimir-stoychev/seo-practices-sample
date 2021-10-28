import whatImg from "../../../static/images/what.jpeg";
import seoBestPracticesImg from "../../../static/images/seo-best-practices.png";

import howTo from "./how-to-implement";
import whatAndWhy from "./what-and-why";

const data = [
  {
    id: "what-is-seo",
    title: "What is SEO? Why do we need it?",
    post: whatAndWhy,
    img: whatImg,
    preview:
      '"Search Engine Optimization" is the art of making our website friendlier for search engines to make sense of',
    postedOn: "2021-10-28",
  },
  {
    id: "best-seo-practices",
    title: "How to best use SEO?",
    post: howTo,
    img: seoBestPracticesImg,
    preview:
      "Wonder what you're missing? Here's a list of best practices to take.",
    postedOn: "2021-10-27",
  },
];

export default data;
