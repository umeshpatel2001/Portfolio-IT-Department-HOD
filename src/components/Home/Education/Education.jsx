import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import Fade from "react-reveal/Fade";
import "react-responsive-modal/styles.css";
import data from "./data";

const Education = () => {
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
					Education
				</h2>
				<div className="general-table">
					<table>
						<tr>
							<th>Course</th>
							<th>College/ University</th>
							<th>Percentage of Marks</th>
							<th>Division</th>
						</tr>
						{data.map((e) => {
							return (
								<>
									<tr>
										<td>{e.Course}</td>
										<td>{e["College/ University"]}</td>
										<td>{e["Percentage of Marks"]}</td>
										<td>{e.Division}</td>
									</tr>
								</>
							);
						})}
					</table>
				</div>
			</Modal>
			<div className="section" id="education">
				<Fade bottom>
					<h1>My Eduaction</h1>
				</Fade>
				<div className="section-component">
					<Fade left>
						<div className="section-img">
							<img src="Images/education.svg" alt="" />
						</div>
					</Fade>
					<Fade right>
						<div className="section-info">
							<ul>
								<li>
									Post Doctoral Fellowship: Lincoln
									University, Malaysia
								</li>
								<li>
									PhD: Completed from Savitribai Phule Pune
									University (SPPU) Research Center: SKNCOE,
									Pune Guide Name: Dr. Rajesh S. Prasad
								</li>
								<li>
									M.Tech. : Vishweshraiya Technological
									University(V.T.U), Belgaum(Karnataka)
								</li>
								<li>
									BE : North Maharastra University (N.M.U),
									Jalgaon (M.S)
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

export default Education;
