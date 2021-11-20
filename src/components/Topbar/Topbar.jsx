import './topbar.scss'
import {Phone, Mail, Work} from '@material-ui/icons'

function topbar( { menuOpen, setMenuOpen, toggleNavbar}) {
    return (
        <div className = {'topbar ' + (menuOpen && 'active')}>
            <div className = 'wrapper'>
                <div className= 'left'>

                    <div className = 'itemContainer'>
                        <Work className = 'icon' />
                        <span>Web Developer</span>
                    </div>
                    <div className = 'itemContainer'>
                        <Phone className = 'icon'/>
                        <span>+92 342 0008441</span>
                    </div>
                    <div className = 'itemContainer'>
                        <Mail className = 'icon'/>
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
