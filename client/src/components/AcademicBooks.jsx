import axios from "axios";
import { useEffect, useState } from "react";
import border from "../assets/border.png";
import useAuth from "../hooks/useAuth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AcademicBooks = () => {
  const [books, setBooks] = useState([]);
  const { animationValue } = useAuth();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/academic-books`)
      .then((res) => {
        setBooks(res.data);
      });
  }, []);

  return (
    <div className="mt-20 mx-5 md:mx-0">
      <div className="flex flex-col items-center justify-center">
        <motion.h2 {...animationValue} className="text-2xl font-black font-row">
          Academic Books
        </motion.h2>
        <motion.p
          {...animationValue}
          className="text-p font-semibold text-center mt-2"
        >
          Explore our curated collection of academic books, thoughtfully
          selected to support students, educators, and lifelong learners. From
          essential textbooks to in-depth reference materials, <br /> this
          section is designed to empower your educational journey and provide
          the knowledge you need to excel.
        </motion.p>
        <motion.div {...animationValue}>
          <img src={border} alt="" />
        </motion.div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        {books.map((book, idx) => (
          <motion.div
            {...animationValue}
            key={idx}
            className="dark:bg-c rounded-xl p-5 hover:shadow-2xl shadow-md"
          >
            <img className="w-full h-48 md:h-32 lg:h-40 rounded-xl" src={book?.image} alt="" />
            <h2 className="font-bold text-xl mt-3">{book?.name}</h2>
            <p className="font-semibold">
              <i className="fa-solid fa-school"></i> {book?.class_name}
            </p>
            <div className="flex justify-between items-center">
              <p className="font-semibold">
                <i className="fa-solid fa-calendar-days"></i> {book?.year}
              </p>
              <a href={book.source} target="_blank">
                <button className="font-bold border border-black px-2 py-.5 rounded-md">
                  Read
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <Link to="/academicBookPage">
        <motion.button
          {...animationValue}
          className="border-2 border-black dark:bg-c py-2.5 px-6 font-bold mt-5 font-row rounded-md"
        >
          View More
        </motion.button>
      </Link>
    </div>
  );
};

export default AcademicBooks;
