import http from "../http-common";
import authHeader from "./auth-header";
// const user = JSON.parse(localStorage.getItem("user"));

const getAll = () => {
  return http.get("/question", { headers: authHeader() });
};

const getByUserId = (user_id) => {
  console.log(user_id);
  return http.get(`/question/user/${user_id}`, { headers: authHeader() });
};
const getById = (id) => {
  return http.get(`/question/${id}`, { headers: authHeader() });
};
const create = (data) => {
  return http.post("/question", data, { headers: authHeader() });
};
const update = (id, data) => {
  return http.put(
    "/question",
    { id: id, status: data.status },
    { headers: authHeader() }
  );
};
// const remove = (id) => {
//   return http.delete(`/question/${id}`);
// };
// const removeAll = () => {
//   return http.delete(`/question`);
// };
// const findByTitle = (title) => {
//   return http.get(`/question?title=${title}`);
// };
const QuestionService = {
  getAll,
  getByUserId,
  getById,
  create,
  update,
  // remove,
  // removeAll,
  // findByTitle,
};
export default QuestionService;
