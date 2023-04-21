import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProjectList from "./components/ProjectList";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <DefaultLayout>
      <AboutMe />
      <ProjectList />
      <Contact />
    </DefaultLayout>
  );
}

export default App;
