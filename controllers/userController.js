const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) => 
                !user
                    ? res.status(404).json({ message: "No user with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
            .select('-__v')
            .then((user) => 
                !user
                    ? res.status(404).json({ message: "No user with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findByIdAndRemove(req.params.userId)
            .select('-__v')
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: "No user with that ID" });
                }
                return Thought.deleteMany({ username: user.username });
            })
            .then((result) => {
                if (result && result.deletedCount === 0) {
                    return res.json({ message: 'User deleted. No associated thoughts found'})
                }
                res.json({ message: 'User and associated thoughts have been deleted'})
            })
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        const { userId, friendId } = req.params;

        User.findById(userId)
            .select('-__v')
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID'})
                }
                if (user.friends.includes(friendId)) {
                    return res.status(500).json({ message: "Friend already added"})
                }

                user.friends.push(friendId);
                return user.save();
            })
            .then((updatedUserData) => {
                res.json(updatedUserData);
            })
            .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        const { userId, friendId } = req.params;

        User.findById(userId)
            .select('-__v')
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID'})
                }

                const friendIndex = user.friends.indexOf(friendId);
                if (friendIndex === -1) {
                    return res.status(400).json({ message: "No friend with that ID"})
                }

                user.friends.splice(friendIndex, 1);
                return user.save();
            })
            .then((updatedUserData) => {
                res.json(updatedUserData);
            })
            .catch((err) => res.status(500).json(err));
    },
};