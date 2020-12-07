import banners from './banners';
import categories from './Categories';
import deals from './Deals';
import menuItems from './menuItems';
import products from './Products'


const listingItems_ = [
    {
        id:1,
        title: "first item",
        subtitle :"$100", 
        image : {uri: 'http://lorempixel.com/300/200/fashion/'},
        banner : {uri: 'http://lorempixel.com/600/200/fashion/'}

    },
    {
        id:2,
        title: "second item",
        subtitle :"$200", 
        image : {uri:'http://lorempixel.com/300/200/food/'},
        banner : {uri: 'http://lorempixel.com/600/200/food/'}

    },
    {
        id:3,
        title: "third item",
        subtitle :"$300", 
        image : {uri: 'http://lorempixel.com/300/200/technics/'},
        banner : {uri: 'http://lorempixel.com/600/200/technics/'}
    },
    {
        id:4,
        title: "forth item",
        subtitle :"$400", 
        image : {uri: 'http://lorempixel.com/300/200/fashion/'},
        banner : {uri: 'http://lorempixel.com/600/200/food/'}
    },
    {
        id:5,
        title: "fifth item",
        subtitle :"$400", 
        image : {uri: 'http://lorempixel.com/300/200/food/'},
        banner : {uri: 'http://lorempixel.com/600/200/food/'}
    },
    {
        id:6,
        title: "sixth item",
        subtitle :"$400", 
        image : {uri: 'http://lorempixel.com/300/200/technics/'},
        banner : {uri: 'http://lorempixel.com/600/200/food/'}
    },
];
const menuItems_ = [
    {
        title : "Wallet",
        Component:"Wallet",
        icon :  {
            name : "briefcase-outline", 
        }
    }, {
        title : "Address",
        Component:"Address",
        icon :  {
            name : "home-outline", 
        }
    }, {
        title : "Language",
        Component:"Language",
        icon :  {
            name : "earth", 
        }
    }, 
    {
        title : "My Orders",
        Component:"Orders",
        icon :  {
            name : "dump-truck", 
        }
    }, 
    {
        title : "Change Password",
        Component:"ChangePassword",
        icon :  {
            name : "lock", 
        }
    }, 
];


const topProducts = products.products_foods;

class cartProducts {
    static #products = [];
    static getProducts(){
        return this.#products;
    };
    static count() {
      return this.#products.length;
    }
    static total() {
        let total = 0; 

        this.#products.forEach(cartElement =>  total = total + (cartElement.product.price * cartElement.count));

        return total;
      }
    static addProductToCart(product){
        this.#products.push({product,count:1});
    };
    static removeProductFromCart(product){
        this.#products.push({product,count:1});
    };
    static clearCart(){
        this.#products.splice(0,this.#products.length);
    };
    
  }




let favouriteProducts = [];
export default {
    categories ,menuItems,banners,deals, topProducts,favouriteProducts,cartProducts
}