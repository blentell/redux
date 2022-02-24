import React from 'react'
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../fetchData'
import { signInActionCreator } from '../../reduxStore';

function SignInPage() {
  const dispatch = useDispatch();

	const user = useSelector((state) => state.user);

	const handleUserLogIn = () =>
		fetchUser("fake@user.com", "123")
			//Put the data on redux
      .then((data) => dispatch(signInActionCreator(data)));
  
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
						<TextField label="Email" value="fake@user.com" color="secondary" type="email" focused />
						<TextField
							label="Password"
							color="secondary"
							type="password"
							value="123"
							focused
						/>
						<Button onClick={handleUserLogIn} variant="outlined">
							<Link to="/tweet">Log in User</Link>
						</Button>
					</Box>
				</Box>
			</Layout>
		</div>
	);
}

export default SignInPage