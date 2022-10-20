import { normalize } from "stitches-normalize-css";
import { globalCss } from "./stitches.config";

export const globalStyles = globalCss(...normalize, {
  "*": {
    boxSizing: "border-box",
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "$mono",
    backgroundColor: "$background",
    color: "$slate12",
  },
  padding: {
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  li: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  ul: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
    listStyle: "none",
  },
});
