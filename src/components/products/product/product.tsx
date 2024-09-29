import { useEffect, useState } from "react"
import Card from "../../common/Card"
import styles from "./Product.module.css"
import placeHolderImage from "../../../assets/image_placeholder.svg"

export default function Product(props: any) {
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        if (props.images) {
            const imagesArray: string[] = JSON.parse(props.images)
            setImageUrl(imagesArray[0])
        }
    },[])
    return <div className={styles.product}>
        <Card className={styles.card}>
            {imageUrl 
                ? <img className={`${styles.imageCover} ${styles.image}`} src={imageUrl}></img> 
                : <img className={`${styles.imageContain} ${styles.image}`} src={placeHolderImage}></img> }
            <h4>{props.title}</h4>
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