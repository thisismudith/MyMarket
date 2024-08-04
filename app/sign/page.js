"use client";
import "../styles/globals.css";
import "../styles/animations.css";
import "./style.css";

function toggle(num, e) {
    if (num == 1) {
        document.querySelector(".signing h1").innerText = "Sign In";
        document.querySelector(".sign-btn").innerText = "Sign In";
        document.querySelector(".sign-btn").setAttribute("onclick", "signUp()");
        document.getElementById("name").style.display = "none";
        document.getElementById("confirm").style.display = "none";
        document.querySelector(".hidden-toggles").style.display = "none";
        e.currentTarget.parentElement.innerHTML = "Don't have an account? <span style=\"text-decoration: underline; cursor: pointer;\" onclick=\"toggle(this, 2)\">Sign up</span>";
    } else {
        document.querySelector(".signing h1").innerText = "Sign Up";
        document.querySelector(".sign-btn").innerText = "Sign Up";
        document.querySelector(".sign-btn").setAttribute("onclick", "signIn()");
        document.getElementById("name").style.display = "inline-block";
        document.getElementById("confirm").style.display = "inline-block";
        document.querySelector(".hidden-toggles").style.display = "flex";
        e.currentTarget.parentElement.innerHTML = "Already have an account? <span style=\"text-decoration: underline; cursor: pointer;\" onclick=\"toggle(this, 1)\">Sign in</span>";
    }
}

function onChange(e) {
    document.querySelectorAll(".hidden-toggles__input").forEach(e => e.removeAttribute("checked"))
    e.setAttribute("checked", "");
};

export default function sign() {
    return (
    <div class="signing">
        <h1>Sign Up</h1>
        <p>Already have an account? <span style={{textDecoration: "underline", cursor: "pointer"}} onClick={() => {toggle(1)}}>Sign in</span></p>
        <div>
            <input type="text" placeholder="Your Name" id="name" />
            <input type="email" placeholder="Email" id="email" />
            <input type="password" placeholder="Password" id="password" />
            <input type="password" placeholder="Confirm Password" id="confirm" />
			<div class="hidden-toggles">
                <input type="radio" id="user" name="type" value="user" class="hidden-toggles__input" onChange={()=>{onChange(document.querySelector('input#user'))}} checked />
                <label for="user" class="hidden-toggles__label">User</label>

                <input type="radio" id="restaurant" name="type" value="restaurant" class="hidden-toggles__input" onChange={()=>{onChange(document.querySelector('input#restaurant'))}} />
                <label for="restaurant" class="hidden-toggles__label">Restaurant</label>

                <input type="radio" id="chef" name="type" value="chef" class="hidden-toggles__input" onChange={()=>{onChange(document.querySelector('input#chef'))}} />
                <label for="chef" class="hidden-toggles__label">Chef</label>
			</div>
        </div>
        <button class="sign-btn" onClick={() => {signUp()}}>Sign Up</button>
    </div>
    )
}