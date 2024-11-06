import React from "react";
import { useSelector } from "react-redux";
import FeedCard from "./FeedCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    card: {
      marginBottom: '15px'
    }
  }));
  
  export default function NewsFeed() {
    const classes = useStyles();
    const newsFeed = useSelector(state => state.post.newsFeed);
  
    return (
      <div className={classes.root}>
        {newsFeed.map((post, index) => {
          return (
            <FeedCard key={index} post={post} className={classes.card} />
          );
        })}
  
      </div>
    );
  }
  