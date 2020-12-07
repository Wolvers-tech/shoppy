import appColors from '../config/color';
import products from './Products'

const Categories = [
    {
        id:1,
        title: "Fashion",
        image : {uri: 'http://lorempixel.com/300/200/fashion/'},
        products: products.products_fashion
    },
    {
        id:2,
        title: "Food",
        image : {uri:'http://lorempixel.com/300/200/food/'},
        products: products.products_foods
    },
    {
        id:3,
        title: "Technology",
        image : {uri: 'http://lorempixel.com/300/200/technics/'},
        products: products.products_techniques
    }
];


export default Categories;