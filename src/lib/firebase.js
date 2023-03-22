import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4tVu_KF_UwDX3Yl8n94Wu5M9muo1o4aE",
  authDomain: "profile-f63f7.firebaseapp.com",
  projectId: "profile-f63f7",
  storageBucket: "profile-f63f7.appspot.com",
  messagingSenderId: "541304564827",
  appId: "1:541304564827:web:5af579331be204a677637e",
  measurementId: "G-MPT0METP3P",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const getProjects = async () => {
  //   const projectsRef = collection(db, "/projects");
  //   const projects = query(projectsRef);
  const projects = await getDocs(collection(db, "projects"));
  console.log("promis..", projects.data);
  projects.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.data());
  });
  return projects;
};
