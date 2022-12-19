import Fullscreen from './assets/fullscreen.svg'
function FullScreenButton({onClick}) {
	return (
		<button className="fullscreen-btn"
		onClick={onClick}>
			<img className="fullscreen-img"src={Fullscreen} />
		</button>
	)
}
export default FullScreenButton;