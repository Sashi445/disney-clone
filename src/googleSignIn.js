import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();

signInWithPopup(auth, provider)
  .then((res) => {
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential.accessToken;
    const user = res.user;

    console.log(token, user);
  })
  .catch((err) => {
    const errorCode = err.code;
    const errorMsg = err.message;
    const email = err.email;
    const credential = GoogleAuthProvider.credentialFromError(err);

    console.log(errorCode, errorMsg, email, credential);
  });
