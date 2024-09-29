# Node / Express API with MongoDb

### Setup

- For Mongodb connection, add a `.env` file to root directory with MONGODB_URI and PORT values
- Run `npm install`

### TODO

- Add middleware to handle errors and unknown routes, use next(err)

### Done

- Deleted all scores with an id > 700 after the XSS attack by Raj 2023-05-13
- In Mongodb Compass used this filter in : `{ id: { $gte: 700 } }`
- Added an html page which does pagination for sliders scores
- Add /add-slider-score endpoint to /api/sliders:
  - see /api/routes.js in express-portfolio-api
  - https://github.com/rolandjlevy/express-portfolio-api/blob/master/api/routes.js

### Notes

- This repo is based on project:
  - Repo: https://github.com/nhndev/node-mongodb-api.git
  - Video: https://youtu.be/D7lDiFWF_vA?si=H7hrWcMxA5hfEkfx
- Offical guide to using Express with Vercel:
  - Article: https://vercel.com/guides/using-express-with-vercel
  - Video with Stephie: https://www.youtube.com/watch?v=wmYDRPH_kCo

### Links

- https://vercel.com/templates/next.js/mongodb-starter
- https://www.youtube.com/watch?v=IeM1PGqmJT4&t=161s
- https://dev.to/vyan/how-to-deploy-your-backend-on-vercel-using-verceljson-a-step-by-step-guide-5a78

### Code snippets

previous vercel.json settings:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "./index.js",
      "use": "@vercel/node"
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/api"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/public/$1"
    },
    {
      "src": "/api/sliders",
      "dest": "/api/sliders"
    }
  ]
}
```
