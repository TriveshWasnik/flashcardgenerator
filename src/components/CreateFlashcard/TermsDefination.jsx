import React from "react";
import Button from "../Button";
import TermRow from "./TermRow";
import { FieldArray } from "formik";

function TermsDefination({ setFieldValue, values }) {
  return (
    <div className="flex  flex-col bg-white rounded py-8 px-4">
      <FieldArray name="terms">
        {({ push, remove }) => (
          <div>
            {values.terms.map((term, index) => (
              <div key={index}>
                <TermRow
                  setFieldValue={setFieldValue}
                  index={index}
                  remove={remove}
                  values={values}
                />
              </div>
            ))}
            <div className="">
              <Button
                className="mt-5"
                bgColor="transparent"
                textColor="text-[#4834d4]"
                onClick={() =>
                  push({
                    termTitle: "",
                    termDefinition: "",
                    termImage: "",
                  })
                }
              >
                <span className="font-bold text-xl">+</span> Add More
              </Button>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default TermsDefination;
