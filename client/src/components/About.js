import bg from "../images/bluegrid.png";
export default function About(props) {
  return (
    <div
      ref={props.ref}
      className="w-screen h-screen bg-black bg-cover bg-center flex flex-col items-center text-white md:mt-36 mb-6 "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="text-4xl md:text-6xl leading-tight mt-28">ABOUT</h2>
      <div className="text-md p-8 w-5/6 rounded-xl bg-cardbg bg-opacity-70 h-2/4 mt-16 font-extralight md:text-center md:p-16 md:w-4/6 text-white md:text-2xl ">
        <span className="text-white">
          The AI&ML Club is a dynamic student-led organization dedicated to
          fostering a deep understanding and appreciation for Artificial
          Intelligence and Machine Learning technologies among students at
          Vellore Institute of Technology, Vellore. Established with the vision
          of nurturing a community of learners, innovators, and problem solvers,
          our club serves as a hub for exploring the fascinating intersection of
          AI and ML with various domains such as healthcare, finance, education,
          and more
        </span>
      </div>
    </div>
  );
}
