import Grid from "@mui/material/Grid";
import React from "react";
import AccountInfo from "./AccountInfo";
import NewsFeed from "./NewsFeed";

export default function HomeScreen() {
    return (
      <Grid container >
        <Grid item xs={12} lg={8} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <NewsFeed/>
        </Grid>
        <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }}>
          <AccountInfo/>
          Suggested accounts will be here
        </Grid>
      </Grid>
    );
  }
  
