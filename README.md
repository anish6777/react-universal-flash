# react-universal-flash

React library which provides a function to flash messages.

- Flasher component needs to be added only at one place in App
- Message can be programatically flashed from anywhere in code
- Custom component can be created to style the messages or one can use components like "Alert" from material-ui,react-bootstrap or any other library

![Gif showing flash](https://media.giphy.com/media/Bbi2VFne29nY2N1dzt/giphy.gif)

# CodeSandbox samples

[Sample 1 - Custom Message flasher](https://codesandbox.io/s/react-universal-flash-1-oyt1q6)

# Installation and Setup Instructions

## Step 1

`npm install react-universal-flash --save`

## Step 2

- Configure the flasher by importing Flasher component and adding it to App/index file of your app which will be rendered always.
- If we pass child to the Flasher component that child will be used to Flash the messages.
- Flasher takes position and as props, if no position is provided default position will be"top_right"

```JSX
import {Flasher} from "react-universal-flash";

const App = () => {
  return (
    <Router>
    <Flasher position="bottom_center"/>
    {/* Routes*/}
    </Router>
  );
}
```

## Step 3

- import the flash function and fire it from anywhere in the App
- flash function takes three inputs message content, time to live(in milliseconds) and type .
- "type" can be used in the custom component to modify the message.

```JSX
import {flash} from "react-universal-flash";

const Layout = () => {
  return (
    <>
      <div onClick={() => flash("Haha",6000)}>Click for Hello</div>
      <div onClick={() => flash("Hi",6000,"success")}>Click for Hi</div>
    </>
  );
};
```

## Step 4 (optional)

It is better you create you own message component based on the styling or library you use in your app. The default message component provided has very less styling and is available only in one color.

You can create a custom component or use one from any styling library and pass it as a child to Flasher. Examples of creating the component from scratch and creating using components from libraries like material-ui,react-bootstrap and styled-components are given below.

# Custom component to flash message

We can pass a custom message component as child to Flasher. Then message will be flashed in custom component.
Child component will receive props - content,type and deleteFlash which can be used to show the message and delete it manually.

## Sample Flasher configuration

```JSX
import {Flasher} from "react-universal-flash";
import Message from "./Message"

const App = () => {
  return (
    <Router>
     <Flasher>
       <Message/>
     </Flasher>
    {/* Routes*/}
    </Router>
  );
}
```

## Sample custom component

```JSX
const messageBarStyle = {
  "padding": "20px",
  "backgroundColor": "red",
  "color": "white",
  "marginBottom": "15px"}

const closeButtonStyle = {
  marginLeft: "15px",
  color: "white",
  fontWeight: "bold",
  float: "right",
  fontSize: "22px",
  lineHeight: "20px",
  cursor: "pointer"
}

const Message = ({type,content,deleteFlash}) => {
  const style =  ((type === "green")||(type === "success")) ? {...messageBarStyle,"backgroundColor":"green"}:messageBarStyle;
return
(<div style={ style } >
  {content}
  <span style={closeButtonStyle} onClick={deleteFlash}>&times;</span>
</div>)
}

export default Message;
```

### Usage

```JSX
import {flash} from "react-universal-flash";

const Test = ({  }) => {
  return (
    <div>
      <div onClick={() => flash("Red click",12000,"red")}>Red</div>
      <div onClick={() => flash("Green click",12000,"green")}>Green</div>
      <div onClick={() => flash("Danger click",15000,"danger")}>Danger</div>
      <div onClick={() => flash("Success click",20000,"success")}>Success</div>
    </div>
  );
};
```

# Custom message component using material-ui

We can create the message component using material-ui as below and pass it as a child to Flasher

## Message component

```JSX
import Alert from '@material-ui/lab/Alert';

export const Message = ({type,content,deleteFlash}) =>
<Alert severity={type} onClose={deleteFlash}>
  {content}
</Alert>
`
```

# Custom message component using react-bootstrap

We can create the message component using react-bootstrap as below and pass it as a child to Flasher

## Message component

```JSX
import Alert from 'react-bootstrap/Alert';

export const Message = ({type,content,deleteFlash}) =>
<Alert variant={type} onClose={deleteFlash} dismissible>
  {content}
</Alert>
```

# Using CSS in JS - styled-component

We can create the message component using styled-component as below and pass it as a child to Flasher

## Message component

```JSX
const MessageBar = styled.div`
  "padding": "20px",
  "backgroundColor": ${(props) => props.color || "green"},
  "color": "white",
  "marginBottom": "15px"
`;

const CloseButton = styled.span`
marginLeft: "15px",
color: "white",
fontWeight: "bold",
float: "right",
fontSize: "22px",
lineHeight: "20px",
cursor: "pointer"
`;

const Message = ({ type, content, deleteFlash }) => {
  return (
    <MessageBar color={type}>
      {content}
      <CloseButton onClick={deleteFlash}>&times;</CloseButton>
    </MessageBar>
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
        <Message />
      </Flasher>
      <Component {...pageProps} />
    </>
  );
}

```
