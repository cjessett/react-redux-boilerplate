const axios = require('axios');
const router = require('express').Router();

router.get('/zen', (req, res) => {
  axios.get('https://api.github.com/zen')
    .then(zen => res.send(zen.data))
    .catch(err => res.send(`${err.response.data.message} ${err.response.data.documentation_url}`));
});

module.exports = router;
