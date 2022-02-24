import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/SignInPage";
import TweetPage from "./components/pages/TweetPage";

import store from "./reduxStore";

function App() {
  return (
		<Provider store={store}>
    <div className="App">      
				<BrowserRouter>
				<Routes>
				<Route index element={<HomePage />}></Route>
				<Route path="tweet" element={<TweetPage />}></Route>
				<Route path="signin" element={<SignInPage />}></Route>
				</Routes>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
