import Typography from "@mui/material/Typography";
import React from "react";

export function AccountName(props) {
  const { username } = props;

  return (
    <Typography variant="body2">{username}</Typography>
  );
}