import * as React from "react";
import MealInterface from '../MealInterface'
import { useNavigate } from "react-router-dom";


const MealComponent : React.FC<MealInterface> = ({id, title, description, price, dietaryPreference, imagePath}) : JSX.Element =>

{
    const navigate = useNavigate();
    const handleClick = () => 
    {
        if (window.location.href.endsWith("restaurant-menu/") || window.location.href.endsWith("restaurant-menu"))
        {
            navigate('/restaurant-menu/'+id.toString());
        }
    }

    return <div onClick={handleClick} className="col-lg-3 col-md-5 col-sm-12 meal-item">
            <h3 className="meal-title">{title}</h3>
            <img src={window.location.origin+imagePath} className="meal-image" alt={title}/>
            <p>{description}</p>
            <p className="meal-price">£{price.toString()}</p>
            <p className="dietary-preference">{dietaryPreference}</p>
        </div>     
}      

export default MealComponent;