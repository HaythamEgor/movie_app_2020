import React from 'react';
import PropTypes from 'prop-types';

// 이미지 처리
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';

function Food({name, image, altText, rating}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={altText} />
    </div>
  );
}

const foodILink = [
  {
    id:1,
    name: '선도장',
    image: imgA,
    altText: '선도장을 먹는 모습',
    rating: 3
  },
  {
    id:2,
    name: '라면',
    image: imgB,
    altText: '라면을 먹는 모습',
    rating: 4
  },
  {
    id:3,
    name: '또띠아',
    image: imgC,
    altText: '또띠아를 먹는 모습',
    rating: 5
  },
  {
    id:4,
    name: '팟타이',
    image: imgD,
    altText: '팟타이을 먹는 모습',
    rating: 2.5
  },
  {
    id:5,
    name: '만두',
    image: imgE,
    altText: '만두를 먹는 모습',
    rating: 3
  }
];

// function renderFood(dish) {
//   return <Food name={dish.name} image={dish.image} />
// };

// const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

// <img src = {requestAnimationFrame('./images/1.jpg')} />



function App() {
  //console.log (foodILink.map(dish => (<Food key={dish.id} name={dish.name} image={dish.image} />)));
    return (
    <div>
      {foodILink.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} altText={dish.altText} rating={dish.rating}/>
      ))}
    </div>
    );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default App;
