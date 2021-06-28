# react-universal-flash
React library which provides a function to flash messages. 


# Installation and Setup Instructions

## Step 1
`npm install react-universal-flash --save`

## Step 2
  - Configure the flasher by importing Flasher component and adding it to App/index file of your app which will be rendered always.
  - If we pass child to the Flasher component that child will be used to Flash the messages.
  - Flasher takes position and as props, if no position is provided default position will be"top_right"
`
import {Flasher} from "react-universal-flash";

const App = () => {
  return (
    <Router>
    <Flasher position="bottom_center"/>
    {/* Routes*/}
    </Router>
  );
}
`

## Step 3
  - import the flash function and fire it from anywhere in the App
  - flash function takes three inputs message content, time to live(in milliseconds) and type . 
  - "type" can be used in the custom component to modify the message. 
`
import {flash} from "react-universal-flash";

const Layout = () => {
  return (
    <>
      <div onClick={() => flash("Haha",6000)}>Click for Hello</div>
      <div onClick={() => flash("Hi",6000,"success")}>Click for Hi</div>
    </>
  );
};
`

# Custom component to flash message

We can pass a custom message component as child to Flasher. Then message will be flashed in custom component.
Child component will receive props - content,type and deleteFlash which can be used to show the message and delete it manually.

## Sample Flasher configuration
`
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
`

## Sample custom component

`
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

export default const Message = ({type,content,deleteFlash}) => {
  const style =  ((type === "green")||(type === "success")) ? {...messageBarStyle,"backgroundColor":"green"}:messageBarStyle;
return 
(<div style={ style } >
  {content}
  <span style={closeButtonStyle} onClick={deleteFlash}>&times;</span>
</div>)
}
`
### Usage 
`
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
`
# custom component using material-ui
We can create the message component using material-ui as below and pass it as a child to Flasher

## Message component
`
import Alert from '@material-ui/lab/Alert';

export const Message = ({type,content,deleteFlash}) => 
<Alert severity={type} onClose={deleteFlash}>
  {content}
</Alert>
`



# custom component using react-bootstrap
We can create the message component using react-bootstrap as below and pass it as a child to Flasher

## Message component
`
import Alert from 'react-bootstrap/Alert';

export const Message = ({type,content,deleteFlash}) => 
<Alert variant={type} onClose={deleteFlash} dismissible>
  {content}
</Alert>
`