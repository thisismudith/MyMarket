// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { doc, setDoc } from "firebase/firestore"; 


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

function emailExists(email) {
    if (db.collection("users").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().email == email) return true
        });
    }));
    return false;
}

async function signUp(){
    var name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        password = document.getElementById("password").value;
    if (emailExists(email)) {
        alert("Email already exists");
        return;
    }

    await setDoc(doc(db, "cities", ), {
        name: name,
        email: email,
        password: password
    });

    alert("Sign up successful");
    window.location.href = "home.html";
}

async function signIn(){
    var email = document.getElementById("email").value,
        password = document.getElementById("password").value;

    if (!emailExists){
        alert("Email does not exist");
        return;
    }

    if (db.collection("users").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().email == email && doc.data().password == password) {
                alert("Sign in successful");
                window.location.href = "home.html";
            }
        });
    }));

    alert("Invalid email or password");
}