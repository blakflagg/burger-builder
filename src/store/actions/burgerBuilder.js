import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingsType) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingsType: ingsType
    }
};
export const removeIngredient = (ingsType) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingsType: ingsType
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const initIngredients = () => {
    return dispatch => {

        // axios.get('https://react-burger-builder-c2863.firebaseio.com/ingredients.json')
        axios.get('/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    };
}