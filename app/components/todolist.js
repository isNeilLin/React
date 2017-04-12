import React from 'react';

class TodoList extends React.Component {
    render(){
        return (
            <ul>
                {
                    this.props.items.map(item=>{
                        return <li key={item.id}>{item.text}</li>
                    })
                }
            </ul>
        )
    }
}
export default TodoList