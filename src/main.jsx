import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AuthLayout from './Layout/AuthLayout';
// import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import {store} from './Components/redux/store';
import { Provider } from "react-redux";
import ProductsDetail from "./Pages/ProductsDetail";
import RootLayout from "./Layout/RootLayout";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
       { 
    path: "/",
    Component: Home,
  },
  {
    path: "collection",
    Component: Collection,
  },
  {
    path: "about",
    Component: About,
  },
  {
    path: "contact",
    Component: Contact,
  },
  {
    path: "collection/:id",
    Component: ProductsDetail
  },
    ]
  },
  {
    path: "auth",
    Component: AuthLayout,
    children:[
      {
        path: "signup",
        Component: SignUp
      }
    ]
  }
])

//set up the store
// const store = createStore(rootReducer);
// const container = document.getElementById("root");

// if(container){
//   const root = createRoot(container)
//   root.render(
//     <Provider store={store}>
//     <App/>
//   </Provider>
//   )
// }else{
//   throw new Error("Root element not found");
// }

ReactDOM.createRoot(root).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);

