/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useRef, forwardRef } from 'react';

const MyButton = forwardRef(({ buttonValue, audioSrc, isOn, onPlay }, ref) => {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (isOn === 1 && audioRef.current) {
      audioRef.current.play();
      const trackName = audioSrc.split('/').pop().replace('.mp3', '');
      onPlay(trackName);  // Call the onPlay function with the processed track name
    }
  };

  return (
    <>
    <button  id={buttonValue}
        ref={ref}
        onClick={handleClick}
        className="drum-pad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 w-full rounded"
      >
        {buttonValue}
        <audio className='clip' id={buttonValue}  ref={audioRef} src={audioSrc}></audio>
      </button>
     

    
      
    </>
  );
});

export default MyButton;
