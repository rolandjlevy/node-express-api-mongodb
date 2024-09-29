# Node / Express API with MongoDb

### Notes
- This repo is based on https://github.com/nhndev/node-mongodb-api.git
- Using Express with Vercel: https://vercel.com/guides/using-express-with-vercel
- Deploy Express.js on Vercel: https://www.youtube.com/watch?v=wmYDRPH_kCo

### Links
- https://vercel.com/templates/next.js/mongodb-starter
- https://www.youtube.com/watch?v=IeM1PGqmJT4&t=161s

### TODO: 
- try to get this onto Vercel

### Code snippets

vercel.json settings:

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
