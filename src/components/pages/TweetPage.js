import React from 'react'
import Layout from "../layout/Layout";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

function TweetPage() {
  return (
		<div>
			<Layout>
				<Box>
					<Box component="form" sx={{ "& .MuiTextField-root": { mt: 8 } }}>
						<TextField
							sx={{ width: 300 }}
							color="secondary"
							type="text"
							id="outlined-multiline-static-with-radius"
							multiline
							rows={4}
							focused
						/>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Button variant="outlined">Tweet</Button>
					</Box>
				</Box>
			</Layout>
		</div>
	);
}

export default TweetPage