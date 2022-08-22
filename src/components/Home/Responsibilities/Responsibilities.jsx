import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Fade from "react-reveal/Fade";
import data from "./data";

const Responsibilities = () => {
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
					Major Responsibilities Handled (University Level):
				</h2>
				<div className="general-table">
					<ol>
						{data.university.map((e) => {
							return (
								<>
									<li
										style={{
											color: "#7f8daa",
											margin: "1rem 0rem",
										}}
									>
										{e.res}
									</li>
								</>
							);
						})}
					</ol>
				</div>

				<h2
					style={{
						textAlign: "center",
						margin: "1rem",
						color: "rgb(0, 28, 85)",
					}}
				>
					Major Responsibilities Handled (College Level):
				</h2>
				<div className="general-table">
					<ol>
						{data.college.map((e) => {
							return (
								<>
									<li
										style={{
											color: "#7f8daa",
											margin: "1rem 0rem",
										}}
									>
										{e.res}
									</li>
								</>
							);
						})}
					</ol>
				</div>

				<h2
					style={{
						textAlign: "center",
						margin: "1rem",
						color: "rgb(0, 28, 85)",
					}}
				>
					Major Responsibilities Handled (Department Level):
				</h2>
				<div className="general-table">
					<ol>
						{data.department.map((e) => {
							return (
								<>
									<li
										style={{
											color: "#7f8daa",
											margin: "1rem 0rem",
										}}
									>
										{e.res}
									</li>
								</>
							);
						})}
					</ol>
				</div>
			</Modal>
			<div className="section" id="responsibilities">
				<Fade bottom>
					<h1>Responsibilities</h1>
				</Fade>
				<div className="section-component">
					<Fade left>
						<div className="section-img">
							<img src="Images/responsibilities.svg" alt="" />
						</div>
					</Fade>

					<Fade right>
						<div className="section-info">
							<ul>
								<li>
									Domain coordinator for the honors course “
									Artificial Intelligence & Machine Learning”
								</li>
								<li>
									Started Virtual Lab (MHRD & IIT Bombay
									initiative) nodal centre
								</li>
								<li>
									Signed and effectively executed many MoU
									with Industries
								</li>
								<li>NAAC Coordinator</li>
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

export default Responsibilities;
