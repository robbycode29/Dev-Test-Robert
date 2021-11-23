import React from "react";
import Card from "./Card";


const CardList = (props) => {
    const cardComponent = props.items.map((items, i) => {
        // console.log(i, items)
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