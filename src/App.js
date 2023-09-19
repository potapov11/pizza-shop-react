import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import SortBlock from './components/SortBlock';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizzas.json';

console.log(pizzas);

function App() {
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
						{
							pizzas.map(pizzaItem => 
							<PizzaBlock 
							//Можно сделать spread опреатором {...pizzaItem}
							title={pizzaItem.title} 
							price={pizzaItem.price} 
							imgUrl={pizzaItem.imageUrl}
							sizes={pizzaItem.sizes}
							types={pizzaItem.types}
							/>)
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
