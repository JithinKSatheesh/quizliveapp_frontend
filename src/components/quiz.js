import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Pusher from 'pusher-js';
import Timer from './timer'

export default function Quiz(props) {

    const [username,setUsername] = useState('')
    const [question,setQuestion] = useState('')
    const [optionA,setOptionA] = useState('')
    const [optionB,setOptionB] = useState('')
    const [optionC,setOptionC] = useState('')
    const [optionD,setOptionD] = useState('')
    const [answer,setAnswer] = useState('')
    const [allowClick,setAllowClick] = useState(false)
    const [score,setScore] = useState(0)
    const [winner,setWinner] = useState([])
    // const [timerTime,setTimerTimer] = useState(10)
    const [timeLeft, setTimeLeft] = useState(10);

    const checkAns = (userAnswer)=>{
        setAllowClick(false)
        if(userAnswer === answer){
            axios.post('http://localhost:8000/api/quiz/addscore',{
                "username" : username
            }).then(res => {
                if(res.status === 200){
                    // some actions
                    setScore(res.data.score) 
                }
                else{
                    setAllowClick(true)
                }
            })
        }
    }


    const start = ()=>{
    //    alert("mounted")
        const name = window.prompt('Username: ', 'Anonymous');
        const user = {"username": name}
        axios.post('http://localhost:8000/api/user/login',user)
            .then(res=>{
            console.log(res.data)
            console.log(res.status)
            if(res.status === 200){
                
                setUsername(res.data.user)
                const pusher = new Pusher('f59c2e634295ebab3345', {
                    cluster: 'ap2'
                  });
        
                let channel = pusher.subscribe('my-channel');
                  channel.bind('my-event', function(data) {
                    console.log(data.question);
                    setQuestion(data.question)
                    setOptionA(data.optionA)
                    setOptionB(data.optionB)
                    setOptionC(data.optionC)
                    setOptionD(data.optionD)
                    setAnswer(data.answer)
                    setAllowClick(true)
                  });
                  channel.bind('winner',function(data){
                      setWinner(data.winners)
                      console.log("winners",winner)
                  })

            }
        })    
    }

    return (
        <>
            <div className="space-20"></div>
            <div className="space-20"></div>            
            <div className="space-20"></div>
            <div className="space-20"></div>
            {!username && 
            <div className="join-game" onClick={()=>start()} >
                Join game
            </div>
            }
            {
                winner.length !== 0 && <div className="card-a text-center">
                    <h3>WINNERS ARE</h3>
                    <br/>
                    {/* {console.log(winner[0].username)} */}
                    {/* {winner[0].username} */}
                    {winner.map(user=>{
                        return <div >
                            {console.log("user=>",user.username)}
                            <h3>
                            {user.username}  : {user.score}/5
                            </h3>
                        </div>
                    })}
                </div>
            }

            <div className="space-20"></div>
            {username !== '' && 
            <div className="text-center" >
                hello {username}
            </div>
            }
            <br/>
            {question=== ''&& <> <div className="text-center">Game not yet started</div> </>}
            {question!== ''&&
            <>
            <div className="space-20"></div>
            {/* <div className="text-center">
                <Timer seconds={5}/>
                {timeLeft}
            </div>  */}
            <div className="space-20"></div>
            <div className="text-center">
                Score : {score}
            </div>
            <div className="space-20"></div>

            <div className="question_box">
                Q: {question}
            </div>
            <br/>
            <div className={`option ${!allowClick && "optionset"}`} onClick={()=>checkAns('a')} >{optionA}</div>
            <br/>
            <div className={`option ${!allowClick && "optionset"}`} onClick={()=>checkAns('b')}>{optionB}</div>
            <br/>
            <div className={`option ${!allowClick && "optionset"}`} onClick={()=>checkAns('c')}>{optionC}</div>
            <br/>
            <div className={`option ${!allowClick && "optionset"}`} onClick={()=>checkAns('d')}>{optionD}</div>
            </>
            }
        </>
    )
}






