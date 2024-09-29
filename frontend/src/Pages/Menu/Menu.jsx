import React, { useState } from 'react';
import Cards from '../../Component/Cards/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  const [mealType, setMealType] = useState('All');
  const [foodType, setFoodType] = useState('All');

  const foodItems = [
    { name: 'Veg Pizza', type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150', price: 150 },
    { name: 'Chicken Burger', type: 'Non-Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150', price: 80 },
    { name: 'Pasta', type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150', price: 100 },
    { name: 'Sushi', type: 'Non-Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150', price: 200 },
    { name: 'Pancakes', type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150', price: 50 },
    { name: 'Omelette', type: 'Non-Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150', price: 40 },
  ];

  // Function to filter the food items based on meal type and food type (Veg/Non-Veg)
  const filteredFoodItems = foodItems.filter((item) => {
    return (mealType === 'All' || item.meal === mealType) && (foodType === 'All' || item.type === foodType);
  });

  return (
    <div className="container mt-5">
      {/* Filter Section */}
      <div className="mb-4">
        <h2 className="text-center text-secondary mb-4">Menu</h2>
        <div className="d-flex justify-content-center gap-4 mb-4">
          {/* Meal Type Filter */}
          <div>
            <label htmlFor="mealType" className="me-2">Filter by Meal Type:</label>
            <select
              id="mealType"
              className="form-select w-auto"
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>

          {/* Food Type Filter (Veg/Non-Veg) */}
          <div>
            <label htmlFor="foodType" className="me-2">Filter by Food Type:</label>
            <select
              id="foodType"
              className="form-select w-auto"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>
        </div>
      </div>

      {/* Display Filtered Food Cards */}
      <div className="d-flex flex-wrap justify-content-center">
        {filteredFoodItems.map((item, index) => (
          <Cards 
            key={index} 
            foodName={item.name} 
            imageUrl={item.imageUrl} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
