import React, { useContext, useState } from 'react';
import { PageContext } from './context'
import {Space50} from './Utilities'

const WinnersContainer = () => {
    const { winners } = useContext(PageContext)
    return (
        <div className="">
            <div className="text-center h4 text-warning ">
                Today's Winners
            </div>
            <div className="alert alert-info">
            Message to 7876875437 if you are a winner
            </div>
            <Space50/>
            {winners.map((user,index) => {
                return (
                <div key={index} className="row text-secondary" >
                    <div className="col col-6 h5 ">
                        {user.username}
                    </div>
                    <div className="col col-6 h5">
                        : {user.score}
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default WinnersContainer