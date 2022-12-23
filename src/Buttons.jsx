import FullScreenButton from "./FullScreenButton";
import ClearButton from "./ClearButton";

function Buttons({ onClick, onClear, toggled }) {
  return (
    <div className='buttons'>
      <ClearButton onClick={onClear} />
      <FullScreenButton onClick={onClick} toggled={toggled} />
    </div>
  );
}

export default Buttons;
