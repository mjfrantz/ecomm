const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//All route handlers have this middleware function applied.
app.use(bodyParser.urlencoded({ extended: true }));

//Route Handlers
//A callback function
app.get('/', (req, res) => {
  res.send(`
  <div>
    <form method="POST">
      <input name="email" placeholder="email">
      <input name="password" placeholder="password">
      <input name="passwordConfirmation"placeholder="password confirmation">
      <button type="submit">Submit</button>
      </form>
    </div>
  `)
});


app.post('/', (req, res) => {
  console.log(req)
  res.send('Account Created')
})


app.listen(3000, () => {
  console.log('Listening');
});