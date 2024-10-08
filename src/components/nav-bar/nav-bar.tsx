import { useEffect, useState } from 'react'
import styles from './NavBar.module.css'
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import cartIcon from "../../assets/cart.svg"
import SearchProductsInput from './search-products-input';


export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation()
    const [selectedOption, setSelectedOption] = useState(location.pathname)
    const [scrolled, setScrolled] = useState(false)

    const getSelectedStyles = (option: string) => {
        return selectedOption === option ? styles.selected : ''
    }

    const optionClickedHandler = (path: string) => {
        setSelectedOption(path)
        navigate(path)
    }

    const setScrollStyles = () => {
        const scrollY = window.scrollY;

        if (scrollY > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', setScrollStyles);

        return () => {
            window.removeEventListener('scroll', setScrollStyles)
        }
    }, [])

    return <>
        <div className={`${styles['nav-bar']} ${scrolled ? styles.scrolled : ''}`}>
            <button className={`clear ${getSelectedStyles('/')}`}
                onClick={() => optionClickedHandler('/')}>Home</button>
            {/* <button className={`clear ${getSelectedStyles('/identify')}`}
                onClick={() => optionClickedHandler('/identify')}>Log In</button> */}
            {location.pathname == "/" && <SearchProductsInput></SearchProductsInput>}
            <img src={cartIcon} style={{ width: "30px", height: "30px", position: "absolute", right: "20px", top: "20px" }}></img>
        </div>
        <Outlet></Outlet>
    </>
}