import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ListItem } from "..";
import { auth, firebase, firestore } from "../../firebase";
import { useToggle } from "../../hooks/useToggle";
import { emptyLists } from "../../img";
import formGenerator from "../../utils/formGenerator";
import { maxlength, minlength, required } from "../../utils/validation";
import Loading from "../Loading/Loading";
import { Button, Modal } from "../UI";
import useStyles from "./ListsPageStyle";
const ListsPage = () => {
  const classes = useStyles();

  const messagesRef = firestore.collection("lists");

  const query = messagesRef
    .where("autorId", "==", `${auth.currentUser.uid}`)
    .where("deleted", "==", false);
  const [lists, loading] = useCollectionData(query, { idField: "id" });
  console.log(`lists`, lists);

  const [createListModal, flipCreateListModal] = useToggle(false);

  const [form, setValue] = useState([
    {
      name: "newList",
      value: "",
      group: 1,
      validationFunc: [
        { func: required, message: "Field is Requider" },
        {
          func: minlength,
          any: { min: 6 },
          message: "Minimum length 6 characters",
        },
        {
          func: maxlength,
          any: { max: 10 },
          message: "Maximum length 25 characters",
        },
      ],
      any: { placeholder: "New List" },
    },
  ]);

  const [error, setError] = useState({});

  const titleGroups = {
    1: "List name",
  };

  const onSubmit = (form) => {
    flipCreateListModal();
    const { newList } = form;
    const list = {
      title: newList,
      autorId: auth.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      deleted: false,
    };
    messagesRef.add(list);
  };
  const showList = () => {
    if (loading) {
      return <Loading />;
    } else {
      if (lists?.length) {
        return (
          <Box className={classes.listsBox}>
            {lists.map((listItem) => (
              <Box key={listItem.id}>
                <ListItem listItem={listItem} messagesRef={messagesRef} />
              </Box>
            ))}
          </Box>
        );
      }
      return <EmptyLists flipCreateListModal={flipCreateListModal} />;
    }
  };
  return !loading ? (
    <>
      <Modal open={createListModal} onClose={flipCreateListModal}>
        {formGenerator({
          titleGroups,
          form,
          setValue,
          className: classes.createListModal,
          onSubmit,
          submitText: "Create",
          error,
          setError,
        })}
      </Modal>
      <Box className={classes.lists}>{showList()}</Box>
    </>
  ) : null;
};
const EmptyLists = ({ flipCreateListModal }) => {
  const classes = useStyles();
  return (
    <Box className={classes.emptyList}>
      <img src={emptyLists} alt="emptyList" />
      <h2>
        Create your first list. Make your shopping faster and more convenient.
      </h2>
      <Button onClick={flipCreateListModal} children={"Create list"} />
    </Box>
  );
};
export default ListsPage;
