import React from "react";
import CartButton from "./CartButton";
import '../Styles/Head.css';
const Head = props => {
    return (
        <>
            <div className="head">
                <div className="B1">
                    <h1 className="H1">Speedy Snacks</h1>
                </div>
                <div className="B1">
                    <CartButton Click={props.OnShowCart} />
                </div>
            </div>
        </>
    );
}
export default Head;