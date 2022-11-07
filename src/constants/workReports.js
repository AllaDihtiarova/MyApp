import { Links } from "./Links";

export const workReports = [
  {
    id: 1,
    title: "Week 1. Work on the Counter and the Card-report",
    date: "Oct 30, 2022",
    image: Links.week1,
    main: "well-pumped props skills, styling optimization",
    description: [
      {
        weekDay: "Monday",
        theme: "Counter",
        skills: ["props", "handler"],
        theHeaviest: "switch"
      },
      {
        weekDay: "Tuesday",
        theme: "Counter",
        skills: ["props", "styles"],
        theHeaviest: "style refactoring"
      },
      {
        weekDay: "Wednesday",
        theme: "Navigation Bar",
        skills: ["Links", "styles"],
        theHeaviest: "connection of links"
      },
      {
        weekDay: "Thursday",
        theme: "Report Card",
        skills: ["props", "handler", "styles", "image"],
        theHeaviest: "connection of images"
      },
      {
        weekDay: "Friday",
        theme: "Report Details",
        skills: ["props", "handler", "styles"],
        theHeaviest: "report"
      }
    ]
  },
  {
    id: 2,
    title: "Week 2. Work on the switch of tabs",
    date: "Nov 06, 2022",
    image: Links.week2,
    main: "I learned how to select content for additional tabs on the same page and learned how to navigate the site, work with images in svg format",
    description: [
      {
        weekDay: "Monday",
        theme: "Switch of tabs",
        skills: ["icon animation", "change icon color", "tab styling", "styling of images", "styling text with flex"],
        theHeaviest: "icon animation and icon color change"
      },
      {
        weekDay: "Tuesday",
        theme: "Switch of tabs",
        skills: ["icon animation", "change icon color", "switch tabs", "screen navigation"],
        theHeaviest: "switching tabs on the same screen"
      },
      {
        weekDay: "Wednesday",
        theme: "working with a text file in a tab",
        skills: ["styling text", "styling images", "tab refactoring"],
        theHeaviest: "refactoring: the fault of the logic from the component on the screen"
      },
      {
        weekDay: "Thursday",
        theme: "Screen navigation",
        skills: ["tab refactoring", "hanusing huk useNavigation", "using huk useLocation"],
        theHeaviest: "using huk useLocation"
      },
      {
        weekDay: "Friday",
        theme: "Screen navigation",
        skills: ["using the useNavigation and useLocation hooks", "refactoring: combination of arrays", "report", "working with the icon library"],
        theHeaviest: "using huk useLocation and report"
      }
    ]
  }
]