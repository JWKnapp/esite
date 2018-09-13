const router = require('express').Router();
const { Stock } = require('../db/models');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const shopItems = await Stock.findAll();
    res.json(shopItems);
  } catch (err) {
    next(err);
  }
});
