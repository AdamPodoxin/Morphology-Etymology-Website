const analyze = () => {
	fetch("http://morphology-etymology.herokuapp.com/analyze?word=unsuccessful", {
		mode: "no-cors",
	}).then((data) => console.log(data));
};
