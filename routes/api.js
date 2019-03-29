const express = require('express');
const router = express.Router();

const User = require('../models/user');

const { isLoggedIn, isNotLoggedIn, validationLoggin } = require('../helpers/middlewares');

router.put('/profile', isLoggedIn(), async(req, res, next) => {
  const {id} = req.session.currentUser
  const{subscriptionType} = req.body;
  try {
   const newUser = await User.findByIdAndUpdate(id, {$set: {subscriptionType}}, {new: true})
    if (!newUser) {
      res.status(404).json({message: 'Not Found'});
      return
    }
    req.session.currentUser = newUser;
    res.status(200).json({message: 'User updated'}, newUser);
  } catch(error) {
    next(error)
  }
})

module.exports = router;
