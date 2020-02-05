import React from "react";
import './App.css';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : null,
        }
        
        
    }
    
    
    componentDidMount(){
        fetch('https://randomuser.me/api/')
        .then(result => result.json())
        .then((output) => {
            this.setState({
                data: output.results[0]
            })
        })
        
    }
    
    render(){
        const {data} = this.state ;
        if(data === null){
            return(
                <div>
                    Loading
                </div>
                )
        }else{
             return(
                <div class="card m-5">
                    <img class="card-img-top" src={data.picture.large} />
                  <div class="card-body">
                    <h5 class="card-title">{data.name.first} {data.name.last}</h5>
                    <ul>
                        <li> Location : {data.location.street.number} {data.location.street.name}, {data.location.city}, {data.location.state}</li>
                        <li> email : {data.email} </li>
                        <li> username : {data.login.username} </li>
                    </ul>
                  </div>
                 </div>
                );
        }
       
    }
}

export default User;