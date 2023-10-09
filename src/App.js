// import logo from "./logo.svg";
// import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { ProductsData } from "./api/api";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} loader={ProductsData}></Route>
					<Route path="/cart" element={<Cart />}></Route>
				</Route>
				<Route path="/signin" element={<Signin />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
			</Route>
		)
	);
	return (
		<div className="font-bodyFont bg-gray-100">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
