import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateGame extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFormat = this.onChangeFormat.bind(this);
    this.onChangePlayerDeck = this.onChangePlayerDeck.bind(this);
    this.onChangeOpponentDeck = this.onChangeOpponentDeck.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeResult = this.onChangeResult.bind(this);
    this.onChangeOpponent = this.onChangeOpponent.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);

    this.state = {
      username: "",
      format: "",
      playerDeck: "",
      opponentDeck: "",
      description: "",
      date: new Date(),
      result: "",
      opponent: "",
      notes: "",
      users: [],
      formats: [],
      results: []
    };
  }

  componentWillMount() {
    axios.get("http://chcarraway.com:3001/MTG//users").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        });
      }
    });
  }

  componentDidMount() {
    this.setState({
      users: ["Please Select a User", "Corey", "Chace", "Graham", "Dave"],
      username: "Please Select a User",
      formats: [
        "Please select a format",
        "Legacy",
        "Modern",
        "Standard",
        "Vintage",
        "Commander",
        "Pioneer",
        "Other"
      ],
      format: "Please select a format",
      results: ["Please select a result", "Win", "Loss", "Draw"],
      result: "Please select a result"
    });

    axios
      .get("http://chcarraway.com:3001/MTG//users/")
      .then(response => {
        this.setState({ users: response.data.map(user => user.username) });
      })
      .catch(error => {
        console.log(error);
      });

    console.log("Mounting Complete");
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
    console.log("Username Changed");
  }

  onChangeFormat(e) {
    this.setState({
      format: e.target.value
    });
  }

  onChangePlayerDeck(e) {
    this.setState({
      playerDeck: e.target.value
    });
  }
  onChangeOpponent(e) {
    this.setState({
      opponent: e.target.value
    });
  }
  onChangeOpponentDeck(e) {
    this.setState({
      opponentDeck: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeResult(e) {
    this.setState({
      result: e.target.value
    });
  }

  onChangeNotes(e) {
    this.setState({
      notes: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e, state) {
    e.preventDefault();

    const game = {
      username: state.username,
      format: state.format,
      playerDeck: state.playerDeck,
      opponentDeck: state.opponentDeck,
      description: state.description,
      date: state.date,
      result: state.result,
      opponent: state.opponent,
      notes: state.notes
    };
    console.log(game);

    axios
      .post("http://chcarraway.com:3001/MTG//games/add", game)
      .then(res => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Game Log</h3>
        <form
          onSubmit={e => {
            this.onSubmit(e, this.state);
          }}
        >
          <div className="form-group">
            <label>Format: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.format}
              onChange={this.onChangeFormat}
            >
              {this.state.formats.map(function(format) {
                return (
                  <option key={format} value={format}>
                    {format}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Your Name: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Your Deck: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.playerDeck}
              onChange={this.onChangePlayerDeck}
            />
          </div>
          <div className="form-group">
            <label>Opponent: </label>
            <select
              ref="opponentInput"
              required
              className="form-control"
              value={this.state.opponent}
              onChange={this.onChangeOpponent}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Opponent Deck: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.opponentDeck}
              onChange={this.onChangeOpponentDeck}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Result: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.result}
              onChange={this.onChangeResult}
            >
              {this.state.results.map(function(result) {
                return (
                  <option key={result} value={result}>
                    {result}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Notes: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.notes}
              onChange={this.onChangeNotes}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Game Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
