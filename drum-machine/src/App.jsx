import { useState, useEffect, useRef } from "react";
import MyButton from "./components/MyButton";

function App() {
  const [on, setOn] = useState(1);
  const [playing, setPlaying] = useState("");

  const switchPlaying = (trackName) => {
    setPlaying(trackName);
  };

  const toggleOn = () => {
    setOn((prevOn) => (prevOn === 1 ? 0 : 1));
    if(on === 1){
      setPlaying((""));
    }
  };

  const buttonRefs = {
    Q: useRef(null),
    W: useRef(null),
    E: useRef(null),
    A: useRef(null),
    S: useRef(null),
    D: useRef(null),
    Z: useRef(null),
    X: useRef(null),
    C: useRef(null),
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      if (buttonRefs[key] && buttonRefs[key].current) {
        buttonRefs[key].current.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [buttonRefs]);

  return (
    <>
      <div id="drum-machine" className="container mx-auto flex items-center justify-center h-screen">
        <div>
          <h1 className="bg-purple-400 text-4xl p-4">My Drum Machine</h1>
          <div id="display" className="w-full h-10 bg-slate-100 text-center mx-auto align-middle p-2"> {playing}</div>
          <button
            onClick={toggleOn}
            className={`${
              on === 1 ? "bg-green-500 hover:bg-green-700" : "bg-red-500 hover:bg-red-700"
            } text-white font-bold py-2 px-4 border border-blue-700 rounded w-full text-center`}
          >
            On/Off
          </button>

          <div className="grid grid-rows-3 grid-cols-3 gap-4 bg-pink-400 p-4">
            <MyButton
              ref={buttonRefs.Q}
              buttonValue="Q"
              isOn={on}
              audioSrc="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
              onPlay={switchPlaying}
            />
            <MyButton
              ref={buttonRefs.W}
              buttonValue="W"
              isOn={on}
              audioSrc="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
              onPlay={switchPlaying}
            />
            <MyButton
              ref={buttonRefs.E}
              buttonValue="E"
              isOn={on}
              audioSrc="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
              onPlay={switchPlaying}
            />
            <MyButton
              ref={buttonRefs.A}
              buttonValue="A"
              isOn={on}
              audioSrc="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
              onPlay={switchPlaying}
            />
            <MyButton
              ref={buttonRefs.S}
              buttonValue="S"
              isOn={on}
              audioSrc="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
              onPlay={switchPlaying}
            />
            <MyButton
              ref={buttonRefs.D}
              buttonValue="D"
              isOn={on}
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              onPlay={switchPlaying}
            />
            <MyButton
              ref={buttonRefs.Z}
              buttonValue="Z"
              isOn={on}
              audioSrc="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
              onPlay={switchPlaying}
            />
            <MyButton
              ref={buttonRefs.X}
              buttonValue="X"
              isOn={on}
              audioSrc="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
              onPlay={switchPlaying}
            />
            <MyButton
              ref={buttonRefs.C}
              buttonValue="C"
              isOn={on}
              audioSrc="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
              onPlay={switchPlaying}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
