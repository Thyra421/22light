import db from "../../firebase/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const getProduct = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    console.log("Error getting product");
  }
};


const DocumentCreator = async (type, link, picture, name, brand) => {
  let state = "";
  try {
    // eslint-disable-next-line
    const docRef = await addDoc(collection(db, type), {
      link: link,
      picture: picture,
      name: name,
      brand: brand,
    });
    state = "succes";
  } catch (err) {
    console.log("Error: Adding document", { err });
    state = "error";
  }
  return state;
};

export { DocumentCreator, getProduct };
