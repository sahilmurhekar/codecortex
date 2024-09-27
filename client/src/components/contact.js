import bg from "../images/bluegrid.png";
import { Footer } from "./Footer";
import { AiFillInstagram } from "react-icons/ai";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { LinkItem, LinksContainer } from "../components/MediaLinks";

export default function Contact() {
  return (
    <>
      <div className="w-full bg-black flex flex-col items-center text-white mt-10 py-8">
        <h2 id="contact" className="text-4xl md:text-6xl leading-tight">
          Contact
        </h2>
      </div>
      <div
        className="w-full min-h-screen bg-black bg-cover bg-center flex flex-col items-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-11/12 md:w-4/5 lg:w-4/6 bg-cardbg bg-opacity-70 mt-8 md:mt-16 p-4 flex flex-col items-center rounded-lg">
          <div className="p-4 w-full max-w-3xl text-center">
            <p className="text-lg md:text-xl font-extralight">
              Write to us at <a href="mailto:mlai@vit.ac.in" className="underline">mlai@vit.ac.in</a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[100px] mt-10 md:mt-20">
          <LinksContainer>
            <LinkItem href="https://www.instagram.com/tam.vit_vellore/">
              <AiFillInstagram />
            </LinkItem>
            <LinkItem href="https://medium.com/@tam_vit">
              <FaMedium />
            </LinkItem>
            <LinkItem href="https://www.linkedin.com/company/tam-vit/?originalSubdomain=in">
              <FaLinkedin />
            </LinkItem>
          </LinksContainer>
        </div>
        <Footer />
      </div>
    </>
  );
}
