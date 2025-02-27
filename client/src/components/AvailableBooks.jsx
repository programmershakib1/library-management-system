import CountUp from "react-countup";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";
import border from "../assets/border.png";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const categories = [
  { name: "Novel", end: 350, category: "Novel" },
  { name: "Thriller", end: 480, category: "Thriller" },
  { name: "History", end: 900, category: "History" },
  { name: "Drama", end: 630, category: "Drama" },
  { name: "Sci-Fi", end: 260, category: "Sci-Fi" },
];

const AvailableBooks = () => {
  const { animationValue } = useAuth();

  return (
    <div className="mx-5 md:mx-0 mt-20">
      <motion.h2 {...animationValue} className="text-2xl font-black font-row text-center">
        Available Books
      </motion.h2>
      <motion.p
        {...animationValue}
        className="text-p font-semibold text-center mt-2"
      >
        Discover a diverse collection of books spanning various genres and
        interests. Whether you&apos;re looking for literary classics,
        contemporary bestsellers, or hidden gems, <br /> this selection offers
        something for every reader. Explore and find your next great read!
      </motion.p>
      <motion.div {...animationValue} className="flex justify-center">
        <img src={border} alt="border" />
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
        {categories.map((category, idx) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });
          return (
            <Link
              to={`/category/${category.category}`}
              state={{ filterAvailable: true }}
              key={idx}
            >
              <motion.div
                {...animationValue}
                className="h-40 flex flex-col justify-center items-center p-10 dark:bg- rounded-full shadow-md hover:shadow-2xl dark:bg-c"
              >
                <h2 className="font-black font-row text-lg mb-2">
                  {category.name}
                </h2>
                <motion.div ref={ref}>
                  {inView && (
                    <CountUp
                      start={0}
                      end={category.end}
                      duration={20}
                      className="text-5xl font-bold mt-2 font-row"
                    />
                  )}
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableBooks;
