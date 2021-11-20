import './portfolio.scss';

function Portfolio() {

    return (

        <div className = 'portfolio' id = 'portfolio'>
            <div className = 'header'>
                About Me
            </div>
            <div className='section'>
                <h2>I’m <span className='abdul'>Abdul</span>. Nice to meet you.</h2>
                <p className ='line1'>I'm a front end web developer from Islamabad, Pakistan.
                I build responsive websites for an optimal user experience that 
                 achieves your business goals.
                <br />I design and code simple things, and I love what I do.
                I'm quietly confident, naturally curious, 
                and perpetually working on improving my chops one design problem at a time.
                I value simple content structure, clean design patterns, and thoughtful interactions.
                I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                I enjoy building everything from small businesses <br /> to rich interactive web pages.
                I would love to hear from you.</p>
            </div>
        </div>
    )
}

export default Portfolio
