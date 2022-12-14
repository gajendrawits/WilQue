import React, { useContext } from "react";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { QuestionContext } from "src/@core/context/QuestionContext";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Home() {
  const { getQuestionValue, setQuestionValue } = useContext(QuestionContext);

  const handleValue = (data: any) => {
    const value = data.slice(3, data.length - 4);
    const obj = { text: value };
    const newobj = { ...getQuestionValue, ...obj };
    setQuestionValue(newobj);
  };

  return <QuillNoSSRWrapper theme="snow" onChange={handleValue} />;
}
