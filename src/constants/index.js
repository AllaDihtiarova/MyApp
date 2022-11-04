import { Links } from "./Links"

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
    path1: "M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"
  },
  {
    id: 2,
    title: "Articles",
    text: "The title should describe what the article shows the reader. Do not begin the title with the word “How.” Most articles show readers how to do something. If all procedural articles began with “How,” it would be difficult to alphabetize articles. Try “Joining a Conversation” rather than “How to Join a Conversation.”",
    image: Links.article,
    path1: "M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.122 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z",
    path2: "M23 26h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z",
    path3: "M23 22h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z",
    path4: "M23 18h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z"
  },
  {
    id: 3,
    title: "News",
    text: "This week alone, attacks on critical infrastructure in the regions of Kyiv, Cherkasy, Kirovohrad, Kharkiv and Zaporizhzhia have left millions without electricity and water intermittently. As of Thursday evening, about 4.5 million consumers were temporarily disconnected from the power supply under emergency and stabilization schedules, according to Zelensky.",
    image: Links.news,
    path1: "M28 8v-4h-28v22c0 1.105 0.895 2 2 2h27c1.657 0 3-1.343 3-3v-17h-4zM26 26h-24v-20h24v20zM4 10h20v2h-20zM16 14h8v2h-8zM16 18h8v2h-8zM16 22h6v2h-6zM4 14h10v10h-10z"
  }
] 

