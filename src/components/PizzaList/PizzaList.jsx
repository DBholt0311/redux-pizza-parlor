function PizzaList({ pizzaList, PizzaListRefreshCall }) {
  return (
    <div>
      <h3>Step 1: Select Your Pizza!</h3>
      {pizzaList.map((pizzaData, pizzaIndex) => {
        return (
          //change value

          <ul key={pizzaIndex}>
            <p>{pizzaData.name}</p>
            <p>{pizzaData.description}</p>
            <p>{pizzaData.price}</p>
            {/* can add diff url for img later*/}
            {/* <img src={pizzaData.image_path} /> */}
          </ul>
        );
      })}
    </div>
  );
}

export default PizzaList;
