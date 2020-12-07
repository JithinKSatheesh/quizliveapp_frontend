
import React, { useContext,useState } from 'react';
import {PageContext} from './context'

import LoginCard from './LoginCard'
import GameContainer from './Game'
import Babla from '../images/babla.png'
import {Space100} from './Utilities'



const Home = () =>{

    const {username} = useContext(PageContext)

    return(
    <div className="container pt-4">
        <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
                <DisplayImage src={Babla}/>
                {username === ''?
                    <LoginCard/>
                    :
                    <GameContainer/>
                }
                



                <Space100/>
                <Space100/>
                <Space100/>
                <Space100/>
            </div>
        </div>
        
    </div>
)}

export default  Home


const DisplayImage = ({src})=>(
    <img src={src} alt="" className="img-fluid"/>
)
