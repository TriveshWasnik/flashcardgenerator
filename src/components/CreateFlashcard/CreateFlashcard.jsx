import React from "react";
import Container from "../Container/Container";
import Button from "../Button";
import TermsDefination from "./TermsDefination";
import CreateGroup from "./CreateGroup";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../../redux/flashcardSlice";
import { store } from "../../redux/store";

const validationSchema = Yup.object({
  group: Yup.object({
    title: Yup.string().required("Flashcard Name is Required"),
    description: Yup.string().required("Flashcard Description is Required"),
  }),
  terms: Yup.array().of(
    Yup.object({
      termTitle: Yup.string().required("Term Title is Required"),
      termDefinition: Yup.string().required("Term Definition is Required"),
    })
  ),
});

function CreateFlashcard() {
  const dispatch = useDispatch();
  const initialValues = {
    group: {
      title: "",
      image: "",
      description: "",
    },
    terms: [
      {
        termTitle: "",
        termDefinition: "",
        termImage: "",
      },
    ],
  };

  const navigate = useNavigate();
  const onSubmit = (values) => {
    try {
      /* Dispatch all the value of flashcard */
      dispatch(addFlashcard(values));
      const flashcardsData = JSON.stringify(
        store.getState().flashcard.flashcards
      );
      /* Store the flashcard data in localStorage */
      localStorage.setItem("flashcards", flashcardsData);
      navigate("/my-flashcard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      {/* Create a new Flashcard Using Formik Form Library */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Container>
              <CreateGroup setFieldValue={setFieldValue} />
            </Container>
            <br />
            <Container>
              <TermsDefination setFieldValue={setFieldValue} values={values} />
            </Container>
            <div className="flex items-center justify-center my-16 ">
              <Button className="px-4 py-2 rounded w-[160px]" type="submit">
                Create
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateFlashcard;
