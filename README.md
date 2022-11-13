# react-universal-flash

React library which provides a function to flash messages.

- Flasher/RenderFlash component needs to be added only at one place in App
- Message can be programatically flashed from anywhere in code
- Custom component can be created to style the messages or one can use components like "Alert" from material-ui,react-bootstrap or any other library

![Gif showing flash](https://media.giphy.com/media/Bbi2VFne29nY2N1dzt/giphy.gif)

# CodeSandbox samples

[Custom Message flasher](https://codesandbox.io/s/react-universal-flash-1-oyt1q6)

[React-Redux(flashing from reducer)](https://codesandbox.io/s/react-universal-flash-1-oyt1q6)

[Material-ui](https://codesandbox.io/s/react-universal-flash-material-ui-565761)

[react-bootstrap](https://codesandbox.io/s/react-universal-flash-react-bootstrap-qnncim)

# Installation and Setup Instructions

## Step 1

`npm install react-universal-flash --save`

## Step 2

- Configure the flasher by importing Flasher,RenderFlash component and adding it to App/index file of your app which will be rendered always.
- If we pass child to the Flasher component that child will be used to Flash the messages.
- Flasher takes position,style,className if no position is provided default position will be "top_right"
- RenderFlash component can be used if you don't want to use any styles from this library, it is a render props component taking a render function as child.

### Using Flasher

- Message component will receive id,data and deleteFlash as prop

```JSX
import {Flasher} from "react-universal-flash";

const App = () => {
  return (
    <Router>
    <Flasher position="bottom_center">
    {/* Add your custom message component or <Message/> component from this library*/}
    </Flasher>
    {/* Routes*/}
    </Router>
  );
}
```

### Using RenderFlash

- flashes is an object array of shape { id: string;data: Array;deleteFlash: Function;}

```JSX
import {RenderFlash} from "react-universal-flash";

const App = () => {
  return (
    <div className="App">
      <RenderFlash >
      {(flashes) => {/* Your flasher component here*/}}
      </RenderFlash>
      <h1>React Universal Flash</h1>
    </div>
  );
}
```

## Step 3

- import the flash function and fire it from anywhere in the App
- flash function takes timeout as the first argument.
- all the other arguments passed to the flash function will be present in 'data' key which is an array

```JSX
import {flash} from "react-universal-flash";

const Layout = () => {
  return (
    <>
      <div onClick={() => flash(6000,"success","Congrats")}>Success</div>
      <div onClick={() => flash(6000,"error","Try again")}>Error</div>
    </>
  );
};
```

# Using with NextJS

In nextjs you can add the Flasher in \_app.js in pages folder. It will not affect the static generation of pages. After adding flasher flash function can be imported to any component.

## \_app.js function sample

```JSX
//Message is a custom component , check above documents for implementation
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Flasher>
    {/* Add your custom message component or <Message/> component from this library*/}
      </Flasher>
      <Component {...pageProps} />
    </>
  );
}

```
