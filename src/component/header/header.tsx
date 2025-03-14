import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const navData = [
  { route: "/", label: "Home" },
  { route: "#", label: "Movies" },
  { route: "#", label: "TV Shows" },
];

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${search}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0d0233] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-blue-200 flex justify-between items-center px-10 py-5 w-full max-w-[1440px] mx-auto relative">
        <h2 className="text-blue-200 font-bold italic text-3xl">MovieApp</h2>

        <nav className="hidden md:flex gap-10">
          {navData.map((item) => (
            <a
              key={item.route}
              className="hover:text-gray-300 transition-colors duration-300"
              href={item.route}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-blue-50 rounded-lg overflow-hidden"
        >
          <input
            type="text"
            className="px-3 py-1 text-black outline-none w-40 md:w-60"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 py-2 bg-gray-700 hover:bg-gray-600 transition"
          >
            <MagnifyingGlassIcon className="h-5 w-5 text-blue-200" />
          </button>
        </form>

        <button onClick={() => setToggle(!toggle)} className="md:hidden">
          {toggle ? (
            <XMarkIcon className="h-7 w-7 text-blue-200" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-blue-200" />
          )}
        </button>

        {toggle && (
          <nav className="absolute top-full left-0 w-full bg-[#0c0a40] flex flex-col items-center gap-4 py-5 md:hidden">
            {navData.map((item) => (
              <a
                key={item.route}
                className="hover:text-gray-300 transition-colors duration-300 py-2 text-lg"
                href={item.route}
              >
                {item.label}
              </a>
            ))}

            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white rounded-lg overflow-hidden w-3/4"
            >
              <input
                type="text"
                className="px-3 py-1 text-black outline-none w-full"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 transition"
              >
                <MagnifyingGlassIcon className="h-5 w-5 text-blue-200" />
              </button>
            </form>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
