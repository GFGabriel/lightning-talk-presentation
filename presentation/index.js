// Import React
import React from "react";

import CodeSlide from 'spectacle-code-slide';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  variables: require("../assets/variables.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/sass")}
          ranges={[
            { loc: [0, 270], title: "Syntactically Awesome Style Sheets" },
            { loc: [0, 1], title: "Syntactically Awesome Style Sheets"},
            { loc: [2, 3], title: "Syntactically Awesome Style Sheets", note: "A preprocessor for CSS"},
            { loc: [4, 5], title: "How do I install it?", note: "With Ruby"},
            { loc: [5, 6], title: "How do I install it?", note: "With Express"},
            { loc: [6, 7], title: "How do I install it?", note: "With npm"},
            { loc: [8, 10] }, //variables
            { loc: [12, 20], title: "Variables", note: "Set using the $"},
            { loc: [8, 10], image: images.variables },
            { loc: [22, 27], title: "Variables", note: "Compiles to" },
            { loc: [28, 42], title: "Nesting", note: "Looks more like HTML" },
            { loc: [43, 49], title: "Partials", note: "Goes in _reset.sass for example (can have many). Not compiled by SASS" },
            { loc: [50, 51], title: "Partials", note: "Imported through the @import tag" },
            { loc: [52, 57], title: "Mixins", note: "They're like functions, for styling" },
            { loc: [58, 60], title: "Mixins", note: "Vendor prefixes are tedious" },
            { loc: [61, 82] }, //A more complicated mixin
            { loc: [83, 87], title: "Inheritance", },
            { loc: [88, 99], title: "Inheritance", note: "Use @extend tag to bring in styling from a previous element"},
            { loc: [100, 111], title: "Operators", },
            { loc: [112, 113], title: "Compiling", },
          ]} />
      </Deck>
    );
  }
}
