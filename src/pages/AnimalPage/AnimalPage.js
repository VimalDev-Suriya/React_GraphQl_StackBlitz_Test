import React from 'react';
import { Container } from 'react-bootstrap';
import animals from '../../assets/images';
// import star from "../../assets/svg/star.svg"
import './AnimalPage.css';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const FETCH_SINGLE_ANIMAL_QUERY = gql`
    query($slug:String!){
        animal(slug:$slug){
            rating,
            stock,
            description,
            price,
            image,
            title
        }
    }
`;

function AnimalPage() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(FETCH_SINGLE_ANIMAL_QUERY, {
    variables: {
      slug,
    },
  });

  if (loading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>SOmething went worng</div>;
  }

  return (
    <div className="py-5">
      <Container>
        <div className="d-flex">
          <img
            className="product-img"
            src={animals[data.animal.image]}
            style={{ marginRight: '1rem' }}
          />
          <div className="text-container">
            <h1>{data.animal.title}</h1>
            <div className="star-container">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <div className="rating-stock-container">
                <p>{data.animal.rating} rating</p>
                <p>{data.animal.stock} in stock</p>
              </div>
            </div>
            <div className="about-container">
              <h4>About This Animal</h4>
              <ul>
                {data.animal.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cart-container border">
            <p className="price">
              <span>CAD$ {data.animal.price}</span>
            </p>
            <p className="delivery-time">
              FREE delivery: Thursday, Feb 25 Details
              <button className="buy-now-btn" style={{ marginTop: '2rem' }}>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AnimalPage;
