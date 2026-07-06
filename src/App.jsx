import { useState } from "react";

import IntroScreen from "./sections/IntroScreen";
import Hero from "./sections/Hero";
import WeddingDetails from "./sections/WeddingDetails";
import Countdown from "./sections/Countdown";
import Footer from "./sections/Footer";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  function handleOpen() {
    if (isOpening) return;

    setIsOpening(true);

    window.setTimeout(() => {
      setIsOpened(true);
    }, 2700);
  }

  return (
    <>
      {!isOpened ? (
        <IntroScreen onOpen={handleOpen} isOpening={isOpening} />
      ) : (
        <main dir="rtl">
          <Hero />
          <WeddingDetails />
          <Countdown />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;