import * as Types from "./types";
import firebase from "../../firebase";

export const register = (data, history) => dispatch => {
  const auth = firebase.auth();
  const db = firebase.firestore();
  auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(res => {
      db.collection("users")
        .doc(res.user.uid)
        .set({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName
        });
    })
    .catch(error => {
      console.log(error);
    });
};

export const login = (data, history) => dispatch => {
  const auth = firebase.auth();
  auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        dispatch({ type: Types.SET_USER, payload: { uid: res.user.uid } });
      })
      .catch(error => {
        console.log(error);
      });
};

export const logout = history => dispatch => {
    const auth = firebase.auth()
    auth.signOut()
        .then(() => {
            dispatch({type: Types.LOGOUT_USER})
        })
        .catch(error => {
            console.log(error)
        })
}
