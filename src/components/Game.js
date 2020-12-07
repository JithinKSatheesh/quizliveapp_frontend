
import React, { useContext, useState } from 'react';
import { PageContext } from './context'

import QuizContainer from './QuizContainer'
import WinnerContainer from './WinnersContainer'

const GameContainer = () => {
    const { username,isGameOn,winners } = useContext(PageContext)

    return (
        <div style={game.card} className="container p-4">
            {isGameOn?
                winners.length === 0 ?
                <QuizContainer/>
                :
                <WinnerContainer/>
            :   
                <DisplayWelcome name={username} />
            }
        </div>
    )
}

export default GameContainer

const DisplayWelcome = ({ name }) => {
    return (
        <div className="p-3 text-center font-weight-bold h5 text-secondary">
            Welcome {name}
            <br/>
            <div className="p4 text-warning">
                Game will start at 9:00
            </div>
        </div>
    )
}

const game = {
    card: {
        "boxShadow": "0px 0px 10px rgba(29, 29, 29, 0.406)",
        "backgroundColor": "white",
        "borderRadius": "10px"
    },
    input: {
        "border": 'none',
        "backgroundColor": '#e1e0f0'
    },

}