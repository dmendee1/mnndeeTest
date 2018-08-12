const express = require('express');
const router = express.Router();

// Item Model
const Worker = require('../../models/Worker');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Worker.find()
    .sort({ insertDate: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Worker({
    user_id: req.body.user_id,
    lastname : req.body.lastname,
    major : req.body.major,
    department: req.body.department,
    username : req.body.username,
    password : req.body.password
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Worker.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
