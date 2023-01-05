import React, { useContext, useState } from "react";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { QuestionContext } from "src/@core/context/QuestionContext";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Home({ handleAnswerValue }: any) {
  const [answerText, setAnswerText] = useState<string>();

  const { getQuestionValue, setQuestionValue } = useContext(QuestionContext);

  const handleValue = (data: string) => {
    const value = data.slice(3, data.length - 4);

    const atLeastOneLetterAndSpace = (str: string) => {
      return /^\S/.test(str);
    };
    const checkString = atLeastOneLetterAndSpace(value);
    if (checkString) {
      const obj = { text: value };
      handleAnswerValue(obj);
      const newobj = { ...getQuestionValue, ...obj };
      setQuestionValue(newobj);
    } else {
      return "";
    }
  };

  return (
    <div>
      <div
        style={{
          height: "200px",
        }}
      >
        <QuillNoSSRWrapper
          style={{
            height: "150px",
          }}
          theme="snow"
          onChange={handleValue}
        />
      </div>
    </div>
  );
}
