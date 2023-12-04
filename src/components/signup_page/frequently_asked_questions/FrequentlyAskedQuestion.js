import React, { useEffect, useState } from "react";
import FrequentlyAskedQuestionAccordion from "./FrequentlyAskedQuestionAccordion";
import SIGN_UP_LANGUAGE from "../../../utils/languages/SignUP/SignUpLangConstant";
import { useSelector } from "react-redux/es/exports";

const FrequentlyAskedQuestion = () => {
  const langKey = useSelector((state) => state.config.language);
  const frequently_asked_questions =
    SIGN_UP_LANGUAGE[langKey].FrequentlyAskedQuestions;
  console.log(SIGN_UP_LANGUAGE[langKey].FrequentlyAskedQuestions);

  return (
    <div className="bg-black text-white flex flex-col items-center p-4">
      <div>
        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div>
        {frequently_asked_questions &&
          frequently_asked_questions.map((question) => {
            return (
              <FrequentlyAskedQuestionAccordion
                key={question.title}
                question={question}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
