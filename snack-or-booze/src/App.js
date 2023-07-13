import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";
import AddFoodItem from "./AddFoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const snackData = await SnackOrBoozeApi.getSnacks();
      const drinkData = await SnackOrBoozeApi.getDrinks();
      setSnacks(snackData);
      setDrinks(drinkData);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snackCount={snacks.length} drinkCount={drinks.length} />
            </Route>
            <Route exact path="/snacks">
              <FoodMenu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <FoodMenu items={drinks} title="Drinks" />
            </Route>
            <Route exact path="/snacks/:id">
              <FoodItem items={snacks} itemType="snacks" />
            </Route>
            <Route exact path="/drinks/:id">
              <FoodItem items={drinks} itemType="drinks" />
            </Route>
            <Route exact path="/add-item">
              <AddFoodItem />
            </Route>
            <Route path="/404">
              <p>404: Not Found</p>
            </Route>
            <Redirect to="/404" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
