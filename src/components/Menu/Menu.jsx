import React from 'react';
import styled from 'styled-components';

const MenuSection = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: gray;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const DishList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const DishCard = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 15px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #00c853;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
`;

const DishImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 10px auto;
`;

const DishTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const DishDescription = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 10px;
`;

const PriceRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Price = styled.div`
  color: red;
  font-weight: bold;
  font-size: 1.1rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  color: gold;
`;

const Menu = () => {
  const dishes = [
    {
      id: 1,
      name: "Fattoush salad",
      description: "Description of the item",
      price: "$24.00",
      rating: 4.9,
      image: "https://via.placeholder.com/100", // Replace with your image URL
    },
    {
      id: 2,
      name: "Vegetable salad",
      description: "Description of the item",
      price: "$26.00",
      rating: 4.6,
      image: "https://via.placeholder.com/100", // Replace with your image URL
    },
    {
      id: 3,
      name: "Egg vegi salad",
      description: "Description of the item",
      price: "$23.00",
      rating: 4.5,
      image: "https://via.placeholder.com/100", // Replace with your image URL
    },
  ];

  return (
    <MenuSection>
      <SubTitle>Special Dishes</SubTitle>
      <Title>Standout Dishes From Our Menu</Title>
      <DishList>
        {dishes.map((dish) => (
          <DishCard key={dish.id}>
            <HeartIcon>♥</HeartIcon>
            <DishImage src={dish.image} alt={dish.name} />
            <DishTitle>{dish.name}</DishTitle>
            <DishDescription>{dish.description}</DishDescription>
            <PriceRating>
              <Price>{dish.price}</Price>
              <Rating>
                ★ {dish.rating}
              </Rating>
            </PriceRating>
          </DishCard>
        ))}
      </DishList>
    </MenuSection>
  );
};

export default Menu;
