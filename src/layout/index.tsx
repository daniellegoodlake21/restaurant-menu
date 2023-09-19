import * as React from "react";
import { useNavigate } from "react-router-dom";

const Layout: React.FC<{children: React.ReactNode}> = ({children}): JSX.Element => {
    
    const navigate = useNavigate();


    let currentlyInBasket: boolean = window.location.href.endsWith("basket");


    const handleClick = () => {
        if (currentlyInBasket)
        {
            navigate("/restaurant-menu/");
        }
        else
        {
            navigate("/restaurant-menu/basket")
        }
    }

    let buttonText = currentlyInBasket? "Return to Menu" : "View Basket";
    
    return (<main>
        <header>
            <h1 className="custom-navbar">Welcome to Restaurant Menu Browser</h1>
            <button id="btn-view-basket" className="btn btn-lg btn-dark" onClick={() => handleClick()}>{buttonText}</button>
        </header>
        <section>
            {children}
        </section>
    </main>);
};

export default Layout;