import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Notes = () => {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const credits = userData.credits;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 px-6 py-8 ">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" mb-10 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 shadow-[0_20px_45px_rgba(0,0,0,0.6)] items-start flex md:items-center justify-between gap-4 flex-col md:flex-row "
      >
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            ExamGenius
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            Generate exam-focused notes, revision materials, and PDFs with AI
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm  "
            onClick={() => navigate("/pricing")}
          >
            <span className="text-xl">💠</span>
            <span>{credits}</span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2 h-5 w-5 flex items-center justify-center rounded-full bg-white text-xs font-bold "
            >
              ➕
            </motion.span>
          </button>
          <button
            onClick={() => navigate("/history")}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 text-sm font-medium "
          >
            📚 Your Notes
          </button>
        </div>
      </motion.header>

      <motion.div>
        
      </motion.div>
    </div>
  );
};

export default Notes;
