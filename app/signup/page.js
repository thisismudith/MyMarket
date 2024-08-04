"use client";
import { useState } from "react";
import "../styles/animations.css";
import "./style.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, getDoc } from "firebase/firestore";
// import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDipKhAfKge_3tFFghhVYnbm-GKIasSA84",
	authDomain: "mymarket-4db2b.firebaseapp.com",
	databaseURL: "https://mymarket-4db2b-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "mymarket-4db2b",
	storageBucket: "mymarket-4db2b.appspot.com",
	messagingSenderId: "451626188613",
	appId: "1:451626188613:web:6500ca1e81b23236b5882c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function emailExists(email) {
	let docRef = doc(db, "users", email);
	const docSnap = await getDoc(docRef);
	return docSnap.exists();
}

async function signUp(){
    var name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        password = document.getElementById("password").value;
	if (name == "" || email == "" || password == "") {
		alert("Please fill all the fields");
		return;
	}
    if (await emailExists(email)) {
        alert("Email already exists");
        return;
    }

    await setDoc(doc(db, "users", email), {
        name: name,
        email: email,
        password: password
    });

    alert("Sign up successful");
	localStorage.setItem("signedin", true);
	let s = window.location.toString();
	window.location = s.slice(0, -6);
}

async function signIn(){
    var email = document.getElementById("email").value,
        password = document.getElementById("password").value;
	if (email == "" || password == "") {
		alert("Please fill all the fields");
		return;
	}

    if (!await emailExists(email)){
        alert("Email does not exist");
        return;
    }

	let docRef = doc(db, "users", email);
	const docSnap = await getDoc(docRef);
	let data = docSnap.data();
	if (data.password == password) {
		alert("Sign in successful");
		let s = window.location.toString();
		window.location = s.slice(0, -6);
		localStorage.setItem("signedin", true);
		return;
	}


    alert("Invalid email or password");
}


export default function sign() {
	const [creating, setCreating] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [type, setType] = useState("user");
	if (localStorage.getItem("signedin")){
		let s = window.location.toString();
		window.location = s.slice(0, -6);
	}

	function doTheDeed() {
		console.log("Hi")
		// Here lies the code that will handle the sign-in and sign-up process
		if (creating) {
			signUp();
		} else {
			signIn();
		}
	}

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
				<button className={type == "restaurant" ? "active" : null} onClick={() => setType("restaurant")}>
					Restaurant
				</button>
				<button className={type == "chef" ? "active" : null} onClick={() => setType("chef")}>
					Chef
				</button>
			</div>
			<button className="submit" onClick={doTheDeed}>
				{creating ? "Sign Up" : "Sign In"}
			</button>
		</div>
	);
}
