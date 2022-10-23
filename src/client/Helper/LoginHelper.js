import db from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const getRoles = async () => {
  var role = "";
  var uid = window.localStorage.getItem("uid");
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    role = docSnap.data().role;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return (role)
};

export { getRoles };
