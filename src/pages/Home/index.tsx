import {Fragment} from "react";
import MealComponent from "../../MealComponent";
import Menu from "../../Menu";
import * as React from "react";

const Home: React.FC = (): JSX.Element =>
{
   
    return (
        <Fragment>
             <h1 className="custom-navbar">Welcome to Restaurant Menu Browser</h1>
                   
            {
                Menu.length ? (
                    <Fragment>
                    <div className="App">
                    <div className="container text-center">
                        <div className="row">
                        {Menu.map(meal => <MealComponent key={meal.id} id={meal.id} title={meal.title} description={meal.description} price={meal.price} dietaryPreference={meal.dietaryPreference} imagePath={meal.imagePath}/>)}
                        </div>
                    </div>
                </div>
                    </Fragment>
                ) : <h2>No meals found.</h2>
            }
        </Fragment>
    )
}

export default Home;