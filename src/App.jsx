import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  HomePage,
  DestinationPage,
  CrewPage,
  TechnologyPage,
} from "../src/components/pages";
import Layout from "./layout";

function App() {
  const location = useLocation();

  console.log(location);

  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/crew" element={<CrewPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
