import spinner from "./assets/spinner.gif";

function Spinner() {
	return (
		<div className="w-100 mt-20">
			<img
				className="text-center mg-auto"
				width={180}
				alt="Loading..."
				src={spinner}
			/>
		</div>
	);
}

export default Spinner;
