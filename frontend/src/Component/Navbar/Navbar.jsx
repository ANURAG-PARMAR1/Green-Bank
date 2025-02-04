import { NavLink } from "react-router-dom"
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Avatar } from "../Profile/Avatar";
import { useSelector } from "react-redux";

const routes = [
	{ name: "Home", href: "#", isActive: true },
	{ name: "Services", href: "#", isActive: false },
	{ name: "Why us?", href: "#", isActive: false },
	{ name: "How It Works", href: "#", isActive: false },
	{ name: "Features", href: "#", isActive: false },
	{ name: "Testimonials", href: "#", isActive: false },
];



const NavMenu = ({ routes }) => (
	<>
		{routes.map((route, i) => (
			<li key={i}>
				<a
					className={`px-4 ${
						route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
					}`}
					href={route.href}
				>
					{route.name}
				</a>
			</li>
		))}
	</>
);

NavMenu.propTypes = {
	routes: PropTypes.array.isRequired,
};


export const Navbar = () => {

	const user  = localStorage.getItem("user");

	return (
		<div className="ezy__nav2 light py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
			<nav>
				<div className="container px-4">
					<div className="flex justify-between items-center">
						<a className="font-black text-3xl" href="#!">
							{" "}
							Easy Frontend{" "}
						</a>
						<button
							className="block lg:hidden cursor-pointer h-10 z-20"
							type="button"
							id="hamburger"
						>
							<div className="h-0.5 w-7 bg-black dark:bg-white -translate-y-2"></div>
							<div className="h-0.5 w-7 bg-black dark:bg-white"></div>
							<div className="h-0.5 w-7 bg-black dark:bg-white translate-y-2"></div>
						</button>
						<ul
							className="flex flex-col lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent"
							id="navbar"
						>
							<NavMenu routes={routes} />
							{user ? 
							
							
								<Avatar/> : 
							<section className="flex gap-5"><li>
			                   <NavLink to = "/signup">
                               <button  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-1.5 px-4 rounded">
				                    Sign Up
			                    </button>
                               </NavLink>
		                    </li>
		                    <li>
                            <NavLink to = "/login">
                               <button  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-1.5 px-4 rounded">
				                    Login
			                    </button>
                               </NavLink>
		                    </li>   </section>}
						</ul>
					</div>
				</div>
			</nav>
		</div>
        
	);
};
