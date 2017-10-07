octo-react-client
===================


Install:
-------------------
open octo project
```sh
cd frontend
git clone https://github.com/rizerok/octo-react-client.git .
npm i
```

Configuration
-------------------
webpack/webpack.common.js
```javascript
devServer:{
    port:3000,
    open:true,
    contentBase:path.resolve('..','templates'),
    proxy:{
        '/api/': {
            target: /***OCTODEV PROJECT URL***/,
            changeOrigin: true
        }
    },
    historyApiFallback: {
        index:'base.html'
    }
},
````


Usage:
-------------------
```npm run build:dev```

```npm run build:prod```

```npm run watch:dev```

```npm run build:prod```