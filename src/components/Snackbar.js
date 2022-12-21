import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbars(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar autoHideDuration={3000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <Alert severity="error">{props.errorMsg}</Alert>
      <Alert severity="warning">HI</Alert>
      <Alert severity="info">{props.infoMsg}</Alert>
      <Alert severity="success">{props.successMsg}</Alert>
    </Stack>
  );
}
