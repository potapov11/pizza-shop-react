function showDay() {
	return <p>Сегодня 13 сентября поздравляю с днем программиста</p>;
}

function App() {
	return (
		<div className="App">
			<h1>Привет Реакт</h1>
			{showDay()}
		</div>
	);
}

export default App;
