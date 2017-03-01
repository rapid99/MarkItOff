import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDnNhZfu1Y1l-DKqT82yRVOKMZEINAIwHY",
  authDomain: "markitoff-c4d41.firebaseapp.com",
  databaseURL: "https://markitoff-c4d41.firebaseio.com",
  storageBucket: "markitoff-c4d41.appspot.com",
  messagingSenderId: "21129935454"
};

const store = firebase.initializeApp(config);

const db = {
  writeRepoData(data) {
    store.database().ref(`/todos/${data.name}`).set(data);
  },

  fetchAllRepoData() {
    const repoData = firebase.database().ref('/todos/');
    return repoData.once("value", (snapshot) => {
      return snapshot;
    }).then((res) => {
      return res.val(); // change this to an array
    })
  }
};

export default db;
