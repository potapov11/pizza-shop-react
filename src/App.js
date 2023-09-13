import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import SortBlock from './components/SortBlock';
import PizzaBlock from './components/PizzaBlock';

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
						<PizzaBlock title="Мексиканская" price="500" />
						<PizzaBlock title="4 сыра" price="550" />
						<PizzaBlock title="Вегетарианская" price="400" />
						<PizzaBlock title="Шаверма-пицца" price="450" />
						<PizzaBlock title="Неаполитано" price="300" />
						<PizzaBlock title="Маргарита" price="350" />
						<PizzaBlock title="Деревенская" price="590" />
						<PizzaBlock title="Капрезе" price="490" />
						<PizzaBlock title="Миланская" price="390" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
