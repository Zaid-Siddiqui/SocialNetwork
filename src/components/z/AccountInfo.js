import { useSelector } from "react-redux";
import AccountAvatar from "./AccountAvatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function AccountInfo() {
    const account = useSelector(state => state.account.account);
  
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AccountAvatar username={account.username} size="small" />
        <div style={{ marginLeft: '5px' }}>
          <Typography variant="body2"><b>{account.username}</b></Typography>
          <Typography variant="body2">{account.firstName} {account.lastName}</Typography>
        </div>
      </Box>
    );
  }
  