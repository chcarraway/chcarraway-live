import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Game = props => (
  <tr>
    <td>{props.game.format}</td>
    <td>{props.game.username}</td>
    <td>{props.game.playerDeck}</td>
    <td>{props.game.opponent}</td>
    <td>{props.game.opponentDeck}</td>
    <td>{props.game.description}</td>
    <td>{props.game.result}</td>
    <td>{props.game.notes}</td>
    <td>{props.game.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.game._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteGame(props.game._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class GamesList extends Component {
  constructor(props) {
    super(props);

    this.deleteGame = this.deleteGame.bind(this);

    this.state = { games: [] };
  }

  componentDidMount() {
    axios
      .get("http://chcarraway.com:3001/MTG/games/")
      .then(response => {
        this.setState({ games: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteGame(id) {
    axios
      .delete("http://chcarraway.com:3001/MTG//games/" + id)
      .then(res => console.log(res.data));

    this.setState({
      games: this.state.games.filter(el => el._id !== id)
    });
  }

  gameList() {
    return this.state.games.map(currentgame => {
      return (
        <Game
          game={currentgame}
          deleteGame={this.deleteGame}
          key={currentgame._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <h3>Logged Games</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Format</th>
              <th>Player 1</th>
              <th>P1 Deck</th>
              <th>Player 2</th>
              <th>P2 Deck</th>
              <th>Description</th>
              <th>Results</th>
              <th>Notes</th>
              <th>Date</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>{this.gameList()}</tbody>
        </table>
      </div>
    );
  }
}
