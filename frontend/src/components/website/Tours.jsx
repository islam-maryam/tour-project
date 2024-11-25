
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config/config";

const Tours = ({ scrollToSection }) => {
  const [allTour, setTours] = useState([]);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    async function fetchInfo() {
      const tourUrl = `http://${baseUrl}/api/tours`;
      const {
        data: { data: tours },
      } = await axios.get(tourUrl);
      setTours(tours);
    }
    fetchInfo();

    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = () => {
    const target = document.getElementById("targetSection");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-[80%] flex flex-wrap mx-auto p-5 my-auto mt-6 border-2 justify-center items-center   border-neutral-800/10">
      <h1 className="text-3xl sm:text-5xl font-serif mt-[50px] mb-[70px] text-lime-900 font-extrabold text-center">
        Book your favourite destination!
      </h1>

      <div className="flex flex-col w-[600px] flex-wrap justify-center items-center mt-10 gap-6">
        {allTour.map((tour, idx) => (
          <div
            key={idx}
            className=" sm:w-[400px] lg:w-[600px] w-[280px] text-center border-2  border-neutral-800/10 hover:border-neutral-800/20 p-5 mb-3 rounded-md"
          >
            <h2 className="font-serif uppercase text-2xl sm:text-3xl text-lime-950 font-extrabold">
              {tour.location}
            </h2>
            <p className="text-lg text-lime-950">Price: {tour.price}</p>
            <p className="text-lg text-lime-950">
              Available Seats: {tour.maxSeats - tour.totalOccupiedSeat}
            </p>
            <p className="text-lg text-lime-950">
              Start Date: {new Date(tour.startDate).toLocaleDateString()}
            </p>
            <p className="text-lg text-lime-950">
              End Date: {new Date(tour.endDate).toLocaleDateString()}
            </p>

            <Link to={`/book-tour/${tour._id}`}>
              <button className="mt-6  transition ease-in-out delay-150 shadow-lg bg-lime-900 hover:bg-lime-800 text-black text-xl sm:text-2xl lg:w-[400px] sm:w-[200px] py-2 rounded-full font-semibold hover:font-bold">
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div
        id="scrollButton"
        onClick={handleScrollToSection}
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer text-white animate-bounce p-3 bg-lime-500 rounded-full shadow-lg hover:bg-lime-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6">
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"/>
        </svg>
      </div>

      {showScrollUp && (
        <div
          onClick={handleScrollToTop}
          className="fixed bottom-5 right-1/2 cursor-pointer animate-bounce  transform -translate-x-1/2  text-white p-3 bg-lime-500 rounded-full shadow-lg hover:bg-lime-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"/>
          </svg>
        </div>
      )}

      <div
        id="targetSection"
        className="h-[50px] flex items-center justify-center"
      >
        <h1 className="text-1xl text-red-600 pb-[100px] mt-[100px] font-bold">
          Currently, there are no tour plans available. Please check back later!
        </h1>
      </div>
    </div>
  );
};

export default Tours;
