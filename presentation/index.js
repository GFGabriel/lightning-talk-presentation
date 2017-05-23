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
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
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
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
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
            { loc: [13, 25], title: "Render Method" },
            { loc: [14, 17] }, //Creating TodoItem by mapping through the list
            { loc: [18, 24] },
            { loc: [26, 29], title: "addEvent Method" },
            { loc: [31, 36], title: "TodoItem Component" },
            { loc: [37, 72] }, //NewTodoItem Component
            { loc: [39, 47] }, //Contructor Method
            { loc: [48, 51] }, //componentDidMount
            { loc: [52, 63] }, //render
            { loc: [64, 69] }, //onChange
            { loc: [70, 75] }, //onSubmit
            { loc: [77, 78], title: "Rendering component in the DOM" },
          ]} />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
