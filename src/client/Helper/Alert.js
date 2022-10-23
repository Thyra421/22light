import Alert from "@material-ui/lab/Alert";

// Alert Error Message
export const renderErrorAlert = (error) => {
  if (error !== "") {
    return (
      <div className="login-alert">
        <Alert severity="error"> Failed — {error}</Alert>
      </div>
    );
  }
};

// Alert Success Message
export const renderSuccessAlert = (success) => {
  if (success !== "") {
    return (
      <div className="login-alert">
        <Alert severity="success">Success — {success}</Alert>
      </div>
    );
  }
};
