import React, { useState, useEffect } from "react";
import Card from "./Card";
import db from "../firebase.config";
const Project = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const response = db.collection("Cards");
    const data = await response.get();

    data.docs.forEach((item) => {
      cards.push(item.data());
      //setCards([...cards, item.data()])
    });
    setCards([...cards]);
    console.log(cards);
  };
  return (
    <>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Hey, I'm Liam</h1>
        <p class="lead">A full-stack developer</p>
      </div>
      <div className="container">
        <div class="row">
          {cards &&
            cards.map((card) => {
              return (
                <>
                  <div class="col-sm-4">
                    <Card
                      name={card.name}
                      img={card.img}
                      github={card.github}
                      link={card.link}
                    />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Project;
