import React from "react";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button";

function Header() {
  return (
    <>
      <div className="py-6 bg-white">
        <Container>
          <nav className="flex w-full">
            <div className="mr-4">
              {/* Logo : Home Page Link */}
              <Link to="/">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className=" bg-[#cc1313] text-[#fff] px-1">Al</span>
                  maBetter
                </h3>
              </Link>
            </div>
            {/* Dummy login and Signup Button */}
            <div className="ml-auto">
              <Button className="px-2 md:px-4 py-2 rounded w-[140px]  md:text-[16px] ">
                Login/Signup
              </Button>
            </div>
          </nav>
        </Container>
      </div>
      <header className="py-10">
        <Container>
          <h3 className="font-bold text-[20px] md:text-[24px]">
            Create Flashcard
          </h3>
          <ul className="flex border-b-2 py-4 border-[#ccc] ">
            {/* Create New and My Flashcard Menu  */}
            <li
              className={`px-2 md:px-4 text-[14px]  md:text-[16px] font-bold `}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#cc1313] border-b-4 border-[#cc1313] "
                      : "text-[#777]"
                  } pb-4  `
                }
              >
                Create New
              </NavLink>
            </li>
            <li
              className={`px-2 md:px-4 text-[14px] md:text-[16px] font-bold `}
            >
              <NavLink
                to="/my-flashcard"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#cc1313] border-b-4 border-[#cc1313] "
                      : "text-[#777]"
                  } pb-4 `
                }
              >
                My Flashcard
              </NavLink>
            </li>
          </ul>
        </Container>
      </header>
    </>
  );
}

export default Header;
