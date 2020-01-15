const router = require("express").Router();
let Game = require("./Model");

router.route("/").get((req, res) => {
  Game.find()
    .then(games => res.json(games))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const format = req.body.format;
  const playerDeck = req.body.playerDeck;
  const opponentDeck = req.body.opponentDeck;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const result = req.body.result;
  const opponent = req.body.opponent;
  const notes = req.body.notes;

  const newGame = new Game({
    username,
    format,
    playerDeck,
    opponentDeck,
    description,
    date,
    result,
    opponent,
    notes
  });

  newGame
    .save()
    .then(() => res.json("Game added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Game.findById(req.params.id)
    .then(game => res.json(game))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Game.findByIdAndDelete(req.params.id)
    .then(() => res.json("Game deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Game.findById(req.params.id)
    .then(game => {
      game.username = req.body.username;
      game.format = req.body.format;
      game.playerDeck = req.body.playerDeck;
      game.opponentDeck = req.body.opponentDeck;
      game.description = req.body.description;
      game.date = Date.parse(req.body.date);
      game.result = req.body.result;
      game.opponent = req.body.opponent;
      game.notes = req.body.notes;

      game
        .save()
        .then(() => res.json("Game updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
