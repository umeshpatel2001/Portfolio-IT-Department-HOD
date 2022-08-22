import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Fade from "react-reveal/Fade";
import data from "./data";

const Reviewer = () => {
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
					Reviewer
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
										{e.Reviewer}
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
					<p>Reviewer</p>
				</div>
			</Fade>
		</>
	);
};

export default Reviewer;
