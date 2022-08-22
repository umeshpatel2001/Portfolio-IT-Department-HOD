import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Education from "./components/Home/Education/Education";
import Experience from "./components/Home/Experience/Experience";
import Responsibilities from "./components/Home/Responsibilities/Responsibilities";
function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/education">
						<Education />
					</Route>
					<Route path="/experience">
						<Experience />
					</Route>
					<Route path="/responsibilities">
						<Responsibilities />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
