import React, { Component } from 'react'
import Votedata  from '../Lib/Votedata'
import './CSS/Vote.css'


export default class Votesystem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myvote:Votedata
             
        }
    }
    

    clickhandel=(i)=>{
        console.log(i)
        let newlist = [...this.state.myvote]
        newlist[i].vote ++

        this.setState({myvote:newlist })



    }



    

    render() {
        return (
           <div>
               <h1>Vote Your Language!</h1>
            <div>
                {this.state.myvote.map((item,i)=>{return(
                    <div key={i} className="language">
                    <div className="voteCount">
                        {item.vote}
                    </div>
                    <div className="languageName">
                        {item.languagename}
                    </div>
                    <button onClick={()=>this.clickhandel(i)}>Click Here</button>
                </div>
                )})}
            </div>

           </div>
            
				
                
        )
    }
}
