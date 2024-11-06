import Button from "@mui/material/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { showProfile } from "../store/actions/application";

export function AccountNameButton(props) {
  const { userId, username } = props;
  const dispatch = useDispatch();

  const handleShowProfile = () => {
    dispatch(showProfile(userId));
  }

  return (
    <Button variant="text" sx={{ textTransform: 'none' }} onClick={handleShowProfile}>{username}</Button>
  );
}  