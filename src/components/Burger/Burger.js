import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  let transformedIgredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_,i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr,el) => {
      return arr.concat(el)
    }, []);

    if(transformedIgredients.length == 0) {
      transformedIgredients = <p>Please add ingredients</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIgredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;