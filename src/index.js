import React from "react";
import ReactDOM from 'react-dom/client';


class MarkdownBox extends React.Component {
    static defualtProps = {
        input: ''
    }
    constructor(props){
        super(props)
        this.state = {
            input: props.input
        }
        this.handleChange = this.handleChange.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
    };

    handleChange(e){
        this.setState({input: e.target.value});
        console.log('yo')
    }

    getInputValue(){
        return this.state.input;
    }

    render(){
        return (
            <>
            <h1>Hello</h1>
            <input id='markdown-text' value={this.state.input} onChange={this.handleChange}></input>
            </>
        )
    }
}

class PreviewBox extends React.Component{
    static defualtProps = {
        input: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            input: props.input
        }
        this.conv = this.conv.bind(this);
    }
    conv(inp){
        //add code to fetch conversion from api
        return 0;
    }
    render(){
        
        return(
            <div className='htmlBox' style = {{display: 'flex',width: 200, height: 200, border: '1px solid black', backgroundColor: '#333', color:'#ccc'}}>
                <p>{this.state.input}</p>
            </div>
            )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MarkdownBox input='Hello, world!'/>
        <PreviewBox  input='Hello HTML'/>
    </React.StrictMode>
)