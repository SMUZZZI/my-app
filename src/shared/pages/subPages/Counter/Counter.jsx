import React from "react";
import "./counter.css";

function Counter(){
    return(
        <section className="counter">
            <div className="counter-bg"></div>
            <ul className="counter-block">
                <li className="counter-item">
                    <h2 className="counter-numbers">12</h2>
                    <p className="p-black-gray counter-p">Years Of Experiance</p>
                </li>
                <li className="counter-item">
                    <h2 className="counter-numbers">85</h2>
                    <p className="p-black-gray counter-p">Success Project</p>
                </li>
                <li className="counter-item">
                    <h2 className="counter-numbers">15</h2>
                    <p className="p-black-gray counter-p">Active Project</p>
                </li>
                <li className="counter-item">
                    <h2 className="counter-numbers">95</h2>
                    <p className="p-black-gray counter-p">Happy Customers</p>
                </li>
            </ul>
        </section>
    );
}

export default Counter;