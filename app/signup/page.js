"use client";
import { useState } from "react";
import "../styles/animations.css";
import "./style.css";

export default function sign() {
	const [creating, setCreating] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [type, setType] = useState("user");

	return (
		<div className="signing">
			<h1>{creating ? "Sign Up" : "Sign In"}</h1>
			<p>
				{creating ? "Already have an account?" : "Don't have an account?"} <span onClick={() => setCreating(!creating)}>{creating ? "Sign in" : "Sign up"}</span>
			</p>
			<input type="text" placeholder="Your Name" id="name" onKeyDown={(e) => setName(e.target.value)} className={!creating ? "hide" : null} />
			<input type="email" placeholder="Email" id="email" onKeyDown={(e) => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" id="password" onKeyDown={(e) => setPassword(e.target.value)} />
			<input
				type="password"
				placeholder="Confirm Password"
				id="confirm"
				onKeyDown={(e) => setConfirm(e.target.value)}
				className={(!creating ? "hide" : null) + " " + (confirm && confirm != password ? "badMatch" : null)}
			/>
			<div className={"toggle" + (!creating ? " hide" : "")}>
				<button className={type == "user" ? "active" : null} onClick={() => setType("user")}>
					User
				</button>
				<button className={type == "restraunt" ? "active" : null} onClick={() => setType("restraunt")}>
					Restraunt
				</button>
				<button className={type == "chef" ? "active" : null} onClick={() => setType("chef")}>
					Chef
				</button>
			</div>
			<button className="submit">{creating ? "Sign Up" : "Sign In"}</button>
		</div>
	);
}
