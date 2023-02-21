import React from 'react'
import Card from '../UI/Card';
import classes from './AvaliableMeals.module.css';
import MealItem from './MealsItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvaliableMeals = (props) => {

    const mealsList = DUMMY_MEALS.map((meal) => (

   <MealItem 
    id = {meal.id}
    key = {meal.id}
    name = {meal.name}
    description = {meal.description}
    price = {meal.price}
   />

    ));
   //  also pass meal = {meal} that passess all properties
  return (

    <section className={classes.meals}>
    <Card>
    <ul>
      {mealsList}
      {/* {DUMMY_MEALS.map((meal) => <li>{meal.name}</li>)} */}
    </ul>
    </Card>

    </section>
  )
}


export default  AvaliableMeals;