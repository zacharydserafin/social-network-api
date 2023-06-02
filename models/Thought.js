const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

thoughtSchema.virtual('formatCreatedAt').get(function () {
    return this.createdAt.toLocaleDateString();
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;