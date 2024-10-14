import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-around text-xl justify-items-center p-3">
        <h1 className="p-3">Numerical Method</h1>
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => navigate("/")}
            className="border p-2 mr-5 rounded-md hover:bg-green-200"
          >
            Root of Equation
          </button>
          <button
            onClick={() => navigate("/Linear")}
            className="border p-2 mr-5 rounded-md hover:bg-green-200"
          >
            Linear algebra equation
          </button>
          <button
            onClick={() => navigate("/Interpolation")}
            className="border p-2 mr-5 rounded-md hover:bg-green-200"
          >
            Interpolation
          </button>
          <button
            onClick={() => navigate("/Extrapolation")}
            className="border p-2 mr-5 rounded-md hover:bg-green-200"
          >
            Extrapolation
          </button>
          <button
            onClick={() => navigate("/Integration")}
            className="border p-2 mr-5 rounded-md hover:bg-green-200"
          >
            Integration
          </button>
          <button className="border p-2 mr-5 rounded-md hover:bg-green-200">
            Differentiation
          </button>
        </div>
        <div className="md:hidden p-3">
          <button id="menu-toggle" className="text-black" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col space-y-2 p-3">
          <button
            onClick={() => navigate("/")}
            className="border p-2 rounded-md hover:bg-green-200"
          >
            Root of Equation
          </button>
          <button
            onClick={() => navigate("/Linear")}
            className="border p-2 rounded-md hover:bg-green-200"
          >
            Linear algebra equation
          </button>
          <button
            onClick={() => navigate("/Interpolation")}
            className="border p-2 rounded-md hover:bg-green-200"
          >
            Interpolation
          </button>
          <button
            onClick={() => navigate("/Extrapolation")}
            className="border p-2 mr-5 rounded-md hover:bg-green-200"
          >
            Extrapolation
          </button>
          <button
            onClick={() => navigate("/Integration")}
            className="border p-2 rounded-md hover:bg-green-200"
          >
            Integration
          </button>
          <button className="border p-2 rounded-md hover:bg-green-200">
            Differentiation
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
