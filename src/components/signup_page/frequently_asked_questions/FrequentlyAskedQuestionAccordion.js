import React, { useState } from "react";

const FrequentlyAskedQuestionAccordion = (props) => {
  const { title, description } = props.question;
  const [showDescription, SetShowDescription] = useState(false);

  const accordionClickHandler = () => {
    SetShowDescription(!showDescription);
  };

  return (
    <div
      className="w-[340px] md:w-[700px] lg:w-[900px] md:text-xl "
      onClick={accordionClickHandler}
    >
      <div className="bg-gray-600 p-3 m-2 hover:cursor-pointer">
        <AccordionTitle title={title} icon={showDescription ? "-" : "+"} />
      </div>
      {showDescription && (
        <div className="bg-gray-500 m-2 p-3">{description}</div>
      )}
    </div>
  );
};

const AccordionTitle = (props) => {
  const { title, icon } = props;
  return (
    <div className="flex justify-between items-center">
      <span>{title}</span>
      <span className="text-2xl">{icon}</span>
    </div>
  );
};

export default FrequentlyAskedQuestionAccordion;
