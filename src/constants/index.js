import { Links } from "./Links"
import Colors from '../theme/Colors'
import { Article, Author, News } from "../assets/icons"
import routeNames from "../navigation/routeNames"

export const defaultTodos = [
  {
    id: 2,
    product: "Meat",
    shop: "Перший м'ясний"
  },
  {
    id: 3,
    product: "Sausage",
    shop: "Ковбасні традиції"
  },
  {
    id: 4,
    product: "Cheese",
    shop: "Сирний сомельє"
  },
  {
    id: 5,
    product: "Butter",
    shop: "Молочний двір"
  },
  {
    id: 6,
    product: "Milk",
    shop: "Молочний двір"
  },
  {
    id: 7,
    product: "Tea",
    shop: "Магазин Чай-Кава"
  },
  {
    id: 8,
    product: "Coffee",
    shop: "Магазин Чай-Кава"
  },
  {
    id: 9,
    product: "Sugar",
    shop: "Сільпо"
  },
  {
    id: 10,
    product: "Pasta",
    shop: "Сільпо"
  },
  {
    id: 11,
    product: "Bread",
    shop: "Сільпо"
  },
  {
    id: 12,
    product: "Pea",
    shop: "Сільпо"
  },
  {
    id: 13,
    product: "Fish",
    shop: "Дари моря"
  },
  {
    id: 14,
    product: "Oil",
    shop: "Сільпо"
  },
  {
    id: 15,
    product: "Flour",
    shop: "Сільпо"
  },
  {
    id: 16,
    product: "Vegetables",
    shop: "Фермерський базар"
  }
]

export const blogScreens = [
  {
    id: 1,
    title: "Author",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: Links.author,
    icon: <Author/>
  },
  {
    id: 2,
    title: "Articles",
    text: "The title should describe what the article shows the reader. Do not begin the title with the word “How.” Most articles show readers how to do something. If all procedural articles began with “How,” it would be difficult to alphabetize articles. Try “Joining a Conversation” rather than “How to Join a Conversation.”",
    image: Links.article,
    icon: <Article/>
  },
  {
    id: 3,
    title: "News",
    text: "This week alone, attacks on critical infrastructure in the regions of Kyiv, Cherkasy, Kirovohrad, Kharkiv and Zaporizhzhia have left millions without electricity and water intermittently. As of Thursday evening, about 4.5 million consumers were temporarily disconnected from the power supply under emergency and stabilization schedules, according to Zelensky.",
    image: Links.news,
    icon: <News/>
  }
] 

export const authorScreen = [
  {
    id: 1,
    number: "01",
    text: "Decision-making identifying results",
    background: Colors.lightPink,
  },
  {
    id: 2,
    number: "02",
    text: "Multitasking",
    background: Colors.lightPurple,
  },
  {
    id: 3,
    number: "03",
    text: "Time Management",
    background: Colors.lightPink,
  },
  {
    id: 4,
    number: "04",
    text: "Goal oriented",
    background: Colors.lightPink,
  },
  {
    id: 5,
    number: "05",
    text: "Building rapport with people from diverse backgrounds",
    background: Colors.lightPurple,
  },
  {
    id: 6,
    number: "06",
    text: "Flexible and adaptable to new situations",
    background: Colors.lightPink,
  },
]  

export const libraryCategories = [
  {
    id: 1,
    category: "Form data",
    subcategories: [
      {
      id: 1,
      name: "Form",
      path: routeNames.FORM
    }
    ],
    image: "https://web-promo.ua/wp-content/uploads/2021/06/gugl-formy-kompyuter.png"
  },
  {
    id: 2,
    category: "Math operations",
    subcategories: [{
      id: 1,
      name: "Counter",
      path: routeNames.COUNTER
    }],
    image: "../assets/images/mathOperations.jpg"
  },
  {
    id: 3,
    category: "Modal group",
    subcategories: [],
    image: "../assets/images/modal.jpg"
  },
  {
    id: 4,
    category: "Selected group",
    subcategories: [],
    image: ""
  },
  {
    id: 5,
    category: "Stylization",
    subcategories: [],
    image: ""
  },
  {
    id: 6,
    category: "Todos",
    subcategories: [],
    image: ""
  },
  {
    id: 7,
    category: "Magic",
    subcategories: [],
    image: ""
  },
  {
    id: 8,
    category: "Magic 8",
    subcategories: [],
    image: ""
  },
  {
    id: 9,
    category: "Magic 9",
    subcategories: [],
    image: ""
  },
  {
    id: 10,
    category: "Magic 10",
    subcategories: [],
    image: ""
  },
  {
    id: 11,
    category: "Magic 11",
    subcategories: [],
    image: ""
  },
]

export const navBarScreens = [
  {
    id: 1,
    path: routeNames.HOME,
    name: "Home"
  },
  {
    id: 2,
    path: routeNames.LIBRARY,
    name: "Library"
  },
  {
    id: 3,
    path: routeNames.BLOG,
    name: "Blog"
  },
  {
    id: 4,
    path: routeNames.ABOUT,
    name: "About"
  },
  {
    id: 5,
    path: routeNames.CONTACT,
    name: "Contact"
  },
]

export const selectMenu = [
  {
    id: 1,
    name: "All"
  },
  {
    id: 2,
    name: "Products"
  },
  {
    id: 1,
    name: "Shops"
  }
]