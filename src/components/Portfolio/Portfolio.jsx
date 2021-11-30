import './portfolio.scss';

function Portfolio() {

    return (

        <div className = 'portfolio' id = 'portfolio'>
            <div className = 'header'>
                About Me
            </div>
            <div className='section'>
                <h2>I’m <span className='abdul'>Abdul</span>. Nice to meet you!</h2>
                <p className ='line1'>I'm a front end web developer from Islamabad, Pakistan.
                I build responsive<br /> websites for an optimal user experience that 
                 achieve your business goals.<br />
                I design and code simple things and I love what I do.
                I am quiet confident,<br /> naturally curious, 
                and perpetually working on improving my chops one design <br />problem at a time.
                I value simple content structure, clean design patterns, and <br />thoughtful interactions.
                I like to code things from scratch, and enjoy bringing <br />ideas to life in the browser.
                I enjoy building everything from small businesses to <br />rich interactive web pages. 
                Once the proper information architecture is in place,<br />
                 I design the visual layer to create a beautiful user experience.</p>
                 <hr />
            </div>
        </div>
    )
}

export default Portfolio
