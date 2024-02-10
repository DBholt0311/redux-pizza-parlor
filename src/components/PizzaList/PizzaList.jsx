import { useSelector } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

function PizzaList({ pizzaListRefreshCall }) {
  let pizzaList = useSelector((store) => store.pizza);
  return (
    <section>
      <h3>Step 1: Select Your Pizza!</h3>

      {pizzaList.map((pizza) => (
        <PizzaListItem key={pizza.id} pizza={pizza} />
      ))}
    </section>
  );
}

export default PizzaList;
