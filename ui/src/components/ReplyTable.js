// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Title from "./Title";
// import { useDispatch, useSelector } from "react-redux";
// import React, { Fragment, useCallback, useEffect, useState } from "react";
// import { retrieveReplys } from "slices/reply";
// import { Button } from "@mui/material";
// import { retrieveQuestionReplies } from "slices/reply";

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function Replies({ repliesProp }) {
//   const replies = useSelector((state) => state.replies);

//   const dispatch = useDispatch();

//   const [currentReplies, setCurrentReplies] = useState(repliesProp);
//   const [currentReply, setCurrentReply] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(-1);

//   const initFetch = useCallback(() => {
//     dispatch(retrieveQuestionReplies());
//   }, [dispatch]);

//   useEffect(() => {
//     initFetch();
//   }, [initFetch]);

//   return (
//     <React.Fragment>
//       <Title>Replies</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Date</TableCell>
//             <TableCell>Customer</TableCell>
//             <TableCell>Reply</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {replies.map((reply, index) => (
//             <TableRow key={index} onClick={() => setCurrentReply(reply, index)}>
//               <TableCell>{reply.updated_at}</TableCell>
//               <TableCell align="left">{reply.full_name}</TableCell>
//               <TableCell>{reply.text}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </React.Fragment>
//   );
// }
