const firebaseConfig = {
  apiKey: "AIzaSyCXMi1dIEEf2q1ANsz73HBSq6lm4gUMHxE",
  authDomain: "adv-c94-project.firebaseapp.com",
  databaseURL: "https://adv-c94-project-default-rtdb.firebaseio.com/",
  projectId: "adv-c94-project",
  storageBucket: "adv-c94-project.appspot.com",
  messagingSenderId: "54209739252",
  appId: "1:54209739252:web:2bdde7f31aa21b5d7de1a1"
};

  firebase.initializeApp(firebaseConfig);

  function addroom(){
    user_name=document.getElementById("createworld").value;
    firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
    })
  }