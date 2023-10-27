import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseDB";

const Home = () => {
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);
  return (
    <div>
      Home
      <Link to={"login"} className=" bg-slate-400 px-4 py-2 rounded-full mt-10">
        log in
      </Link>
      <Link
        to={"signup"}
        className=" bg-slate-400 px-4 py-2 rounded-full mt-10"
      >
        Sign up
      </Link>
    </div>
  );
};

export default Home;
