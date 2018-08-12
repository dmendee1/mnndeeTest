const express = require('express');
const router = express.Router();

// Item Model
const Order = require('../../models/Order');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Order.find()
    .sort({ insertDate: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Order({
    order_id: req.body.order_id,
    user_id: req.body.user_id,
    username : req.body.username,
    major : req.body.major,
    department: req.body.department
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
