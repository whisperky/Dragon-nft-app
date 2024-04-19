import React from 'react';
import JSConfetti from "js-confetti";

const Banned = () => {
    const canvas = document.getElementById('ban-con')
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti({
        emojis: ["🚫","🤬","😡","💩","❌","🔨"],
        emojiSize: 50,
        confettiNumber: 30,
        confettiRadius: 100,
    }).then(() => {
        jsConfetti.addConfetti({
            confettiColors: [
                '#ff0a0a', '#ff4747', '#ff7070', '#ff8585', '#fbb1bd', '#f9bec7',
            ],
        }).then(() => {
            jsConfetti.clearCanvas()
            jsConfetti.clearCanvas()
        })
    })
    return (
        <div className='overflow-hidden w-100' style={{height: '100vh'}}>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>

            <div className='banned-con' id='ban-con' >
                <div className='banned-text-con'>
                    <p className='banned-text'>You are banned</p>
                </div>
            </div>
        </div>
    );
};

export default Banned;