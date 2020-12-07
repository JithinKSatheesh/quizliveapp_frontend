import React, { useContext,useState } from 'react';
import {PageContext} from './context'

const LoginCard=()=>{
    const [userInput,setUserInput]=useState('')
    const {setUser} = useContext(PageContext)

    const handleChange = name => (event)=>{
        setUserInput(event.target.value)
    }
    
    return(
        <div className="container p-3" style={banzanCard.card}>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <div className="form text-center">
                        <div className="form-group">
                            <input type="text" className="form-control" 
                                    style={banzanCard.input} 
                                    placeholder="Mobile number" 
                                    onChange={handleChange()}
                                    value={userInput}
                                    />
                        </div>
                        <div className="btn btn-dark" onClick={()=> setUser({"username": userInput})} >
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   

    

}




export default LoginCard



const banzanCard = {
    card: {  "boxShadow" : "0px 0px 10px rgba(29, 29, 29, 0.406)",
             "backgroundColor":"#624ec3",
             "borderRadius" : "10px"
         },
     input:{
         "border" : 'none',
         "backgroundColor" : '#e1e0f0'
     }
 }