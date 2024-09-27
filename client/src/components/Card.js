import { Button } from "./Button";
import { Link } from "react-router-dom";

export function EventCard(props) {
  return (
    <div
      className="flex flex-col w-full md:w-1/5 h-[26rem] bg-cardbg items-center rounded-2xl  mx-auto max-w-sm"
      style={{
        boxShadow: "0 0 10px 1px rgba(30, 58, 138, 0.7)", // Equivalent to shadow-blue-900/70
      }}
    >
      <div className="h-36">
        <img src={props.image} alt={props.alt} className="mt-10 mb-4 w-24 " />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-white">{props.title}</h2>
      <p className="font-extralight px-6 text-center text-sm text-white flex-grow">
        {props.desc}
      </p>
      <Link to={`/registration-${props.where}`} className="mb-6 mt-4">
        <Button what="Register" />
      </Link>
    </div>
  );
}
