import React from 'react'
import Logo from '../asset/img/WhatsApp Image 2025-01-25 at 21.14.44_3eb76e5f.jpg'

function Header(){
    return(
        <div className='header'>
            <img src={Logo}/>
        <h2>Expense Tracker</h2>
        </div>
        
    )
}

export default Header