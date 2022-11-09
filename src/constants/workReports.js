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
        skills: [{
            id:1,
            skill: "props"
          },
          {
            id:2,
            skill: "handler"
          }
        ],
        theHeaviest: "switch"
      },
      {
        weekDay: "Tuesday",
        theme: "Counter",
        skills: [
          {
            id:1,
            skill: "props"
          },
          {
            id: 2,
            skill: "styles"
          }
        ],
        theHeaviest: "style refactoring"
      },
      {
        weekDay: "Wednesday",
        theme: "Navigation Bar",
        skills: [
          {
            id: 1,
            skill: "Links"
          },
          {
            id: 2,
            skill: "styles"
          }
        ],
        theHeaviest: "connection of links"
      },
      {
        weekDay: "Thursday",
        theme: "Report Card",
        skills: [
          {
            id: 1,
            skill: "props"
          },
          {
            id: 2,
            skill: "handler"
          },
          {
            id: 3,
            skill: "styles"
          },
          {
            id: 4,
            skill: "image"
          }
        ],
        theHeaviest: "connection of images"
      },
      {
        weekDay: "Friday",
        theme: "Report Details",
        skills: [
          {
            id: 1,
            skill: "props"
          },
          {
            id: 2,
            skill: "handler"
          },
          {
            id: 3,
            skill: "styles"
          }
        ],
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
        skills: [
          {
            id: 1,
            skill: "icon animation"
          },
          {
            id: 2,
            skill: "change icon color"
          },
          {
            id: 3,
            skill: "tab styling"
          },
          {
            id: 4,
            skill: "styling of images"
          },
          {
            id: 5,
            skill: "styling text with flex"
          }
        ],
        theHeaviest: "icon animation and icon color change"
      },
      {
        weekDay: "Tuesday",
        theme: "Switch of tabs",
        skills: [
          {
            id: 1,
            skill: "icon animation"
          },
          {
            id: 2,
            skill: "change icon color"
          },
          {
            id: 3,
            skill: "switch tabs"
          },
          {
            id: 4,
            skill: "screen navigation"
          }
        ],
        theHeaviest: "switching tabs on the same screen"
      },
      {
        weekDay: "Wednesday",
        theme: "working with a text file in a tab",
        skills: [
          {
            id: 1,
            skill: "styling text"
          },
          {
            id: 2,
            skill: "styling images"
          },
          {
            id: 3,
            skill: "tab refactoring"
          }
        ],
        theHeaviest: "refactoring: the fault of the logic from the component on the screen"
      },
      {
        weekDay: "Thursday",
        theme: "Screen navigation",
        skills: [
          {
            id: 1,
            skill: "tab refactoring"
          },
          {
            id: 2,
            skill: "hanusing huk useNavigation"
          },
          {
            id: 3,
            skill: "using huk useLocation"
          }
        ],
        theHeaviest: "using huk useLocation"
      },
      {
        weekDay: "Friday",
        theme: "Screen navigation",
        skills: [
          {
            id: 1,
            skill: "using the useNavigation and useLocation hooks"
          },
          {
            id: 2,
            skill: "refactoring: combination of arrays"
          },
          {
            id: 3,
            skill: "report"
          },
          {
            id: 4,
            skill: "working with the icon library"
          }
        ],
        theHeaviest: "using huk useLocation and report"
      }
    ]
  }
]