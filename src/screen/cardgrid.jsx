import React from 'react';
import "./Home.css"; 

const CardGrid = () => {
  const cardData = [
    {
      title: 'Home Storage',
      imageUrl: 'https://media.istockphoto.com/id/683754162/photo/success-concept.jpg?s=612x612&w=0&k=20&c=YWDg7OeSDmCaQJ0tsXOP_ruaYlrKuaQ63P2xeghBSY0=',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    // Add more card data objects as needed
  ];

  return (
    <section className='featured-post container'>
      <h3 className='text-center pt-4'>Top Collections for BE/B.Tech</h3>
      <div className='row'>
        {cardData.map((card, index) => (
          <div key={index} className='col-lg-2 col-md-4 col-sm-6'>
            <div className='card'>
              <img src={card.imageUrl} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{card.title}</h5>
                <p className='card-text'>{card.content}</p>
                <div className='d-grid'>
                  <a href='#' className='btn btn-warning'>Read More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
