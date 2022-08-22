import React from "react";
import { FaLinkedinIn, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import "./Hero.css";
const Hero = () => {
	return (
		<>
			<Fade bottom>
				<div className="landing-section">
					<div className="landing-section-info">
						<h1>Nihar Ranjan</h1>
						<h2>( HOD IT )</h2>
						<p>
							To put the honest effort for holistic development of
							the students and organization
							<br />
							High sense of team spirit, Self Motivated, Punctual
							, Good Communication Skill
						</p>
						<div className="landing-section-icon">
							<p>
								<a
									href="https://www.linkedin.com/in/nihar-ranjan-8a243923/"
									target="_blank"
									rel="noreferrer"
								>
									<FaLinkedinIn
										size={30}
										style={{
											// border: "2px solid red",
											// borderRadius: "50rem",
											padding: "0.5rem",
											color: "#0f69c4",
										}}
									/>
								</a>
							</p>
							<p>
								<a href="tel:+919763722262">
									<FaPhoneAlt
										size={30}
										style={{
											padding: "0.5rem",
											marginLeft: "2rem",
											color: "#e4405f",
										}}
									/>
								</a>
							</p>
							<p>
								<a
									href="mailto:nihar.pune@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									<FaMailBulk
										size={30}
										style={{
											padding: "0.5rem",
											marginLeft: "2rem",
											color: "#ea4335",
										}}
									/>
								</a>
							</p>
						</div>
					</div>
					<div className="landing-section-img">
						<img src="images/Home.svg" alt="-" />
					</div>
				</div>
			</Fade>
		</>
	);
};

export default Hero;
