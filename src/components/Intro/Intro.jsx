import './intro.scss'
import {init} from 'ityped'
import {useEffect, useRef} from 'react'

function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: true,backDelay: 1500, strings: ['Developer', 'Designer' ] })
    }, [])
    return (
        <div className = 'intro' id = 'intro'>
            <div className = 'left'>
                <div className= 'imgContainer'>
                    <img src = 'assets/me.png' alt =''/>
                </div>
            </div>
            <div className = 'right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Abdullah Abbasi</h1>
                    <h3>Web <span ref = {textRef}></span></h3>
                </div>
                <a href = '#work'>
                    <img src = 'assets/down.png' alt ='' />
                </a>
            </div>
        </div>
    )
}

export default Intro
