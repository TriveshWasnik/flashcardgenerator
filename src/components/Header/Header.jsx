import React from "react";
import Container from "../Container/Container";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";

function Header() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Create New",
      slug: "/",
      active: true,
    },
    {
      name: "My Flashcard",
      slug: "/my-flashcard",
      active: true,
    },
  ];
  return (
    <>
      <div className="py-6 bg-white">
        <Container>
          <nav className="flex">
            <div className="mr-4">
              <Link to="/">
                <h3 className="text-3xl font-bold">
                  <span className=" bg-[#cc1313] text-[#fff] px-1">Al</span>
                  maBetter
                </h3>
              </Link>
            </div>
            <div className="ml-auto">
              <Button className="w-full">Login/Signup</Button>
            </div>
          </nav>
        </Container>
      </div>
      <header className="py-10">
        <Container>
          <h3 className="font-bold text-[24px]">Create Flashcard</h3>
          <ul className="flex py-4 border-b-2 border-[#ccc] ">
            {navItems.map((menu) =>
              menu.active ? (
                <li
                  key={menu.name}
                  className={`px-4 text-[16px] font-bold text-[#777]`}
                >
                  <button onClick={() => navigate(menu.slug)}>
                    {menu.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </Container>
      </header>
    </>
  );
}

export default Header;
