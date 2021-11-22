import React from "react";
import Card from "./Card";

const CardList = ({items}) => {
    return(
        <div>
            {
                items.map((i) => {
                    return(
                        <Card 
                        title={items.title} 
                        artist={items.artist} 
                        label={items.label} 
                        year={items.year}
                        />
                    );
                })
            } 
        </div>
    );
}

export default CardList;