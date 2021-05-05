const { tweetList, tweetNew, tweetCreate, tweetDelete, tweetEdit, updateTweet } = require('../controllers/tweets.controller')

const router = require('express').Router()

router.get('/',tweetList)

router.get('/new', tweetNew)

router.post('/', tweetCreate)

router.get('/edit/:tweetId', tweetEdit)

router.post('/update/:tweetId', updateTweet)

router.delete('/:tweetId', tweetDelete)

module.exports = router