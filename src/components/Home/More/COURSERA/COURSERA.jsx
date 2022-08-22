import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Fade from "react-reveal/Fade";
import data from "./data";

const COURSERA = () => {
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
					COURSERA Courses Certification
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
										{e.COURSERA}
									</li>
								</>
							);
						})}
					</ol>
				</div>
			</Modal>
			<Fade bottom>
				<div
					className="section-component-more"
					onClick={() => {
						setOpen(true);
					}}
				>
					<p>COURSERA Courses Certification</p>
				</div>
			</Fade>
		</>
	);
};

export default COURSERA;
