import React from 'react'
import card1 from '../Cardsimage/card1.png'
import card2 from '../Cardsimage/card2.png'
import card3 from '../Cardsimage/card3.png'
import card4 from '../Cardsimage/card4.png'
import card5 from '../Cardsimage/card5.png'
import card6 from '../Cardsimage/card6.png'
import card7 from '../Cardsimage/card7.png'
import card8 from '../Cardsimage/card8.png'
import card9 from '../Cardsimage/card9.png'
import card10 from '../Cardsimage/card10.png'
import card11 from '../Cardsimage/card11.png'
import card12 from '../Cardsimage/card12.png'
import card13 from '../Cardsimage/card13.png'
import card14 from '../Cardsimage/card14.png'
import card15 from '../Cardsimage/card15.png'
import card16 from '../Cardsimage/card16.png'
import Card from './Card'
import "./Card.css"





    const cardData = [
        { id: "1", content: "Rangoli Reception Table", imageUrl: card1 },
        { id: "2", content: "Welcome Girls & Boys", imageUrl: card2 },
        { id: "3", content: "Nadhaswaram", imageUrl: card3 },
        { id: "5", content: "Angumani Seer", imageUrl: card4 },
        { id: "6", content: "All Pooja Items", imageUrl: card5 },
        { id: "4", content: "Seerpakshanam", imageUrl: card6 },
        { id: "7",  imageUrl: card7 },
        { id: "8", imageUrl: card8 },
        { id: "9", imageUrl: card9 },
        { id: "10",  imageUrl: card10 },
        { id: "11",  imageUrl: card11 },
        { id: "12",  imageUrl: card12 },
        { id: "13",  imageUrl: card13 },
        { id: "14",  imageUrl: card14 },
        { id: "15",  imageUrl: card15 },
        { id: "16",  imageUrl: card16 }
    ];
const CardGrid = () => {
    return (
        <div className="card-grid">
            {cardData.map((card, index) => (
                <Card 
                    key={index}
                    content={card.content}
                    imageUrl={card.imageUrl}
                />
            ))}
        </div>
    );
}

export default CardGrid;
