import './menu.scss'

function Menu({menuOpen, setMenuOpen, toggleNavbar}) {
    return (
        <div className = {'menu ' + (menuOpen && 'active')}>
            <ul>
                <li className = 'li' onClick= {toggleNavbar}>
                    <a href = '#intro'>Home</a>
                </li>
                <li className = 'li' onClick= {toggleNavbar}>
                    <a href = '#portfolio'>About Me</a>
                </li >
                <li className = 'li' onClick= {toggleNavbar}>
                    <a href = '#work'>Portfolio</a>
                </li>
                <li className = 'li' onClick= {toggleNavbar}>
                    <a href = '#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
