import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
	const user = useSelector((state) => state.user);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: "#000099" }}>
				<Toolbar>
					<Box sx={{ flexGrow: 1 }}>
						<Typography variant="h6" component="div" sx={{ ml: -24 }}>
							<Link to="/">Home page</Link>
						</Typography>
					</Box>
					{user ? (
						`Hi, ${user.firstName}`
					) : (
						<Link to="/signin">
							<Button color="inherit">Sign In</Button>
						</Link>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
