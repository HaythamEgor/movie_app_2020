import React from 'react';
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';

function Food({name, image, altText}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={image} alt={altText} />
    </div>
  );
}

const foodILink = [
  {
    id:1,
    name: '문어빵',
    image: imgA,
    altText: '문어빵을 먹는 모습',
  },
  {
    id:2,
    name: '햄버거',
    image: imgB,
    altText: '햄버거를 먹는 모습',
  },
  {
    id:3,
    name: '피자',
    image: imgC,
    altText: '피자를 먹는 모습',
  },
  {
    id:4,
    name: '치킨',
    image: imgD,
    altText: '치킨을 먹는 모습',
  },
  {
    id:5,
    name: '만두',
    image: imgE,
    altText: '만두를 먹는 모습',
  }
];

// function renderFood(dish) {
//   return <Food name={dish.name} image={dish.image} />
// };

// const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

// <img src = {requestAnimationFrame('./images/1.jpg')} />



function App() {
  console.log (foodILink.map(dish => (<Food key={dish.id} name={dish.name} image={dish.image} />)));
    return (
    <div>
      {foodILink.map(dish => (<Food key={dish.id} name={dish.name} image={dish.image} />))}
    </div>
    );
}

export default App;
