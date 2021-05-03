import React, {useState} from 'react';
import firebase from '../../../config/firebase';
import "./Register.scss";


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNamem, setFullName] = useState("");

    const data = {
        email: email,
        fullName: fullNamem,
    }
  const onSubmit = () =>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      const userId = userCredential.user.uid;
    firebase
    .database()
    .ref('users/' + userId)
    .set(data);
  })
  .catch((error) => {
    console.log(error);
  });

  };

    return (
       <div>
            <p>FullName</p>
           <input 
           className="form-control"
           placeholder="Full Name"
           value={fullNamem}
           onChange={(e) => setFullName (e.target.value)}
           />
           <p>Email</p>
           <input 
           className="form-control"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail (e.target.value)}
           />
            <p className="mt-4">Password</p>
           <input 
           className="form-control"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword (e.target.value)}
           />
           <br />
           <br />
           <button type="button" onClick={onSubmit} className="btn-btn-primary">Register</button>
       </div>
    )
}

export default Register;
