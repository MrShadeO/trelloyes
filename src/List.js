import React from 'react';
import Card from './Card';

function List(props) {
    const arrayOfCards = props.cards.map((item) =>
        <Card key={item.id} id={item.id} title={item.title} content={item.content} />
    )
    return (
        <section className="List" id={props.id}>
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {arrayOfCards}
            </div>
        </section>
    );
}

export default List;