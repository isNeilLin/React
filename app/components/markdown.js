import React from 'react'

class MarkDownEditor extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.rawText = this.rawText.bind(this)
        this.state = {
            value: 'Type some *Markdown* here!'
        }
    }
    handleChange(){
        this.setState({value:this.refs.textarea.value})
    }
    rawText(){
        var md = new Remarkable()
        return {__html:md.render(this.state.value)}
    }
    render(){
        return (
            <div>
                <h3>Input</h3>
                <textarea onChange={this.handleChange} value={this.state.value} ref="textarea"></textarea>
                <h3>Output</h3>
                <div className="content"
                    dangerouslySetInnerHTML={this.rawText()}
                ></div>
            </div>
        )
    }
}
export default MarkDownEditor