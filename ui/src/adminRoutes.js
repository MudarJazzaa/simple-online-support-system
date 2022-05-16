import Replies from "components/Replies";
import Questions from "components/Questions";

const adminRoutes = [
  {
    name: "question",
    key: 1,
    route: "question",
    component: <Questions />,
  },
  {
    name: "question",
    key: 2,
    route: "question/:id",
    component: <Replies />,
  },
];

export default adminRoutes;
