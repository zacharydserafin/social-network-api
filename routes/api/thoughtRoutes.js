const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
/*
EXAMPLE createThought req.body:
{  
    "thoughtText": "Here's a cool thought...",
    "username": "zacharydserafin",
	"userId": "647ebae2d558f318f3999aee"
}
*/
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
/*
EXAMPLE createReaction req.body:
{
	"reactionBody": "That's a cool thought!",
	"username": "zacharydserafin"
}
*/
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;