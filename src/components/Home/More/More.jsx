import React from "react";
import Achievements from "./Achievements/Achievements";
import Activities from "./Activities/Activities";
import ATAL from "./ATAL/ATAL";
import Books from "./Books/Books";
import Conference from "./Conference/Conference";
import COURSERA from "./COURSERA/COURSERA";
import FDP from "./FDP/FDP";
import "./More.css";
import MOU from "./MOU/MOU";
import NITTTR from "./NITTTR/NITTTR";
import NPTEL from "./NPTEL/NPTEL";
import OtherCertifications from "./OtherCertifications/OtherCertifications";
import Research from "./Research/Research";
import Reviewer from "./Reviewer/Reviewer";
import Seminar from "./Seminar/Seminar";
import Spoken from "./Spoken/Spoken";
import Fade from "react-reveal/Fade";
import Workshop from "./Workshop/Workshop";
import Membership from "./Membership/Membership";
import Session from "./Session/Session";
const More = () => {
	return (
		<>
			<div className="section" id="education">
				<Fade bottom>
					<h1>More About me</h1>
				</Fade>
				<div className="section-component">
					<Seminar />
					<Activities />
					<MOU />
					<Conference />
					<Research />
					<Reviewer />
					<FDP />
					<Achievements />
					<NPTEL />
					<COURSERA />
					<NITTTR />
					<ATAL />
					<Spoken />
					<OtherCertifications />
					<Workshop />
					<Books />
					<Membership />
					<Session/>
				</div>
			</div>
		</>
	);
};

export default More;
