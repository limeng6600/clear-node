const express = require('express');
const router = express.Router();

/* GET home page. */
router.route('/').get((req, res) => indexDemo(req, res))

module.exports = router;

const indexDemo = (req, res) => {
  res.status(200).json({message: 'HelloWorld'})
}
