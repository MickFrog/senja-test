import "./App.css";
import { Helmet } from "react-helmet";

// 61bb5054-2f0e-45ef-bd0d-5e8a2b954a1b

function App() {
  return (
    <div style={{ width: "1200px" }}>
      <Helmet>
        <script
          src="https://static.senja.io/dist/platform.js"
          async
          type="text/javascript"
        />
      </Helmet>
      <div
        className="senja-embed"
        data-id="e72ad701-d3cd-4225-82fb-c81f26c6327a"
        data-lazyload="false"
      ></div>
    </div>
  );
}

export default App;
