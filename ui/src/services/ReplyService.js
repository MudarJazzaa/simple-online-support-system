import http from "../http-common";
import authHeader from "./auth-header";

const create = (data) => {
  return http.post("/reply", data, { headers: authHeader() });
};

const getAll = () => {
  return http.get("/reply", { headers: authHeader() });
};

const getQuestionReplies = (questionId) => {
  return http.get(`/reply/question/${questionId}`, { headers: authHeader() });
};

const getById = (id) => {
  return http.get(`/reply/${id}`, { headers: authHeader() });
};

const update = (id, data) => {
  return http.put(`/reply/${id}`, data, { headers: authHeader() });
};

// const remove = (id) => {
//   return http.delete(`/reply/${id}`);
// };
// const removeAll = () => {
//   return http.delete(`/reply`);
// };
// const findByTitle = (title) => {
//   return http.get(`/reply?title=${title}`);
// };
const ReplyService = {
  getAll,
  getById,
  getQuestionReplies,
  create,
  update,
  // remove,
  // removeAll,
  // findByTitle,
};
export default ReplyService;
