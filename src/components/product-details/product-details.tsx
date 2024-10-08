import { useLocation } from "react-router-dom";
import css from "./ProductDetails.module.css"

interface Props {
    images: Array<string>,
    title: string,
    price: string
}

export default function ProductDetails() {
    const location = useLocation();
    const { images } : Props = location.state || {};

    return <div className={css.container}>
        <div className={css.images}>
            <div className={css.imagesCollection}></div>
            <img className={css.mainImage} src={images[0]}></img>
        </div>
        <div className={css.details}></div>
        <div className={css.options}></div>
    </div>
}