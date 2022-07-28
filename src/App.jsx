import "./App.scss";
import { Route, Routes } from "react-router-dom";

import {
  HomePage,
  DestinationPage,
  CrewPage,
  TechnologyPage,
} from "../src/components/pages";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
