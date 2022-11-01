import React from "react";
import {
  Fullpage,
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

const FullPageScroll = () => {
  const SectionStyle = {
    heigt: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <PageOne />
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <PageTwo />
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <PageThree />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
