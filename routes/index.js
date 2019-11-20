const express = require('express');
const Location = require('../models/location');




const router = express.Router();
// route for Home-Page
router.get('/', (req, res) => {
  res.redirect('/homepage');
});

router.post('/form', async (req, res) => {
  const test = { ...req.body }; 
  if (test.sport === 'Surf' || test.sport === 'Серфинг' || test.sport === 'серфинг' || test.sport === 'Серф'){
    test.sport = 'surf';
  }
  if (test.sport === 'Snowboard' || test.sport === 'Сноуборд' || test.sport === 'snowboard' || test.sport === 'сноуборд'){
  test.sport = 'snowboard';
  }
  const location = await Location.find({ sport: test.sport });
  let data = [];
  for (let i = 0; i < location.length; i++){
    console.log(1);
    const data1 = new Date (req.body.date[0]);
    const data2 = new Date (req.body.date[1]);
    const check1 = new Date (location[i].seasonFirst);
    const check2 = new Date (location[i].seasonEnd);
    if (data1 > check1 && data2 < check2){
     data.push(location[i])
    }
  }
  if(data.length > 0) {
  res.render('locations', { location });
  }
  else {
    res.render('badDate');
  }
})

router.get('/sport', (req, res) => {
  res.render('sport');
});

router.get('/location/:id', async (req, res) => {
  const location = await Location.findById(req.params.id);
  console.log(location);
  res.render('locationCard', { location });
});

router.get('/form', (req, res) => {
  res.render('form');
});


router.get('/snowboard', (req, res) => {
  res.render('snowboardCard');
});

// route for user's dashboard
router.get('/homepage', (req, res) => {
  res.render('homepage');
});


// route for user logout


module.exports = router;
