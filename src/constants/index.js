import { Links } from "./Links"
import Colors from '../theme/Colors'
import Article from "../assets/icons/Article"
import Author from "../assets/icons/Author"
import News from "../assets/icons/News"

export const defaultTodos = [
  {
    id: 1,
    title: "Card1"
  },
  {
    id: 2,
    title: "Card2"
  },
  {
    id: 3,
    title: "Card3"
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
    category: "Form data"
  },
  {
    id: 2,
    category: "Math Operations"
  },
  {
    id: 3,
    category: "Modal Group"
  },
  {
    id: 4,
    category: "Selected Group"
  },
  {
    id: 5,
    category: "Stylization"
  },
  {
    id: 6,
    category: "Todos"
  },
  {
    id: 7,
    category: "Magic"
  },
]