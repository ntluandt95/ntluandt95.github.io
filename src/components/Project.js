import React, { useState, useEffect } from 'react'
import Card from './Card'
import db from '../firebase.config'
const Project = () => {

    const [cards, setCards] = useState([])
    useEffect(() => {
        fetchCards()
    }, [])

    const fetchCards = async () => {
        const response = db.collection('Cards');
        const data = await response.get();
        
        data.docs.forEach(item => {
            cards.push(item.data())
            //setCards([...cards, item.data()])
        })
        setCards([...cards])
        console.log(cards)
    }
    return (
        <div className='container'>
            <div class="row">
                {
                    cards && cards.map(card => {
                        return (
                            <>
                            <div class="col-sm-4">
                                <Card name={card.name} img={card.img} github={card.github}/>
                            </div>
                            
                            </>
                        )
                    })
                }



            </div>

        </div>
    )
}

export default Project
