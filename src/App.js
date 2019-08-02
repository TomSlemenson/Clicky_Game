import React, { Component } from "react";
import FriendCard from "./components/card/card.js";
import Wrapper from "./components/wrapper/wrapper.js";
import Navbar from "./components/navbar/navbar.js";
import Score from "./components/score/score.js";
import friends from "./friends.json";


class App extends Component {

  state = {
    friends: friends.sort(() => 0.5 - Math.random()),
    clicked: [],
    topScore: 0,
    counter: 0,
  };


  cardClicked = (id, name) => {

    if (this.state.clicked.includes(id)) {
      this.setState({ counter: 0 })
      this.setState({ clicked: [] })
      alert(`Oh nooo... You clicked on ${name} again. You lost!`)
    } else {
      this.setState({ counter: this.state.counter + 1 })
      this.state.clicked.push(id)

      if (this.state.counter >= this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1})
      }
      // console.log(`your score is ${this.state.counter}`)
    }
   

    if (this.state.counter === 12) {
      alert("You won the game!!!")
      this.setState({ counter: 0 })
      this.setState({ clicked: [] })
    }
   
    // console.log(`your arrey ${this.state.clicked}`)
    this.setState({ friends: this.state.friends.sort(() => 0.5 - Math.random()) });
    

  };

  render() {
    return (
      <div>
        <Navbar/>
        <Wrapper>
        <Score counter={this.state.counter} topScore={this.state.topScore}/>
          {this.state.friends.map(friend => (
            <FriendCard
              cardClicked={this.cardClicked}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            /> 
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

