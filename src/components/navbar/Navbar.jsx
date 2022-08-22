import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
function NavBar() {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);

	return (
		<div>
			<div
				className={click ? "main-container" : ""}
				onClick={() => Close()}
			/>
			<nav className="navbar" onClick={(e) => e.stopPropagation()}>
				<div className="nav-container">
					<div className="nav-logo">
						<NavLink exact to="/">
							<img src="Images/Nihar Rangan.png" alt="" />
						</NavLink>
					</div>
					<ul
						className={click ? "nav-menu active" : "nav-menu"}
						style={{ color: "rgb(0, 28, 85)" }}
					>
						<li
							className="nav-item"
							style={{ color: "rgb(0, 28, 85)" }}
						>
							<NavLink
								exact
								to="/"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Home
							</NavLink>
						</li>
						{/* <li
							className="nav-item"
							style={{ color: "rgb(0, 28, 85)" }}
						>
							<NavLink
								exact
								to="/Education"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Education
							</NavLink>
						</li>
						<li
							className="nav-item"
							style={{ color: "rgb(0, 28, 85)" }}
						>
							<NavLink
								exact
								to="/Exprience"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Exprience
							</NavLink>
						</li>
						<li
							className="nav-item"
							style={{ color: "rgb(0, 28, 85)" }}
						>
							<NavLink
								exact
								to="/Responsibilities"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Responsibilities
							</NavLink>
						</li> */}
						<li className="nav-item">
							<a href="#education" className="nav-links">
								Education
							</a>
						</li>
						<li className="nav-item">
							<a href="#exprience" className="nav-links">
							Experience
							</a>
						</li>
						<li className="nav-item">
							<a href="#responsibilities" className="nav-links">
								Responsibilities
							</a>
						</li>

						{/* <li className="nav-item">
							<NavLink
								exact
								to="/#education"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								<a href="#education">Education</a>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/uploadBlog"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Experience
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/contact"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Projects
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Open Source
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Contact
							</NavLink>
						</li> */}
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
				</div>
			</nav>
		</div>
	);
}
export default NavBar;
