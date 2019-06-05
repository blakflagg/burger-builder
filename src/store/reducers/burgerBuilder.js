import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
}

const addIngredient = (state, action) => {
  const updatedIngredient = { [action.ingsType]: state.ingredients[action.ingsType] + 1 };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingsType],
    building: true
  }
  return updateObject(state, updatedState);
};
const removeIngredient = (state, action) => {
  const updatedIngredient = { [action.ingsType]: state.ingredients[action.ingsType] - 1 };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingsType],
    building: true
  }
  return updateObject(state, updatedState);

};
const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false,
    building: false 
  })
};
const fetchIngredients = (state, action) => {
      return updateObject(state, { error: true })
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredients(state, action);
    default: return state;

  }
}

export default rootReducer;