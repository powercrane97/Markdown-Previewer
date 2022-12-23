import Fullscreen from "./assets/fullscreen.svg";
import FullscreenExit from "./assets/fullscreen-exit.svg";

function FullScreenButton({ onClick, toggled }) {
  return (
    <button className='fullscreen-btn' onClick={onClick}>
      <img
        className='fullscreen-img'
        src={toggled ? FullscreenExit : Fullscreen}
      />
    </button>
  );
}
export default FullScreenButton;
