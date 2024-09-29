# Middlewares In ExpressJS

Today, we will learn about *middlewares* in expressjs.

- Middlewares are the functions, that have access to the ```req``` (request) object, ```res``` (response) object and ```next``` function

- If you have not yet watched the video, related to request & response object, then [click here](https://www.youtube.com/watch?v=Gp2NnqFKkpg)

## Examples of Middlwares
There are many middleware libraries available like 
- ```body-parser```
- ```cookie-parser```
- ```cors```
- ```multer```

## Writing custom middleware
Let us create a function called m1 inside a file ```m1.js``` and export the function

```js
const m1 = (req, res, next) => {
    res.send('Middlware 1');
}

// Syntax for commonjs module
module.exports = m1;
// Syntax for es module
export default m1;
```

## Importing and using the middleware
```js
// Syntax for commonjs module
const m1 = require('path/m1');
// Syntax for es module
import m1 from 'path/m1.js' // Always use extensions in case of es modules

app.use(m1); // The response will be send through each and every route , even if we are rendering templates also
```

## Use of ```next()``` function
- It's a good practice to use the ```next()``` function, if we are writing multiple middlewares or a single middleware.
- If we don't use it, the server will get stuck at the first middleware only and will not return anything.