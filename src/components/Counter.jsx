import React, { useState } from "react";
import "../styles/counter.css";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleOnclickreset = () => {
		setCount(0);
	};
	const handleOnClickPlus = () => {
		setCount(count + 1);
	};

	return (
		<div className="main">
			<div className="body">
				<span className="display">{count}</span>
				<div>
					<button onClick={handleOnclickreset}>Reset</button>
					<button onClick={handleOnClickPlus}>Increase</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
