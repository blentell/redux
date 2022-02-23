import React from "react";
import Layout from "../layout/Layout";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div>
			<Layout>
				<Box sx={{ mt: 8 }}>
					<Link to="/signin">
						<Button variant="outlined">go to sign in page</Button>
					</Link>
				</Box>
			</Layout>
		</div>
	);
}

export default HomePage;
