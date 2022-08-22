import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Fade from "react-reveal/Fade";
import data from "./data";

const Experience = () => {
	const [open, setOpen] = useState(false);
	console.log(open);

	return (
		<>
			<Modal open={open} onClose={() => setOpen(false)} center>
				<h2
					style={{
						textAlign: "center",
						margin: "1rem",
						color: "rgb(0, 28, 85)",
					}}
				>
					Professional Experience: 22 Years of Teaching Experience (15
					years UGC approved)
				</h2>
				<div className="general-table">
					<ol>
						{data.map((e) => {
							return (
								<>
									<li
										style={{
											color: "#7f8daa",
											margin: "1rem 0rem",
										}}
									>
										{e.exprience}
									</li>
								</>
							);
						})}
					</ol>
				</div>
			</Modal>
			<div className="section" id="exprience">
				<Fade bottom>
					<h1>Experience</h1>
				</Fade>
				<div className="section-component">
					<Fade left>
						<div className="section-img">
							<img src="Images/exprience.svg" alt="" />
						</div>
					</Fade>
					<Fade right>
						<div className="section-info">
							<ul>
								<li>
									Currently working as Professor & Head of
									Department, Rajarshi Shahu College of
									Engineering, Tathawade, Pune-33 ( 18th
									October 2021 to till date )
								</li>
								<li>
									Worked as Associate Professor & Head of
									Department in JSPM Narhe Technical Campus,
									Narhe, Pune-41 (10th January 2019 to 31st
									October 2021)
								</li>
								<li>
									Worked as a Dean / Head (second shift) &
									Assistant Professor (UGC Approved) in
									computer Engineering department, Sinhgad
									Institute of Technology & Science, Narhe,
									Pune-411041, (1 st January 2015 to 9 th
									January 2019)
								</li>
							</ul>
							<button class="cta" onClick={() => setOpen(true)}>
								<span>See More...</span>
								<svg
									viewBox="0 0 13 10"
									height="10px"
									width="15px"
								>
									<path d="M1,5 L11,5"></path>
									<polyline points="8 1 12 5 8 9"></polyline>
								</svg>
							</button>
						</div>
					</Fade>
				</div>
			</div>
		</>
	);
};

export default Experience;
