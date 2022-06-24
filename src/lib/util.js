import {
  TOP_LEFT,
  TOP_CENTER,
  TOP_RIGHT,
  BOTTOM_CENTER,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  CUSTOM
} from "./constants";

export function getStyle(position, defaultStyle,customStyles={}) {
  switch ((position && position.toLowerCase()) || "") {
    case TOP_LEFT:
      return { top: 10, left: 10, ...defaultStyle };
      break;
    case TOP_RIGHT:
      return { top: 10, right: 10, ...defaultStyle };
      break;
    case TOP_CENTER:
      return {
        top: 10,
        left: "50%",
        transform: "translateX(-50%)",
        ...defaultStyle,
      };
      break;
    case BOTTOM_LEFT:
      return { bottom: 10, left: 10, ...defaultStyle };
      break;
    case BOTTOM_RIGHT:
      return { bottom: 10, right: 10, ...defaultStyle };
      break;
    case BOTTOM_CENTER:
      return {
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
        ...defaultStyle,
      };
      break;
    case CUSTOM:
      return {
        ...defaultStyle,
        ...customStyles
        };
      break;
    default:
      return { top: 10, right: 10, ...defaultStyle };
      break;
  }
}
