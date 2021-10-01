import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { MoreVert } from "@mui/icons-material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useHistory } from "react-router-dom";
import { LISTS_PAGE } from "../../utils/rootPath";
import useStyles from "./ListItemStyle";
export default function ListItem({ listItem, messagesRef }) {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const _messagesRef = messagesRef.doc(listItem.id).collection("toDoList");
  const [toDoList, loading] = useCollectionData(_messagesRef, {
    idField: "id",
  });
  console.log(`listItem`, listItem);
  console.log(`toDoList`, toDoList);
  const pushToItem = () => {
    history.push(`${LISTS_PAGE}/${listItem.id}`);
  };
  return !loading ? (
    <Box className={classes.listItem} onClick={() => pushToItem()}>
      <Box className={classes.listItemBody}>
        <h3 children={listItem.title} />
        <Box display="flex" alignItems="center" gap="10">
          <h3
            children={`${toDoList.length}/${toDoList.length}`}
            className={classes.lengthItems}
          />
          <IconButton children={<MoreVert />} onClick={handleClick} />
          <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box borderBottom="1px black solid" width="100%" paddingBottom={0.8} />
    </Box>
  ) : null;
}
