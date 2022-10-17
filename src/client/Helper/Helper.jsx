import { doc, setDoc } from "firebase/firestore";
import db from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const createProduct = async (product, price, pictures) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      product: product,
      price: price,
      pictures: pictures,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export {createProduct}