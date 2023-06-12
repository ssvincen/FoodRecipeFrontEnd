import axios from 'axios';


const FoodRecipeEndPoint = axios.create({
    baseURL: 'https://localhost:7195/'
})


export const APIService = {
    FoodRecipeEndPoint
};