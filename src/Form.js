import React, { Component } from 'react';
import './Form.css';
import firebase from 'firebase'

function fire($firebaseArray) {
  const config = {
    apiKey: "AIzaSyDnNhZfu1Y1l-DKqT82yRVOKMZEINAIwHY",
    authDomain: "markitoff-c4d41.firebaseapp.com",
    databaseURL: "https://markitoff-c4d41.firebaseio.com",
    storageBucket: "markitoff-c4d41.appspot.com",
    messagingSenderId: "21129935454"
  };

  const store = firebase.initializeApp(config);

}


export default class Form extends Component {
 render() {
   return (
     <section>
      <div className="inputRow">
        <i className="arrow down"></i><input type="textbox" placeholder="What needs to be done?" className="inputSection" />
        <button type="button" className="addBtn">Add</button>
      </div>
      <div className="entriesRow">
        <ul className="entryContain">
          <li className="entry">This is where items will go</li>
          <li className="entry">Another item</li>
        </ul>
      </div>
    </section>
   );
 }
}
