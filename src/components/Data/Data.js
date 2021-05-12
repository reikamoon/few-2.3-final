import React, { Component } from "react";
import CharaDetails from "../CharaDetails/CharaDetails";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
      n: "",
      list: [],
    };

    // Bind All Functions
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.saveList = this.saveList.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  onChange = (e) => {
    const n = e.target.value;
    this.setState({ n });
  };

  onSubmit(e) {
    e.preventDefault();
  }

  showAll(e) {
    return CharaDetails();
  }

  async onClick() {
    const { n } = this.state;
    const response = await fetch(`https://swapi.dev/api/people/${n}/`);
    const info = await response.json();
    if (info.data !== "None") {
      this.setState({ info });
    }
    console.log(info);
  }

  async saveList() {
    let { info, list } = this.state;
    list.push(info);
    this.setState({ info, list });
  }

  renderData() {
    const { info } = this.state;
    return (
      <div className="Info">
        <h1>{info.name}</h1>
        <p>Sex: {info.gender} </p>
        <p>Year of Birth: {info.birth_year}</p>
        <p>Height: {info.height}inches</p>
        <p>Weight: {info.mass}kg</p>
        {info.films[0] && info.films[0] === "http://swapi.dev/api/films/1/"}
        {<p>First Appearance: A New Hope</p>}
        <button onClick={this.saveList}> Save {info.name} to Favorites</button>
      </div>
    );
  }

  render() {
    // Shorthand List
    const { n, list, info } = this.state;
    return (
      <div className="List">
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            placeholder="Enter a Number"
            value={n}
            onChange={this.onChange}
          />
          <button
            className="searchbtn"
            type="submit"
            value="search"
            onClick={this.onClick}
          >
            Search
          </button>
        </form>

        <div>{info !== '' ? this.renderData() : null}</div>
        
        <h1>My Favorites</h1>
        <CharaDetails list={list} />
      </div>
    );
  }
}

export default Data;
