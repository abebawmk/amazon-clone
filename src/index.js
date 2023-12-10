import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);


////
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { StateProvider } from "./StateProvider";
// import reducer, { initialState } from "./reducer";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </StateProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );