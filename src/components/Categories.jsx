import React from 'react';

function Categories() {
	//хук React useState, который используется для создания состояния в функциональном компоненте.
	//Первое значение "activeIndex" - это текущее значение состояния, а второе значение "setActiveIndex" - это функция, которая позволяет изменять значение состояния.
	const [activeIndex, setActiveIndex] = React.useState(0);
	const onClickCategory = (index) => {
		setActiveIndex(index);
	};

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div class="categories">
			<ul>
				{categories.map((value, index) => (
					<li
						onClick={() => onClickCategory(index)}
						className={activeIndex === index ? 'active' : ''}>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
