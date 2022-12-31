import React,{ PropsWithChildren }  from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, useHistory  } from "react-router-dom";
import { Auth0ProviderWithHistory } from "./components/NavBar/Auth0-provider-with-history";
import { AppState , Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root") as Element);


// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <BrowserRouter>
//       <Auth0Provider
//         domain={'dev-2umtjjknpkgkp3mw.us.auth0.com'}
//         clientId={'LWtNSAzif8u2tsycoRO9r7uNUevadFN6'}
//         audience={'https://zero-two.server.com'}
//         redirectUri={'http://localhost:3000/home'}
//         onRedirectCallback={() => window.location.origin}
//       >
//         <App />
//       </Auth0Provider>
//       </BrowserRouter>
//     </React.StrictMode>
//   </Provider>, 
// );
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>, 
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
