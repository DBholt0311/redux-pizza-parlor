function PizzaList({ pizzaList, PizzaListRefreshCall }) {
  return (
    <div>
      <h3>Step 1: Select Your Pizza!</h3>
      <ul>
        {pizzaList.map((pizzaData, pizzaIndex) => {
          return (
            //change value

            <div key={pizzaIndex}>
              <p>{pizzaData.name}</p>
              <p>{pizzaData.description}</p>
              <p>{pizzaData.price}</p>
              <p>{pizzaData.image_path}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default PizzaList;
