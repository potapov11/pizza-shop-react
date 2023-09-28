import React from 'react';

import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import SortBlock from './components/SortBlock';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsloading] = React.useState(true);

	React.useEffect(() => {
		fetch('https://650df063a8b42265ec2cd729.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
				setIsloading(false);
				console.log(items);
			});
	}, []);

	console.log(items);
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
						{isLoading
							? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
							: items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
