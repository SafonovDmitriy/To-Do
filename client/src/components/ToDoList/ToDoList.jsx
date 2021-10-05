import { Box } from "@mui/system";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useParams } from "react-router";
import { Loading } from "..";
import { auth, firestore, firebase } from "../../firebase";
import { AddFabBtn } from "../UI";
import useStyles from "./ToDoListStyle";
export default function ToDoList() {
  const classes = useStyles();
  const { idList } = useParams();
  const listRef = firestore.collection("lists").doc(idList);
  const toDoListRef = listRef.collection("toDoList");
  const typesBusiness = {
    do: "do",
    buy: "buy",
  };
  const createNewBusiness = () => {
    toDoListRef.add({
      title: "test",
      autorId: auth.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      count: 0,
      price: 0,
      type: typesBusiness.buy,
      cheked: false,
    });
  };
  const [toDoList, loading] = useCollectionData(toDoListRef, { idField: "id" });

  console.log(`toDoList`, toDoList);
  return !loading ? (
    <Box className={classes.toDoList}>
      <Box className={classes.toDoWrapper}>
        {toDoList.length
          ? toDoList.map((toDo) => (
              <Box className={classes.toDoItem}>{toDo.title}</Box>
            ))
          : null}
        <AddFabBtn onClick={createNewBusiness} />
      </Box>
    </Box>
  ) : (
    <Loading />
  );
}
