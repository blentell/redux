import { Box } from "@mui/system";
import React from "react";

function PostItem({ name, username }) {

	return (
		<Box style={{ border: "2px solid purple", borderRadius: 15 }} sx={{ p: .4, mt: 5, ml: 5, mr: 5 }}>
			<p>
				{name} -by {username}
			</p>
		</Box>
	);
}

export default PostItem;
