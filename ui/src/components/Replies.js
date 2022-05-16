import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import ReplyService from "services/ReplyService";
import { useParams } from "react-router-dom";
import { createReply } from "slices/reply";
import { updateQuestion } from "slices/question";

export default function Replies() {
  const user = JSON.parse(localStorage.getItem("user"));

  const initialQuestion = {
    id: null,
    title: "",
    description: "",
    status: "false",
    replies: [],
  };

  const initialReply = {
    text: "",
    question_id: null,
  };

  const { id } = useParams();

  // const user = useSelector((state) => state.auth);

  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const [currentReply, setCurrentReply] = useState(initialReply);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getCurrentQuestion = (id) => {
    ReplyService.getQuestionReplies(id)
      .then((response) => {
        setCurrentQuestion(response.data.question);
        console.log("currentQuestion", currentQuestion);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const saveReply = () => {
    const { id } = currentQuestion;
    const { text } = currentReply;
    const user_id = user.id;
    console.log("text", text);
    dispatch(createReply({ user_id, text, question_id: id }))
      .unwrap()
      .then((data) => {
        console.log(data);
        getCurrentQuestion(id);
        setCurrentReply(initialReply);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentReply({ ...currentReply, [name]: value });
  };

  useEffect(() => {
    getCurrentQuestion(id);
  }, [id]);

  const updateStatus = (status) => {
    const data = {
      status: status,
    };
    dispatch(updateQuestion({ id: currentQuestion.id, data }))
      .unwrap()
      .then((response) => {
        console.log("response.data", response.data);
        setCurrentQuestion({ ...currentQuestion, status: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <Title>Question</Title>

      <Typography>Title : {currentQuestion?.title}</Typography>
      <Typography>description : {currentQuestion?.description}</Typography>
      <Typography>status : {currentQuestion.status}</Typography>
      {user.role === "ADMIN_ROLE" && (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            onClick={() => {
              updateStatus("SPAM");
            }}
          >
            SPAM
          </Button>
          <Button
            onClick={() => {
              updateStatus("Answered");
            }}
          >
            Answered
          </Button>
          <Button
            onClick={() => {
              updateStatus("Not Answered");
            }}
          >
            Not Answered
          </Button>
        </ButtonGroup>
      )}

      <Title>Replies</Title>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Reply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentQuestion.replies &&
            currentQuestion.replies.map((reply, index) => (
              <TableRow key={index}>
                <TableCell>{reply?.updated_at}</TableCell>
                <TableCell align="left">{reply?.full_name}</TableCell>
                <TableCell>{reply?.text}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Paper>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Input
            placeholder="Write Reply"
            id="text"
            required
            name="text"
            value={currentReply?.text}
            onChange={handleInputChange}
            sx={{ mr: 4, flexGrow: "1" }}
          />
        </Box>
        <Button variant="outlined" sx={{ margin: "20px" }} onClick={saveReply}>
          Submit
        </Button>
      </Paper>
    </React.Fragment>
  );
}
