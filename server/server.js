const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json);

const itemsArr = ['Fishing Pole', 'KTM', 'Bow', 'Rifles', 'Glocks', 'Knives', 'Gaming PC', 'AirPods', 'Gym', 'Good food']

app.get('api/inventory', function(req, res) {
  if (req.query.item) {
    const filteredInv = itemsArr.filter(function(invItem) {
      return invItem.toLowerCase().includes(req.query.item.toLowerCase())
    })

    res.status(200).send(filteredInv);
  } else {
    res.status(200).send(itemsArr)
  }
})

app.get('/api/intenvory:index', function(req, res) {
  const foundItem = itemsArr[+req.params.index]
    res.status(200).send(itemsArr[+req.params.index])
});

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, function() { console.log(`Server running on ${SERVER_PORT}`) });

