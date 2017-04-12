import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Timer from './components/timer';
import TodoApp from './components/todo';
import MarkDownEditor from './components/markdown';
import UserGithub from './components/github';
// 在 React Component 中 CSS 使用 Inline Style 写法，全都封装在 JavaScript 当中：
var divStyle = {
    color: 'red'
}

//  React Component 撰写的主要有两种方式
// 1、使用 ES6 的 Class（可以进行比较复杂的操作和组件生命周期的控制，相对于 stateless components 耗费资源
class App extends React.Component {
    constructor(props){
        super(props)
        console.log('constructor')
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            name: 'Mark'
        };
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReciveProps(){
        console.log('componentWillReceiveProps')
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    handleClick(){
        this.setState({name:'Zuck'})
    }
    render(){
        return (
            <div style={divStyle}>
                <h1 onClick={this.handleClick}>hello {this.state.name}</h1>
                <Timer />
                <TodoApp />
                <MarkDownEditor />
                <UserGithub source="https://api.github.com/users/isNeilLin"/>
            </div>
        )
    }
}

App.propTypes = {
    name: PropTypes.string
}
App.defaultProps = {
    name: 'Zuck'
}
// 2、使用 Functional Component 写法（单纯地 render UI 的 stateless components，没有内部状态、
// 没有实作物件和 ref，没有生命周期函数。若非需要控制生命周期的话建议多使用 stateless components 获得比较好的效能）
/*

    const MyComponent = ()=>{
        <div>
            <h1>hello world</h1>
        </div>
    }
    // propTypes验证，若传入的props type不符合将会显示错误
    MyComponent.propTypes = {
        todo: PropTypes.object,
        name: PropTypes.string
    }
    // Prop预设值，若对应的props没有传入值将会使用default值
    MyComponent.defaultProps = {
        todo: {},
        name: ''
    }
*/

ReactDOM.render(<App name="Mark"/>,document.getElementById('app'))