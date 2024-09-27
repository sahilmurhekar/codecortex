import { NavItem, NavbarContainer } from "./Navbar";
import { useNavigate } from "react-router-dom";
export default function Nav({
  scrollToAbout,
  scrollToEvents,
  scrollToContact,
}) {
  const navigate = useNavigate();
  function handleHomeNavigate() {
    navigate("/");
  }

  return (
    <div className="w-screen h-30 bg-black flex justify-center pt-10">
      <NavbarContainer>
        <NavItem onClick={handleHomeNavigate}>Home</NavItem>
        <NavItem onClick={scrollToEvents}>Events</NavItem>
        <NavItem onClick={scrollToAbout}>About</NavItem>
        <NavItem onClick={scrollToContact}>Contact</NavItem>
      </NavbarContainer>
    </div>
  );
}
