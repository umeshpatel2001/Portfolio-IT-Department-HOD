import React from "react";
import "./Footer.css";
import { FaAddressBook, FaPhone, FaMailBulk } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
		<hr />
			<div className="footer">
				<p>
					{" "}
					<b style={{ color: "rgb(0, 28, 85)" }}>NIHAR M. RANJAN</b>
				</p>
				<p
					style={{
						width: "18rem",
						textAlign: "center",
						margin: "auto",
					}}
				>
					<FaAddressBook color="rgb(0, 28, 85)" />
					Behind Maratha Mandir Bavdhan, Pune :
					411021
				</p>
				<p>
					<FaPhone />
					<a href="tel:+919763722262">9763722262</a> &nbsp;,&nbsp;
					<a href="tel:+919881459762">9881459762</a>
				</p>
				<p>
					<FaMailBulk />
					<a
						href="mailto:nihar.pune@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						nihar.pune@gmail.com
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
