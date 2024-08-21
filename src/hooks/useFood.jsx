import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firestore.config";

const useFood = () => {
  const [ramen, setRamen] = useState([]);

  const obtData = async () => {
    try {
      const productsCollection = collection(db, "products");
      const querySnapshot = await getDocs(productsCollection);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRamen(data);
    } catch (error) {
      console.error("Error al obtener datos de Firestore:", error);
    }
  };

  return { obtData, ramen };
};

export default useFood;
