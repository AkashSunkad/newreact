import React from "react";
import { Box } from "@material-ui/core";
import { PageHeader } from "../Common/CommonComponent";
import { Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyles";

export default function Link() {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <PageHeader label='Link1' pageTitle='Link Post' />
      <Typography color='textSecondary'>
        {" "}
        A blog is a platform where either one person or a group of people share their views and opinions about a specific topic. It is interesting to note that the posts usually appear in reverse chronological order, where the latest post appears first. These posts could be in any form you would please.

Personal blogs are gaining a lot of popularity. And their audience is growing at the speed of light with each passing day. Some focus on stories, others photos or videos, but most bloggers do a bit of both.

The main aim of running a blog is to deliver content that targets your niche (see How To Choose The Most Profitable Blog Niche.) When utilized to its maximum potential, a blog could be an essential marketing tool that can turn a mere hobby into a cash cow. All this is, of course, also building brands, marketing 
Our list of most popular blogs and bloggers
The following is a list of some of the fans’ favorite blogs in the year 2021. As I had mentioned earlier, some blogs are run by a group of people. However, I will highlight those run by remarkable individuals who are shining in their fields. It will feature blogs from different sectors such as food, technology, fitness, DIY and decor, beauty, fashion, and health, respectively.


      </Typography>
    </Box>
  );
}
