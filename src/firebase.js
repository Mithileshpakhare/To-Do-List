import { initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCzf995JeOeZkLZIHg8TST_Sa_OzK3VZBo",
    authDomain: "todo-crud-78dd1.firebaseapp.com",
    projectId: "todo-crud-78dd1",
    storageBucket: "todo-crud-78dd1.appspot.com",
    messagingSenderId: "585166534517",
    appId: "1:585166534517:web:1fcfb1873a0728843c053c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };