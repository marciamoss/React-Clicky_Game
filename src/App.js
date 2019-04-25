import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import ShuffleArray from "shuffle-array";
import Message from "./components/Message";


//set clicked as no by default
friends.forEach(function(element,i) {
 friends[i]["clicked"] = "no";
});

class App extends Component {
  
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    counter:0,
    topScore:0,
    show: false,
    lost: false,
    won: false,
    msg: "",
    handleClose() {
      this.setState({ show: false });
    },
    handleShow() {
      this.setState({ show: true });
    }
  };
  
  
  guessedFriend = id => {
    const friendCopy = [...this.state.friends];
    let counterCopy=this.state.counter;
    let topScoreCopy=this.state.topScore;
    let showCopy=this.state.show;
    let lostCopy=this.state.lost;
    let handleShowCopy = this.state.handleShow.bind(this);
    let handleCloseCopy = this.state.handleClose.bind(this);
    let msgCopy=this.state.msg;
    //check if the current id has already been clicked
    friendCopy.forEach((element,i) => {
      if(i===(id - 1)){
        if(friendCopy[i].clicked==="yes"){
          if(topScoreCopy<counterCopy){
            topScoreCopy=counterCopy;
          }
          counterCopy=0;
          showCopy=true;
          lostCopy=true;
        }else{
          counterCopy++;
          if(topScoreCopy<counterCopy){
            topScoreCopy=counterCopy;
          }
        }
      }   
    });
    
    // set clicked as yes for the clicked image
    friendCopy[id - 1].clicked = 'yes';
    
    //shuffle the images
    ShuffleArray(friendCopy);
    //change the id to new position
    friendCopy.forEach(function(element,i) {
      element.id = i+1;
    });

    // set lost msg for modal
    if(lostCopy){
      msgCopy="You Lost, Try Again!";
    }
    //set won msg for modal
    if(counterCopy===friendCopy.length){
      showCopy=true;
      counterCopy=0;
      msgCopy="You Won!, Play Again!";
    };

    //if lost or won reset the state for clicked
    if(showCopy || (counterCopy===friendCopy.length)){
      friendCopy.forEach(function(element,i) {
        friendCopy[i].clicked = 'no';
      });
    };
    
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: friendCopy, counter: counterCopy, topScore: topScoreCopy, show: showCopy, msg: msgCopy, handleShow: handleShowCopy, handleClose: handleCloseCopy });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar counter={this.state.counter} topScore={this.state.topScore}></Navbar>
        <Message show={this.state.show} msg={this.state.msg} handleClose={this.state.handleClose}></Message>
        <div className="container">
          <div className="row">
            {this.state.friends.map(friend => (
              <FriendCard
                guessedFriend={this.guessedFriend}
                id={friend.id}
                key={friend.id}
                image={friend.large}
              />
            ))}
          </div>
          </div>
      </Wrapper>
    );
  }
}

export default App;
