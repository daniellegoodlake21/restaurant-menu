import {Fragment, useContext} from "react";
import { context } from "../../context";
import MealComponent from "../../MealComponent";
import Menu, {MenuInterface} from "../../Menu";
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
                        {Menu.map(meal => <MealComponent key={meal.props.key} title={meal.props.title} description={meal.props.description} price={meal.props.price} dietaryPreference={meal.props.dietaryPreference} imagePath={meal.props.imagePath}/>)}
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