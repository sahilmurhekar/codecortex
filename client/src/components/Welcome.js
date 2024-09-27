import { Button } from "./Button";
import bg from "../images/bluegrid.png";

export function Welcome({ scrollToEventsSmol, scrollToEventsBig }) {
  return (
    <div
      className="md:w-screen h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center text-white pt-32">
        <h1
          id="home"
          className="text-4xl mt-20 md:text-6xl leading-snug md:leading-tight md:mt-0"
        >
          TAM-VIT
        </h1>
        <p className="text-3xl md:text-5xl font-thin leading-snug md:leading-tight">
          welcomes you to
        </p>
        <h2 className="text-5xl md:text-7xl leading-snug md:leading-tight">
          graVITas'24
        </h2>
        <div className="md:hidden">
          <Button
            className="mt-28"
            what="Discover events"
            onClick={scrollToEventsSmol}
          />
        </div>
        <div className="hidden md:block">
          <Button
            className="mt-28"
            what="Discover events"
            onClick={scrollToEventsBig}
          />
        </div>
      </div>
    </div>
  );
}
