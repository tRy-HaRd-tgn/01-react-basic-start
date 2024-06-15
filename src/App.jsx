import Header from "./components/header/Header";
import TeachingSeaction from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import { Fragment, useState } from "react";
import TabSection from "./components/TabSection";
import IntroSection from "./components/IntroSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectsSection from "./components/EffectsSection";
export default function App() {
  const [tab, setTab] = useState("effect");
  return (
    <Fragment>
      <Header />
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTab(current)} />
        {tab == "main" && (
          <>
            <TeachingSeaction />
            <DifferencesSection />
          </>
        )}
        {tab == "feedback" && (
          <>
            <FeedbackSection />
          </>
        )}
        {tab == "effect" && (
          <>
            <EffectsSection />
          </>
        )}
      </main>
    </Fragment>
  );
}
