import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { clearDataAction } from "../../redux/actions/CommonActions";
import { userSelector } from "../../redux/selectors";

const CustomeAvatar = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const avatarRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = () => {
    auth.signOut();
    dispatch(clearDataAction());
    handleClose();
  };
  return (
    <>
      <Avatar
        alt={user.displayName}
        src={user.photoURL}
        onClick={handleClick}
        ref={avatarRef}
      />
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </>
  );
};
export default CustomeAvatar;
