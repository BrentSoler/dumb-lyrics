import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./css/style.css";
import { humberger, X } from "../../images/index";

function Navbar() {
	const [navState, setNavState] = useState(false);
	const [headerState, setHeaderState] = useState(false);

	const burgerAnim = {
		hidden: {
			backgroundImage: `url (${humberger})`,
		},
		animate: {
			rotate: navState ? 180 : 360,
			backgroundImage: navState ? `url(${X})` : `url(${humberger})`,
		},
	};

	const navAnim = {
		hidden: {
			opacity: 0,
			y: -10,
		},
		animate: {
			y: navState ? 0 : headerState ? "-110%" : "-120%",
			opacity: navState ? 1 : 0,
		},
	};

	const headerAnim = {
		initial: {
			margin: "1.5rem",
			fontSize: "1.5rem",
		},
		animate: {
			zIndex: 50,
			margin: headerState ? "1rem" : "1.5rem",
			fontSize: headerState ? "1rem" : "1.4rem",
			textShadow: headerState ? "-4px 0.1rem black" : "-5px 0.1rem black",
			transition: {
				stifness: 1500,
			},
		},
	};

	const positionAnim = {
		initial: {
			position: "relative",
			zIndex: 50,
			width: "100%",
		},
		animate: {
			width: "100%",
			position: headerState ? "fixed" : "relative",
			top: 0,
		},
	};

	const HeaderAnimation = () => {
		return window.scrollY > 40 ? setHeaderState(true) : setHeaderState(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", HeaderAnimation);

		return () => {
			window.removeEventListener("scroll", HeaderAnimation);
		};
	}, []);

	return (
		<motion.div variants={positionAnim} initial="initial" animate="animate" className="navbar">
			<motion.div
				variants={headerAnim}
				initial="initial"
				animate="animate"
				className="navbar__logo"
			>
				<h1>DUMB</h1>
			</motion.div>

			<motion.button
				className="navbar__btn"
				variants={burgerAnim}
				initial="hidden"
				animate="animate"
				whileHover={{ scale: 1.3 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setNavState(!navState)}
			></motion.button>

			<motion.ul
				variants={navAnim}
				initial="hidden"
				animate="animate"
				className="navbar__items --mobile"
			>
				<Link to="/">
					<li className="item">Home</li>
				</Link>
				<Link to="/News">
					<li className="item">News</li>
				</Link>
				<li className="item">Search</li>
			</motion.ul>

			<ul className="navbar__items --normal">
				<Link to="/">
					<li className="item">Home</li>
				</Link>
				<Link to="/News">
					<li className="item">News</li>
				</Link>
				<li className="item">Search</li>
			</ul>
		</motion.div>
	);
}

export default Navbar;
