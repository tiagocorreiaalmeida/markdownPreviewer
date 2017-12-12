import React from "react";
import ReactDOM from "react-dom";  

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.onTextareaChange = this.onTextareaChange.bind(this);
    }

    onTextareaChange(e) {
        this.props.updateDom(e.target.value);
    }

    render() {
        return (
            <textarea
                className="app__textarea"
                rows="35"
                cols="100"
                onChange={this.onTextareaChange}
            >{this.props.value}
            </textarea>
        )
    }
}

export default Input;