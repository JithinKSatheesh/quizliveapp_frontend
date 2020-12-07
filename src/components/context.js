import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios'
import Pusher from 'pusher-js';

const Base_URL = 'https://banzanlivequiz.herokuapp.com'



const PageContextProvider = (props)=>{

    const[username,setUserName] = useState('')
    const[values,setValues] = useState({
        username : '',
        isGameOn : false,
        question: '',
        optionA : '',
        optionB : '',
        optionC : '',
        optionD : '',
        answer: '',
    })
    const[winners,setWinners] = useState([])
    const[allowClick,setAllowClick] = useState(false)

    const setUser = (user) =>{
        console.log("called")
        axios.post(`${Base_URL}/api/user/login`,user)
            .then(res=>{ 
                setUserName(res.data.user)
                bindPusherChannels()
            })
    }
    
    const checkAns = (userAnswer)=>{
        setAllowClick(false)
        if(userAnswer === values.answer){
            axios.post('http://localhost:8000/api/quiz/addscore',{
                "username" : username
            }).then(res => {
                if(res.status === 200){
                    // some actions
                    
                }
                else{
                    setAllowClick(true)
                }
            })
        }
    }

    const bindPusherChannels = ()=>{
        const pusher = new Pusher('f59c2e634295ebab3345', {cluster: 'ap2'})
        let channel = pusher.subscribe('my-channel')
        channel.bind('my-event', (data)=>{
            console.log(data.question)
            setValues({
                ...values,
                isGameOn:true,
                optionA: data.optionA,
                optionB: data.optionB,
                optionC: data.optionC,
                optionD: data.optionD,
                question: data.question,
                answer: data.answer,
            })
            setAllowClick(true)
          })
        channel.bind('winner',function(data){
            setWinners(data.winners)
            console.log("winners",data.winners)
        })
    }

    useEffect(()=>{
        
    })



    return(
        <PageContext.Provider
        value={{
            username : username,
            isGameOn : values.isGameOn,
            question : values.question,
            optionA:values.optionA,
            optionB : values.optionB,
            optionC:values.optionC,
            optionD:values.optionD,
            winners:winners,
            allowClick,allowClick,
            checkAns:checkAns,
            setUser:setUser
        }}
        >
            {props.children}
        </PageContext.Provider>
    )
}

export const PageContext = createContext();
export default PageContextProvider;