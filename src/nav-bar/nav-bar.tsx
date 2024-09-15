import { useState } from 'react'
import './styles.css'

export default function NavBar () {
    const [selectedOption, setSelectedOption] = useState('home')

    const setSelectedStyles = (option: string) => {
        return selectedOption === option ? 'selected' : ''
    }

    return <div className='nav-bar'>
        <button className={`clear ${setSelectedStyles('home')}`}
                onClick={() => setSelectedOption('home')}>Home</button>
        <button className={`clear ${setSelectedStyles('login')}`}
                onClick={() => setSelectedOption('login')}>Log In</button>
    </div>
}