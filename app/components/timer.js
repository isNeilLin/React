import React from 'react';

class Timer extends React.Component {
    constructor(props){
        super(props)
        // 与 ES5 React.createClass({}) 不同的是 component 内自定义的方法需要自行绑定 this context，或是使用 arrow function
        this.tick = this.tick.bind(this);
        // 初始 state，等于 ES5 中的 getInitialState
        this.state = {
            seconds: 0
        }
    }
    // 累加器方法，每一秒被呼叫后就会使用 setState() 更新内部 state，让 Component 重新 render
    tick(){
        this.setState({seconds:this.state.seconds+1});
    }
    // componentDidMount 为 component 生命周期中阶段 component 已插入节点的阶段，通常一些非同步操作都会放置在这个阶段
    componentDidMount(){
        this.interval = setInterval(this.tick,1000)
    }
    // componentWillUnmount 为 component 生命周期中 component 即将移出插入的节点的阶段。这边移除了 setInterval
    componentWillMount(){
        clearInterval(this.interval)
    }
    render(){
        return (
            <div>Seconds Elapsed: {this.state.seconds}</div>
        )
    }
}
export default Timer