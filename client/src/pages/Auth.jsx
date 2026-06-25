import React from "react";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import axios from "axios";
import { ServerUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const User = response.user;
      const name = User.displayName;
      const email = User.email;

      const result = await axios.post(
        ServerUrl + "/api/auth/google",
        { name, email },
        { withCredentials: true },
      );

      dispatch(setUserData(result.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black px-8 ">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto mt-8 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 shadow-[0_20px_45px_rgba(0,0,0,0.6)] "
      >
        <h1 className="text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          ExamGenius
        </h1>
        <p className="text-sm text-gray-300 mt-1">
          Generate exam-focused notes, revision materials, and PDFs with AI
        </p>
      </motion.header>

      <main className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-linear-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent ">
            Unlock Smart <br /> AI Notes
          </h1>
          <motion.button
            onClick={handleGoogleAuth}
            whileHover={{
              y: -10,
              rotateX: 8,
              rotateY: -8,
              scale: 1.07,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="mt-10 px-10 py-3 rounded-xl flex item-center gap-3 bg-linear-to-br from-black/90 via-black/80 to-black/90 border border-white/10 text-white font-semibold text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)] "
          >
            <FcGoogle size={22} />
            Continue with Google
          </motion.button>

          <p className="mt-6 max-w-xl text-lg bg-linear-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent">
            Get <span className="font-semibold">50 FREE credits</span> to create
            exam notes, project notes, charts, graphs, and downloadable PDFs
            instantly with AI.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            50 free credits included <span className="mx-1">·</span> Upgrade
            anytime <span className="mx-1">·</span> Instant access
          </p>
        </motion.div>

        {/* Right Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Feature
            icon={"🎁"}
            title="50 Free Credits"
            desc="Start with 50 free credits to generate notes without paying."
          />

          <Feature
            icon={"📘"}
            title="Exam Notes"
            desc="High-yield, revision-ready, exam-oriented notes."
          />

          <Feature
            icon={"📂"}
            title="Project Notes"
            desc="Well-structured documentation for assignments and projects."
          />

          <Feature
            icon={"📊"}
            title="AI-Generated Diagrams"
            desc="Automatically generated diagrams, charts, and flowcharts."
          />

          <Feature
            icon={"⬇️"}
            title="Free PDF Download"
            desc="Download clean, printable PDFs instantly."
          />
        </div>
      </main>
    </div>
  );
};

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: 8,
        rotateY: -8,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative rounded-2xl p-6 bg-linear-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] text-white "
    >
      <div className="relative z-10 " style={{ transform: "translateZ(30px)" }}>
        <div className="text-4xl mb-3 ">{icon}</div>
        <h3 className="text-lg font-semibold mb-2 ">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed ">{desc}</p>
      </div>
    </motion.div>
  );
}

export default Auth;
