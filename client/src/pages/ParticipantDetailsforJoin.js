import React from "react";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import HamburgerMenu from "../components/hamburgerMenu";
import JoinTeam from "../components/JoinTeam";
export default function ParticipantDetailsforJoin({
  scrollToEventsBig,
  scrollToAbout,
  scrollToContact,
  menuItems,
  eventName
}) {
  window.scroll(0, 0);
  return (
    <>
      <div className="hidden md:block">
        <Nav
          scrollToAbout={scrollToAbout}
          scrollToEvents={scrollToEventsBig}
          scrollToContact={scrollToContact}
        />
      </div>
      <div className="md:hidden">
        <HamburgerMenu menuItems={menuItems} />
      </div>

      <div className="w-screen h-screen bg-black bg-cover bg-center">
        <div className="flex flex-col items-center text-white">
          <h1 className="text-4xl md:text-6xl leading-tight mt-14 text-center">
            Join a Team
          </h1>
          <JoinTeam eventName={eventName} />
        </div>
      </div>
      <Footer />
    </>
  );
}
