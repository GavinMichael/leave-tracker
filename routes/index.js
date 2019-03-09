const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const { ensureAuthorized } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

// Manage
router.get('/manage', ensureAuthenticated, ensureAuthorized, (req, res) =>
  res.render('manage', {
    user: req.user
  })
);

// Dashboard
router.get('/slots', ensureAuthenticated, (req, res) =>
  res.render('slots', {
    user: req.user
  })
);


module.exports = router;
