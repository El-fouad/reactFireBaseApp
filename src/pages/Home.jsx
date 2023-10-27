import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseDB";

const Home = () => {
  const [logedIn, setLogedIn] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setLogedIn(user);
    });
  }, []);
    const handelSignOut = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    };
  return (
    <div>
      <div>Home</div>
      {logedIn ? (
        <>
        <div className=" bg-slate-300 ">loged</div>
          <button onClick={handelSignOut} className=" bg-red-500 px-4 py-4 m-4 rounded-full">Sign out</button>
        </>
      ) : (
        < div className=" m-4">
          <Link
            to={"login"}
            className=" bg-slate-400 px-4 py-2 rounded-full mt-10"
          >
            log in
          </Link>
          <Link
            to={"signup"}
            className=" bg-slate-400 px-4 py-2 rounded-full mt-10"
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
