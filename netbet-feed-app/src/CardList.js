import React from "react";
import Card from "./Card";


const CardList = (props) => {
    const cardComponent = props.items.map((items, i) => {
        return(
            <Card albums={props.items[i]}/>
        );
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;