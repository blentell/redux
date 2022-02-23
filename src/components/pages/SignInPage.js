import React from 'react'
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

function SignInPage() {
  return (
		<div>
			<Layout>
				<Box sx={{ mt: 8 }}>
					<Box
						component="form"
						sx={{
							"& > :not(style)": { m: 1, width: "25ch" },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField label="Email" color="secondary" type="email" focused />
						<TextField
							label="Password"
							color="secondary"
							type="password"
							focused
						/>
						<Button variant="outlined">
							<Link to="/tweet">Log in User</Link>
						</Button>
					</Box>
				</Box>
			</Layout>
		</div>
	);
}

export default SignInPage