import weddingImage from './wedding.png'
import dashboardImage from './dashboard.png'
import throneImage from './throne.png'
import jamImage from './jam.png'

export const projectList = 
[
  {
    "name": "Wedding Website",
    "tech": "Ruby on Rails, PostgreSQL, GitHub Projects",
    "description": "A full stack application that allows guests to see details and RSVP to my upcoming wedding. My part as the back-end engineer was to create a postgres database to store wedding invite responses. The backend also connects guests details to their lodging selection, plus-ones, and kids.  Provides automated email communication as well as a complete set of RESTful API endpoints.",
    "github": "https://github.com/mkbonini/wedding_backend",
    "url": "https://mikemiwha.love/",
    "image": weddingImage
  },
  {
    "name": "Wedding Dashboard",
    "tech": "React.js, Material UI, Rechart",
    "description": "A front-end dashboard to view responses from the wedding website. The app makes API calls to the backend and displays them using react with javascript components.",
    "github": "https://github.com/mkbonini/wedding_dashboard",
    "url": "https://wedding-dashboard-nhdhfrhti-mkbonini.vercel.app/",
    "image": dashboardImage
  },
  {
    "name": "Throne Room",
    "tech": "Ruby on Rails, PostgreSQL, Javascript, SQL, GitHub Projects",
    "description": "An appliaction for finding and rating public restrooms.  a team project split into front-end and back-end to communicating through APIs.",
    "github": "https://github.com/mkbonini/The-Throne-Room",
    "url": "https://throne-room-app.fly.dev/",
    "image": throneImage
  },
  {
    "name": "Let's Jam!",
    "tech": "Python, flask, SQLAlchemy, Marshmallow, Postman",
    "description": "A site for muscians to find nearby each other based on similar genres or by what instruments they play.  Created by a team using an agile workflow utliizing sprints and retros.",
    "github": "https://github.com/mkbonini/letsjamBE",
    "url": "https://letsjam-fe-1.vercel.app/",
    "image": jamImage
  }
]