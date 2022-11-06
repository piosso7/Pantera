import React from "react";
import {
  Fullpage,
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";

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
        <FullpageSection style={SectionStyle}>
          <PageFour />
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <PageFive />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
