# Node / Express API with MongoDb

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
