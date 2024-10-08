import { useEffect, useState } from "react"
import Card from "../../common/Card"
import styles from "./Product.module.css"
import placeHolderImage from "../../../assets/image_placeholder.svg"
import { Link } from "react-router-dom"

export default function Product(props: any) {
    const [images, setImages] = useState<Array<string>>(null)

    useEffect(() => {
        if (props.images) {
            const imagesArray: string[] = JSON.parse(props.images)
            setImages(imagesArray)
        }
    }, [])
    return <div className={styles.product}>
        <Card className={styles.card}>
            <Link to={"/product/details/"} state={{...props, images: images}}>
                {images && images.length > 0
                    ? <img className={`${styles.imageCover} ${styles.image}`} src={images[0]}></img>
                    : <img className={`${styles.imageContain} ${styles.image}`} src={placeHolderImage}></img>}
            </Link>
            <h4>
                <Link to={"/product/details/"} state={props}>
                    {props.title}
                </Link>
            </h4>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> */}
            <div className={styles.price}>
                <span className={styles.symbol}>$</span>
                <span className={styles.value}>750</span>
                <span className={styles.fraction}>00</span>
            </div>
            <button className={`yellow ${styles.button}`}>Agregar a carrito</button>
        </Card>
    </div>
}