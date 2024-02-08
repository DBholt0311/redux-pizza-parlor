import { useSelector } from 'react-redux';

function PizzaList({ pizzaListRefreshCall }) {
  let pizzaList = useSelector((store) => store.pizza);
  return (
    <section>
      <h3>Step 1: Select Your Pizza!</h3>

      {pizzaList.map((pizza) => {
        return (
          //change value
          <ul key={pizza.id}>
            <div>
              <b>{pizza.name}</b>
            </div>
            {pizza.description} {''} ${pizza.price}
            {/* TODO: add once item.jsx is complete - pizzaListRefreshCall={pizzaListRefreshCall} */}
            {/* can add diff url for img later*/}
            {/* <img src={pizzaData.image_path} /> */}
          </ul>
        );
      })}
    </section>
  );
}

export default PizzaList;
