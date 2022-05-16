import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import { retrieveQuestions } from "slices/question";
import { Box, Button, Input, Paper } from "@mui/material";
import { createQuestion } from "slices/question";
import { retrieveUserQuestions } from "slices/question";

export default function Questions() {
  const user = JSON.parse(localStorage.getItem("user"));

  const initialQuestion = {
    title: "",
    description: "",
  };

  const questions = useSelector((state) => state.questions);
  // const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentQuestion({ ...currentQuestion, [name]: value });
  };

  const saveQuestion = () => {
    const { title, description } = currentQuestion;
    const user_id = user.id;
    dispatch(createQuestion({ user_id, title, description }))
      .unwrap()
      .then((data) => {
        console.log(data);
        setCurrentQuestion(initialQuestion);
        initFetch();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const initFetch = useCallback(() => {
    if (user?.role === "ADMIN_ROLE") dispatch(retrieveQuestions());
    else dispatch(retrieveUserQuestions({ user_id: user?.id }));
    console.log({ user_id: user?.id });
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <React.Fragment>
      <Title> Questions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Question Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions &&
            questions.map((question, index) => (
              <TableRow key={index}>
                <TableCell>{question?.updated_at}</TableCell>
                <TableCell align="left">{question?.full_name}</TableCell>
                <TableCell>{question?.title}</TableCell>
                <TableCell>{question?.status}</TableCell>
                <TableCell>
                  <Link
                    href={"question/" + question.id}
                    state={{ question: question }}
                    underline="hover"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {user?.role === "USER_ROLE" && (
        <Paper>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Input
              placeholder="Write Question title"
              id="title"
              required
              name="title"
              value={currentQuestion?.title}
              onChange={handleInputChange}
              sx={{ mr: 4, flexGrow: "1" }}
            />
            <Input
              placeholder="Write Question description"
              id="description"
              required
              name="description"
              value={currentQuestion?.description}
              onChange={handleInputChange}
              sx={{ mr: 4, flexGrow: "1" }}
            />
          </Box>
          <Button
            variant="outlined"
            sx={{ margin: "20px" }}
            onClick={saveQuestion}
          >
            Submit
          </Button>
        </Paper>
      )}
    </React.Fragment>
  );
}
