import React from "react";
import Card from "./Card";

const CardList = (props) => {
    return(
        <div>
            {
                props.items.map((items, i) => {
                    // console.log(i, items)
                    return(
                        <Card 
                        // title={props.items.title} 
                        // artist={props.items.artist} 
                        // label={props.items.label} 
                        // year={props.items.year}
                        albums={props.items[i]}
                        />
                    );
                })
            } 
        </div>
    );
}

export default CardList;