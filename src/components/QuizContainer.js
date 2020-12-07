
import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from './context'
import Timer from './timer'
import timerImg from '../images/countdown.gif'

const QuizContainer = ()=>{
    const { question,optionA,optionB,optionC,optionD,allowClick,checkAns } = useContext(PageContext) 

    useEffect(()=>{
        console.log("quiz updated") 
    })

    return(
        <div className="">
            <div className="text-center">
             <img style={{height:"100px",width:"100px"}} src={timerImg} alt=""/>
                {/* <Timer seconds={50}/> */}
                {/* <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width:"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div> */}
            </div>
            <div className="space-20"></div>
            <div className="h5 text-secondary">
                {question}
            </div>
            <div className="container">
                <DisplayOptions 
                    optionA={optionA} 
                    optionB={optionB} 
                    optionC={optionC} 
                    optionD={optionD} 
                    allowClick={allowClick} 
                    checkAns={checkAns}
                    />
            </div>
            
        </div>
    )
}

export default QuizContainer

const DisplayTimer = ({remaining})=>{
    return(
        <div className="">
            {remaining}
        </div>
    )
}


const DisplayOptions = ({optionA,optionB,optionC,optionD,allowClick,checkAns})=>{
    return (
        <div className="text-secondary">
            <div className="row">
                <div className="col-6 p-2">
                    <div className={`option_card ${!allowClick && "optionset"}`} 
                        style={optionCardStyle.card} 
                        onClick={()=>checkAns('a')}
                        >
                        {optionA}
                    </div>
                </div>
                <div className="col-6 p-2">
                    <div className={`option_card ${!allowClick && "optionset"}`} 
                        style={optionCardStyle.card} 
                        onClick={()=>checkAns('b')}
                        >
                        {optionB}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 p-2">
                    <div className={`option_card ${!allowClick && "optionset"}`} 
                        style={optionCardStyle.card} 
                        onClick={()=>checkAns('c')}
                        >
                        {optionC}
                    </div>
                </div>
                <div className="col-6 p-2">
                    <div className={`option_card ${!allowClick && "optionset"}`} 
                    style={optionCardStyle.card} 
                    onClick={()=>checkAns('d')}
                    >
                        {optionD}
                    </div>
                </div>
            </div>

        </div>
    )
}

const optionCardStyle = {
    card: {  
        "boxShadow" : "0px 0px 10px rgba(29, 29, 29, 0.406)",
        "borderRadius" : "10px",
        "width" : "100%",
        "padding" : "5px",
    },
}