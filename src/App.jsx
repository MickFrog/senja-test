import "./App.css";
import { Helmet } from "react-helmet";

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
        data-id="your-id-here"
        data-lazyload="false"
      ></div>
    </div>
  );
}

export default App;
