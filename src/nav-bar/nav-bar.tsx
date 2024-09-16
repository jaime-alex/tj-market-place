import { useState } from 'react'
import './styles.css'
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';


export default function NavBar () {
    const navigate = useNavigate();
    const location = useLocation()
    const [selectedOption, setSelectedOption] = useState(location.pathname)

    const getSelectedStyles = (option: string) => {
        return selectedOption === option ? 'selected' : ''
    }

    const optionClickedHandler = (path: string) => {
        setSelectedOption(path)
        navigate(path)
    }

    return <><div className='nav-bar'>
        <button className={`clear ${getSelectedStyles('/')}`}
                onClick={() => optionClickedHandler('/')}>Home</button>
        <button className={`clear ${getSelectedStyles('/identify')}`}
                onClick={() => optionClickedHandler('/identify')}>Log In</button>
    </div>
    <Outlet></Outlet>
    </>
}