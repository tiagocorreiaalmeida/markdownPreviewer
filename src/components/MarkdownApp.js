import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

class MarkdownApp extends React.Component {
  constructor(props) {
    super(props);
    this.updateDom = this.updateDom.bind(this);
    this.generateMark = this.generateMark.bind(this);
    this.state = {
      input: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n',
      markedInput: ""
    };
  }

  updateDom(input) {
    this.setState(() => ({ input }), () => {
      this.generateMark();
    });
  }

  generateMark() {
    let markedInput = marked(this.state.input, { sanitize: true });
    markedInput = { __html: markedInput };
    this.setState(() => ({ markedInput: markedInput.__html }));
  }

  componentDidMount() {
    this.generateMark();
  }

  createMarkup(input) {
    return { __html: input };
  }

  render() {
    return (
      <div>
        <h1 className="title">Markdown Previewer</h1>
        <div className="app">
          <Input
            value={this.state.input}
            updateDom={this.updateDom}
          />
          <div
            className="app__mark"
            dangerouslySetInnerHTML={this.createMarkup(this.state.markedInput)}
          ></div>
        </div>
      </div>
    )
  }
}


export default MarkdownApp;