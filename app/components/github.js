import React from 'react';
import $ from 'jquery';
class UserGithub extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            githubUrl:'',
            avatarUrl:''
        }
    }
    // 若有需要进行 Ajax 非同步处理，请在 componentDidMount 进行处理。
    componentDidMount(){
        $.get(this.props.source,result=>{
            console.log(result)
            var data = result;
            this.setState({
                username:data.name,
                githubUrl:data.html_url,
                avatarUrl:data.avatar_url
            })
        })
    }
    render(){
        return (
            <div>
                <h3>{this.state.username}</h3>
                <img src={this.state.avatarUrl}/>
                <a href={this.state.githubUrl}></a>
            </div>
        )
    }
}
export default UserGithub