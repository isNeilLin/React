import React from 'react';
// import TodoList from './todolist'
// TodoApp 组件中包含了显示 Todo 的 TodoList 组件，Todo 的内容透过 props 传入 TodoList 中
const TodoList = (props)=>{
    return (
        <ul>
            {
                props.items.map(item=>(
                    <li key={item.id}>{item.text}</li>
                ))
            }
        </ul>
    )
}
class TodoApp extends React.Component{
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            items: [],
            text: ''
        }
    }
    onChange(e){
        this.setState({text:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        this.state.items.push({
            text:this.state.text,
            id: Date.now() 
        })
        this.setState({items:this.state.items,text:''})
    }
    render(){
        return (
            <div>
                <h3>TODO</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.text}/>
                    <button>Add # {this.state.items.length+1}</button>
                </form>
                <TodoList items={this.state.items}/>
            </div>
        )
    }
}
export default TodoApp