import React from 'react';

import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import SortBlock from './components/SortBlock';
import PizzaBlock from './components/PizzaBlock';

function App() {
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		fetch('https://650df063a8b42265ec2cd729.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
			});
	}, []);

	return (
		<div class="wrapper">
			<Header />
			<div class="content">
				<div class="container">
					<div class="content__top">
						<Categories />
						<SortBlock />
					</div>
					<h2 class="content__title">Все пиццы</h2>
					<div class="content__items">
						{items.map((pizzaItem, index) => (
							<PizzaBlock
								key={index}
								//Можно сделать spread опреатором {...pizzaItem}
								title={pizzaItem.title}
								price={pizzaItem.price}
								imgUrl={pizzaItem.imageUrl}
								sizes={pizzaItem.sizes}
								types={pizzaItem.types}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
