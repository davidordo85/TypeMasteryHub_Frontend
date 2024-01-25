//import React from 'react'
import {
  WelcomeSection,
  ExplanationSection,
  MoreExplanationSection,
} from './welcomePageSections';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="text-white">
      <WelcomeSection />
      <ExplanationSection />
      <MoreExplanationSection />
    </div>
  );
};

export default WelcomePage;
