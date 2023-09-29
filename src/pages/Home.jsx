import React from 'react';

import Categories from '../components/Categories';
import SortBlock from '../components/SortBlock';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
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

	return (
		<>
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
		</>
	);
};

export default Home;
