import { useContext, useEffect, useState } from 'react'
import styles from './NavBar.module.css'
import { useLocation, useNavigate } from "react-router-dom";
import cartIcon from "../../assets/cart.svg"
import { ProductsContext } from '../../contexts/products-context';
import { getProducts } from '../../services/products-http-service';


export default function NavBar () {
    const navigate = useNavigate();
    const location = useLocation()
    const [selectedOption, setSelectedOption] = useState(location.pathname)
    const [scrolled, setScrolled] = useState(false)
    const [inputValue, setInputValue] = useState('');

    const productsContext = useContext(ProductsContext)

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

    const handleInputChange = async (event) => {
        setInputValue(event.target.value); // Capturing the input value
        const response = await getProducts(event.target.value) 
        productsContext.setProducts(response.Items)
    };

    return <><div className={`${styles['nav-bar']} ${scrolled ? styles.scrolled : ''}`}>
        <button className={`clear ${getSelectedStyles('/')}`}
                onClick={() => optionClickedHandler('/')}>Home</button>
        <button className={`clear ${getSelectedStyles('/identify')}`}
                onClick={() => optionClickedHandler('/identify')}>Log In</button>
        <input className='input' 
                placeholder="Search" 
                value={inputValue}
                onChange={handleInputChange}
                style={{marginLeft: "10px", width: "400px", padding: "10px", marginRight: "100px"}}></input>
        <img src={cartIcon} style={{width: "35px", height: "35px", position: "absolute", right: "20px"}}></img>
    </div>
    </>
}