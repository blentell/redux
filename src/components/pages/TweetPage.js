import React, { useEffect, useState } from 'react'
import Layout from "../layout/Layout";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import PostItem from './PostItem';
import { saveTweet, selectTweetList } from '../../tweetSlice';
import { useDispatch, useSelector } from "react-redux";

function TweetPage() {
  const [posts, setPosts] = useState("");
  const dispatch = useDispatch();
 const tweetList = useSelector(selectTweetList);
	const user = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveTweet({
      item: posts,
			username: user.firstName,
			id: Date.now(),
    }))
    }

  
  return (
		<div>
			<Layout>
				<Box>
					<Box component="form" sx={{ "& .MuiTextField-root": { mt: 8 } }}>
						<TextField
							sx={{ width: 300, color: "purple" }}
							style={{}}
							color="secondary"
							type="text"
							id="outlined-multiline-static"
							multiline
							focused
							rows={4}
							value={posts}
							onChange={(e) => setPosts(e.target.value)}
						/>
						<Box sx={{ mt: 2 }}>
							<Button
								style={{ color: "purple" }}
								onClick={handleSubmit}
								type="submit"
								variant="outlined"
								id="post-submit-button"
							>
								Tweet
							</Button>
						</Box>
					</Box>
					<Box style={{ textAlign: "left" }} sx={{ mt: 3, ml: 3 }}>
						<Typography>Tweets</Typography>
					</Box>
					{tweetList.map((item) => (
						<PostItem name={item.item} username={item.username} key={item.id} />
					))}
				</Box>
			</Layout>
		</div>
	);
}

export default TweetPage