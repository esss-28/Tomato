import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import checked from './checked.png'
import un_checked from './un_checked.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    checked,
    un_checked
}

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Roll",
        menu_image: menu_2
    },
    {
        menu_name: "Desserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Vegan",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }]


    export const food_list = [
        {
            _id: "1",
            name: "Greek Salad",
            image: food_1,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "A fresh mix of vegetables and feta cheese in olive oil dressing.",
            category: "Salad"
        },
        {
            _id: "2",
            name: "Vegan Salad",
            image: food_2,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "A delightful combination of fresh greens and vegan-friendly ingredients.",
            category: "Vegan"
        }, 
        {
            _id: "3",
            name: "Clover Salad",
            image: food_3,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "A vibrant salad with clover leaves, veggies, and a tangy dressing.",
            category: "Salad"
        }, 
        {
            _id: "4",
            name: "Chicken Salad",
            image: food_4,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Grilled chicken mixed with fresh vegetables and a zesty dressing.",
            category: "Salad"
        }, 
        {
            _id: "5",
            name: "Lasagna Roll",
            image: food_5,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "A classic Italian dish with layers of pasta, cheese, and meat.",
            category: "Roll"
        }, 
        {
            _id: "6",
            name: "Peri Peri Roll",
            image: food_6,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Spicy peri peri chicken wrapped in a soft, warm roll.",
            category: "Roll"
        }, 
        {
            _id: "7",
            name: "Chicken Roll",
            image: food_7,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Succulent chicken pieces wrapped in a crispy roll.",
            category: "Roll"
        }, 
        {
            _id: "8",
            name: "Vegan Roll",
            image: food_8,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "A healthy vegan roll filled with fresh vegetables and spices.",
            category: "Vegan"
        }, 
        {
            _id: "9",
            name: "Ripple Ice Cream",
            image: food_9,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Creamy ice cream with delightful ripples of chocolate or caramel.",
            category: "Desserts"
        }, 
        {
            _id: "10",
            name: "Fruit Ice Cream",
            image: food_10,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Refreshing ice cream made with a variety of fresh fruits.",
            category: "Desserts"
        }, 
        {
            _id: "11",
            name: "Jar Ice Cream",
            image: food_11,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Delicious ice cream served in a convenient, reusable jar.",
            category: "Desserts"
        }, 
        {
            _id: "12",
            name: "Vanilla Ice Cream",
            image: food_12,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Classic vanilla ice cream made with real vanilla beans.",
            category: "Desserts"
        },
        {
            _id: "13",
            name: "Chicken Sandwich",
            image: food_13,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Grilled chicken, fresh lettuce, and mayo in a toasted sandwich.",
            category: "Sandwich"
        },
        {
            _id: "14",
            name: "Vegan Sandwich",
            image: food_14,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Hearty vegan sandwich with fresh vegetables and a savory spread.",
            category: "Sandwich"
        }, 
        {
            _id: "15",
            name: "Grilled Sandwich",
            image: food_15,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "A perfectly grilled sandwich with melted cheese and veggies.",
            category: "Sandwich"
        }, 
        {
            _id: "16",
            name: "Cheese Sandwich",
            image: food_16,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Cheesy goodness packed between two slices of toasted bread.",
            category: "Sandwich"
        }, 
        {
            _id: "17",
            name: "Cup Cake",
            image: food_17,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "A delightful mini cake topped with creamy frosting.",
            category: "Cake"
        }, 
        {
            _id: "18",
            name: "Vegan Cake",
            image: food_18,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "A moist and flavorful cake made entirely from vegan ingredients.",
            category: "Cake"
        }, 
        {
            _id: "19",
            name: "Butterscotch Cake",
            image: food_19,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Rich butterscotch cake with a creamy butterscotch frosting.",
            category: "Cake"
        }, 
        {
            _id: "20",
            name: "Pastry",
            image: food_20,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Flaky pastry filled with a delicious cream or fruit filling.",
            category: "Cake"
        }, 
        {
            _id: "21",
            name: "Burnt Garlic Mushroom",
            image: food_21,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Savory mushrooms sautéed with burnt garlic and spices.",
            category: "Vegan"
        }, 
        {
            _id: "22",
            name: "Fried Cauliflower",
            image: food_22,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Crispy fried cauliflower with a hint of spice and tanginess.",
            category: "Vegan"
        }, 
        {
            _id: "23",
            name: "Mix Vegan Pulao",
            image: food_23,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "A flavorful mix of rice, vegetables, and aromatic spices.",
            category: "Vegan"
        }, 
        {
            _id: "24",
            name: "Rice Zucchini",
            image: food_24,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Healthy rice dish with sautéed zucchini and fresh herbs.",
            category: "Vegan"
        },
        {
            _id: "25",
            name: "Cheese Pasta",
            image: food_25,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Creamy pasta loaded with rich cheese sauce and herbs.",
            category: "Pasta"
        },
        {
            _id: "26",
            name: "Tomato Pasta",
            image: food_26,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Pasta in a tangy tomato sauce with fresh basil and garlic.",
            category: "Pasta"
        }, 
        {
            _id: "27",
            name: "Creamy Pasta",
            image: food_27,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Rich and creamy pasta with a hint of garlic and cheese.",
            category: "Pasta"
        }, 
        {
            _id: "28",
            name: "Chicken Pasta",
            image: food_28,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Pasta with tender chicken pieces in a creamy white sauce.",
            category: "Pasta"
        }, 
        {
            _id: "29",
            name: "Butter Noodles",
            image: food_29,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Simple and delicious noodles coated with butter and herbs.",
            category: "Noodles"
        }, 
        {
            _id: "30",
            name: "Vegan Noodles",
            image: food_30,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Noodles stir-fried with fresh vegetables and vegan sauces.",
            category: "Noodles"
        }, 
        {
            _id: "31",
            name: "Somen Noodles",
            image: food_31,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Thin Japanese noodles served cold with dipping sauce.",
            category: "Noodles"
        }, 
        {
            _id: "32",
            name: "Cooked Noodles",
            image: food_32,
            price: Math.floor(Math.random() * (596 - 259 + 1)) + 259,
            description: "Noodles cooked to perfection with a savory sauce.",
            category: "Noodles"
        }
    ]
