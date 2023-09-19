import * as React from "react";
import { useNavigate } from "react-router-dom";

const Layout: React.FC<{children: React.ReactNode}> = ({children}): JSX.Element => {
    
    const navigate = useNavigate();
    
    return (<main>
        <header>
            <h1 className="custom-navbar">Welcome to Restaurant Menu Browser</h1>
            <button className="btn btn-lg btn-dark" onClick={() => navigate("/restaurant-menu/basket")}>View Basket</button>
        </header>
        <section>
            {children}
        </section>
    </main>);
};

export default Layout;