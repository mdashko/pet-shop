import { Home } from "./pages/Home/Home";
import { Explore } from "./pages/Explore/Explore";
import { LogIn } from "./pages/LogIn/LogIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { Profile } from "./pages/Profile/Profile";
import { Cart } from "./pages/Cart/Cart";
import { Favourites } from "./pages/Favourites/Favourites";
import { Shop } from "./pages/Shop/Shop";

export const fonts = {
	mainFonts: ["Josefin Sans", "sans-serif"],
};

export const colors = {
	mainColor: "#181725",
	hoverColor: "#FF7322",
	whiteColor: "#fff",
	orangeColor: "#FFB52E",
	grayColor: "#7C7C7C",
	barkBlueColor: "#154c79",
	inputTextColor: "#ADA7A7",
	errorColor: "#ff0000",
};

export const routes = [
	{ path: "/", element: <Home /> },
	{ path: "/LogIn", element: <LogIn /> },
	{ path: "/SignUp", element: <SignUp /> },
	{ path: "/Shop", element: <Shop /> },
	{ path: "/Explore", element: <Explore /> },
	{ path: "/Favourites", element: <Favourites /> },
	{ path: "/Profile", element: <Profile /> },
	{ path: "/Cart", element: <Cart /> },
];
