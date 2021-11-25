import './topbar.scss'
import {PhoneOutlined, MailOutline, WorkOutline} from '@material-ui/icons'

function topbar( { menuOpen, setMenuOpen, toggleNavbar}) {
    return (
        <div className = {'topbar ' + (menuOpen && 'active')}>
            <div className = 'wrapper'>
                <div className= 'left'>

                    <div className = 'itemContainer'>
                        <WorkOutline className = 'icon' />
                        <span>Web Developer</span>
                    </div>
                    <div className = 'itemContainer'>
                        <PhoneOutlined className = 'icon'/>
                        <span>+92 342 0008441</span>
                    </div>
                    <div className = 'itemContainer'>
                        <MailOutline className = 'icon'/>
                        <span>affixalabdullah@gmail.com</span>
                    </div>
                </div>
                <div className= 'right'>
                    <div className= 'hamburger' onClick={toggleNavbar}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default topbar
