import * as React from "react";
import MealInterface from '../MealInterface'


export default class MealComponent extends React.Component <MealInterface, {}>
{
    constructor (props: MealInterface)
    {
        super(props);
    }
    render()
    {
        return <div className="col-lg-3 col-md-5 col-sm-12 meal-item">
                <h3 className="meal-title">{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p className="meal-price">£{this.props.price.toString()}</p>
                <p className="dietary-preference">{this.props.dietaryPreference}</p>
            </div>
    }
}