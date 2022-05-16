// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Title from "./Title";
// import { useDispatch, useSelector } from "react-redux";
// import React, { Fragment, useCallback, useEffect, useState } from "react";
// import { retrieveQuestions } from "slices/question";
// import { Button } from "@mui/material";
// import QuestionModal from "./QuestionModal";

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function Questions() {
//   const questions = useSelector((state) => state.questions);

//   const dispatch = useDispatch();

//   const [openModal, setOpenModal] = useState(false);

//   const [currentQuestion, setCurrentQuestion] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(-1);

//   const initFetch = useCallback(() => {
//     dispatch(retrieveQuestions());
//   }, [dispatch]);

//   useEffect(() => {
//     initFetch();
//   }, [initFetch]);

//   const handleOpen = () => {
//     setOpenModal(true);
//   };

//   return (
//     <React.Fragment>
//       <Title>Recent Customers Questions</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Date</TableCell>
//             <TableCell>Customer</TableCell>
//             <TableCell>Question Title</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {questions.map((question, index) => (
//             <TableRow
//               key={index}
//               onClick={() => setCurrentQuestion(question, index)}
//             >
//               <TableCell>{question.updated_at}</TableCell>
//               <TableCell align="left">{question.full_name}</TableCell>
//               <TableCell>{question.title}</TableCell>
//               <TableCell>{question.status}</TableCell>
//               <TableCell>
//                 {/* <Button onClick={handleOpen}>Open modal</Button> */}
//                 {/* <Button onClick={() => setCurrentQuestion(question, index)}>
//                   View
//                 </Button> */}
//                 <Link href={"/question/" + question.id} underline="hover">
//                   Edit
//                 </Link>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </React.Fragment>
//   );
// }
