import firebase from "../../firebase";

export const createGiveaway = (data, history) => dispatch => {
  const db = firebase.firestore();
  db.collection("giveaways")
    .add(data)
    .then(res => {
      console.log(res);
      // TODO: Push to Preview Route
    })
    .catch(error => {
      console.log(error);
    });
};

export const entryParticipant = (participants, giveawayId) => dispatch => {
  const db = firebase.firestore();
  db.collection("giveaways")
    .doc(giveawayId)
    .set({
      participants
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
};
