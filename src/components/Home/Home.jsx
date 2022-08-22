import React from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import "./Home.css";
import More from "./More/More";
import Responsibilities from "./Responsibilities/Responsibilities";
const Home = () => {
	return (
		<>
			<Hero />
			<Education />
			<Experience/>
			<Responsibilities/>
			<More/>
		</>
	);
};

export default Home;
