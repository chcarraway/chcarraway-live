const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    username: { type: String, required: true },
    format: { type: String, required: true },
    playerDeck: { type: String, required: true },
    opponentDeck: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    result: { type: String, required: true },
    opponent: { type: String, required: false },
    notes: { type: String, required: false }
  },
  {
    timestamps: true
  }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
