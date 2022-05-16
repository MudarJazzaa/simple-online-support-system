// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Title from "./Title";
// import { useDispatch, useSelector } from "react-redux";
// import React, { Fragment, useCallback, useEffect, useState } from "react";
// import { retrieveUserQuestions } from "slices/question";
// import { Button } from "@mui/material";

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function UserQuestionTable() {
//   const userQuestions = useSelector((state) => state.questions);

//   const dispatch = useDispatch();

//   const [currentQuestion, setCurrentQuestion] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(-1);

//   const refreshData = () => {
//     setCurrentQuestion(null);
//     setCurrentIndex(-1);
//   };

//   const setActiveQuestion = (question, index) => {
//     setCurrentQuestion(question);
//     setCurrentIndex(index);
//   };

//   const initFetch = useCallback(() => {
//     dispatch(retrieveUserQuestions(1));
//   }, [dispatch]);

//   useEffect(() => {
//     initFetch();
//   }, [initFetch]);

//   return (
//     <React.Fragment>
//       <Title>Your Questions</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Date</TableCell>
//             <TableCell>Question Title</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {userQuestions.map((question, index) => (
//             <TableRow key={question.id}>
//               <TableCell>{question.updated_at}</TableCell>
//               <TableCell>{question.title}</TableCell>
//               <TableCell>{question.status}</TableCell>
//               <TableCell>
//                 {/* <Button
//                   variant="outlined"
//                   onClick={() => setActiveQuestion(question, index)}
//                 > */}
//                 <Link
//                   to={"/tutorials/" + question.id}
//                   className="badge badge-warning"
//                 >
//                   <Button variant="outlined">Edit</Button>
//                 </Link>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </React.Fragment>
//   );
// }
