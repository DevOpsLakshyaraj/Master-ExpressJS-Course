# Template Engines In ExpressJS

- A template engine enables you to use static template files in your application. 
- At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.
- Examples: ```ejs```, ```pug``` &amp; ```handlebars```

## EJS Template Engine
- EJS - Embedded JavaScript Template

- It allows you to write javascript code inside template blocks

### Installing EJS
  ```bash
  pnpm add ejs
  ```

### Importing and using ejs
  ```javascript
  // Syntax for commonjs modules
  const ejs = require('ejs');
  // Syntax for es modules
  import ejs from "ejs"
  ```

  ```javascript
  app.set('view engine', 'ejs');
  ```

  ```javascript
  // Syntax for commonjs modules
  const path = require('path');
  // Syntax for es modules
  import path from "path"

  // Syntax for commonjs modules
  app.set('views', path.join(__dirname, 'views'))
  // Syntax for es modules
  app.set('views', path.join(import.meta.dirname, 'views))
  ```

### Template Syntax (Example)

Lets assume that we are looping through an array of posts.

```html
<div>
    <% posts.forEach(function(post)) { %>
     <!-- Code to display post items -->
    <% } %>
</div>
```

If we include some partials, lets say, _postCard.ejs
```html
<div>
    <% posts.forEach(function(post)) { %>
     <%- include('_postCard', {post: post}) -%>
    <% } %>
</div>
```

