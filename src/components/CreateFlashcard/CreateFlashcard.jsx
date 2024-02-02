import React from "react";
import Container from "../Container/Container";
import Button from "../Button";
import TermsDefination from "./TermsDefination";
import CreateGroup from "./CreateGroup";

function CreateFlashcard() {
  return (
    <div className="w-full">
      <Container>
        <CreateGroup />
      </Container>
      <br />
      <Container>
        <TermsDefination />
      </Container>
      <div className="flex items-center justify-center my-16 ">
        <Button>Create</Button>
      </div>
    </div>
  );
}

export default CreateFlashcard;
