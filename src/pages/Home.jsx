import React from "react";
import Container from "../components/Container/Container";
import CreateFlashcard from "../components/CreateFlashcard/CreateFlashcard";

function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <CreateFlashcard />
    </div>
  );
}

export default Home;
