import './work.scss'
import {useState} from 'react'
import {init} from 'ityped'
import {useEffect, useRef} from 'react'

function Work() {

  const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: false, strings: ['Web Development Portfolio' ] })
    }, [])

    const [currentSlide, setcurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: 'Expense Tracker',
            desc:
              "Purposely developed to help you keep track of your income and expense. ",
            img:
              "./assets/expense.png",
            website:
                'https://theexpensetrackerapp.surge.sh',
          },
          {
            id: "2",
            icon: "./assets/globe.png",
            title: "Quiz App",
            desc:
              "Want to play quiz game? I've got one for you.",
            img:
              "./assets/Quiz.png",
            website:
              'https://quiz-app-byabdul.surge.sh/',
          },
          {
            id: "3",
            icon: "./assets/globe.png",
            title: "Animation App",
            desc:
              "Help Alice save her life from witch. Click anywhere on screen to make run Alice faster",
            img:
              "./assets/Alice.png",
            website:
              'https://alice-animation-app-by-abdul.surge.sh/',
          },
          {
            id: "4",
            icon: "./assets/globe.png",
            title: "Task Tracker",
            desc:
              "Write down tasks to get reminded of them later.",
            img:
              "./assets/task.png",
            website:
              'https://thetracktrackerapp.surge.sh/',
          },
          {
            id: "5",
            icon: "./assets/globe.png",
            title: "Timer App",
            desc:
              "Timer app allows you to start, stop or reset the timer.",
            img:
              "./assets/timer.png",
            website:
              'https://timer-app-byabdul.surge.sh/',
          },
          {
            id: "6",
            icon: "./assets/globe.png",
            title: 'Shopping Store',
            desc:
              "Browse through variety of products in shopping store. This shopping store is developed using react router.",
            img:
              "./assets/store.png",
            website:
              'http://shoppingstore.surge.sh/',
          },
    ]

    const handleClick =(way) =>{
        way ==='left' ? setcurrentSlide(currentSlide >0 ? currentSlide-1 :2) :
        setcurrentSlide(currentSlide < data.length -1? currentSlide +1:0)
    }
    
    return (
        
        <div className = 'work' id = 'work'>
            <div className ='slider' style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map(d => ( 
                    <div className = 'container' key = {d.id}>
                        <div className='item'>
                            <div className = 'left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img src = {d.icon} alt =''/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}  
                                    </p>
                                    <a href={d.website} target='_blank' rel="noreferrer">Take me to website</a>
                                </div>
                            </div>
                        <div className = 'right'>
                            <img src={d.img} alt='' />
                        </div>
                    </div>
                </div>
                 ))
                }
            </div>
            <img src='assets/arrow.png' className='arrow left' alt= '' onClick={() => handleClick('left')} />
            <img src='assets/arrow.png' className='arrow right' alt= '' onClick={() => handleClick()}/>
          <div className='header'>
            <h2>
                <span ref = {textRef}></span>
            </h2>
          </div>
        </div>
    )
}

export default Work
