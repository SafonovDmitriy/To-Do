import { makeStyles } from "@material-ui/core";

export default makeStyles({
  authBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#448aff",
    padding: "18px 24px",
    gap: 5,
  },
  btns: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
  textBox: {
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
    color: "white",
    padding: "8px 0",
    textAlign: "center",
    fontWeight: 400,
    lineHeight: 1.7,
    fontSize: 16,
  },
  signUp: {
    backgroundColor: "#54ab26",
  },
});
