import FullScreenButton from "./FullScreenButton"

function Buttons({onClick}) {
	return (
		<>
			{/* // clear button */}
			<FullScreenButton onClick={onClick}/>
		</>
	)
}

export default Buttons;