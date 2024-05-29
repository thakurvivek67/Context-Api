import React, { useContext } from "react";
import Array from '../FoodArray/FoodArray';
import '../Styles/FoodList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Context/CartContext";
const FoodList = () => {
    const MenuCtx = useContext(CartContext);
    return (
        <>
            <div>
                <div className="Container">
                    <h2 className="H2">Pizza</h2>
                    <div className="FoodList">
                        {Array.filter(item => item.id.startsWith("P")).map(pizza => (
                            <div key={pizza.id} className="card">
                                <img src={pizza.img} alt={pizza.name} width="250px" height="250px" style={{ "borderRadius": "20px" }} />
                                <div className="NMDS">
                                    <h4 className="H4">{pizza.name}</h4>
                                    <h4 className="H4">{pizza.price} /-</h4>
                                </div>
                                <button className="FBTN" onClick={() => MenuCtx.AddFoodItems(pizza)}>
                                    <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#ffffff", }} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Container">
                    <h2 className="H2">Burger</h2>
                    <div className="FoodList">
                        {Array.filter(item => item.id.startsWith("B")).map(burger => (
                            <div key={burger.id} className="card">
                                <img src={burger.img} alt={burger.name} width="250px" height="250px" style={{ "borderRadius": "20px" }} />
                                <div className="NMDS">
                                    <h4 className="H4">{burger.name}</h4>
                                    <h4 className="H4">{burger.price} /-</h4>
                                </div>
                                <button className="FBTN" onClick={() => MenuCtx.AddFoodItems(burger)}>
                                    <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#ffffff", }} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Container">
                    <h2 className="H2">Noodle</h2>
                    <div className="FoodList">
                        {Array.filter(item => item.id.startsWith("N")).map(noodle => (
                            <div key={noodle.id} className="card">
                                <img src={noodle.img} alt={noodle.name} width="250px" height="250px" style={{ "borderRadius": "20px" }} />
                                <div className="NMDS">
                                    <h4 className="H4">{noodle.name}</h4>
                                    <h4 className="H4">{noodle.price} /-</h4>
                                </div>
                                <button className="FBTN" onClick={() => MenuCtx.AddFoodItems(noodle)}>
                                    <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#ffffff", }} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Container">
                    <h2 className="H2">Ice Cream</h2>
                    <div className="FoodList">
                        {Array.filter(item => item.id.startsWith("I")).map(iceCream => (
                            <div key={iceCream.id} className="card">
                                <img src={iceCream.img} alt={iceCream.name} width="250px" height="250px" style={{ "borderRadius": "20px" }} />
                                <div className="NMDS">
                                    <h4 className="H4">{iceCream.name}</h4>
                                    <h4 className="H4">{iceCream.price} /-</h4>
                                </div>
                                <button className="FBTN" onClick={() => MenuCtx.AddFoodItems(iceCream)}>
                                    <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#ffffff", }} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default FoodList;