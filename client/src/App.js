import "./App.css";
import { useRef } from "react";
import SurvivalShowdown from "./pages/SurvivalShowdown";
import CodeCortex from "./pages/CodeCortex";
import ParticipantDetailsforCreate from "./pages/ParticipantDetailsforCreate";
import ParticipantDetailsforJoin from "./pages/ParticipantDetailsforJoin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import RedirectToExternal from "./components/RedirectToExternal";

function App() {
  const eventsRefbig = useRef(null);
  const eventsRefsmol = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToEventsBig = () => {
    if (eventsRefbig.current) {
      console.log(eventsRefbig.current); // Check if this logs the correct element
      eventsRefbig.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("eventsRef is null");
    }
  };

  const scrollToEventsSmol = () => {
    if (eventsRefsmol.current) {
      console.log(eventsRefsmol.current); // Check if this logs the correct element
      eventsRefsmol.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("eventsRef is null");
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuItems = [
    {
      label: "Events",
      onClick: () => {
        scrollToEventsSmol();
      },
    },
    {
      label: "About",
      onClick: () => {
        scrollToAbout();
      },
    },
    {
      label: "Contact",
      onClick: () => {
        scrollToContact();
      },
    },
  ];
  // Logic end
  return (
    <>
      {/* Uncomment to view survival shutdown and Code Cortex pages. */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                eventsRefbig={eventsRefbig}
                eventsRefsmol={eventsRefsmol}
                aboutRef={aboutRef}
                contactRef={contactRef}
                scrollToEventsBig={scrollToEventsBig}
                scrollToEventsSmol={scrollToEventsSmol}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
              />
            }
          />
          <Route
            path="/registration-SurvivalShowdown"
            element={
              <SurvivalShowdown
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
              />
            }
          />
          <Route
            path="/registration-CodeCortex"
            element={
              <CodeCortex
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
              />
            }
          />
          {/* Code cortex*/}
          <Route
            path="/registration-DataAlchemy"
            element={<RedirectToExternal url="https://gravitas.vit.ac.in/events/e1a52cc1-47eb-438a-9035-6269eb353d0f"/>}
          />
          {/*Data Alchemy*/}
          <Route
            path="/registration-ParticipantDetails/0"
            element={
              <ParticipantDetailsforCreate
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
                eventName="codecortex"
              />
            }
          />
          <Route
            path="/join-ParticipantDetails/0"
            element={
              <ParticipantDetailsforJoin
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
                eventName="codecortex"
              />
            }
          />
          {/* survival showdown */}
          <Route
            path="/registration-ParticipantDetails/1"
            element={
              <ParticipantDetailsforCreate
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
                eventName="survival"
              />
            }
          />
          <Route
            path="/join-ParticipantDetails/1"
            element={
              <ParticipantDetailsforJoin
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
                eventName="survival"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
