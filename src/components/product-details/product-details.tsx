import { useLocation } from "react-router-dom";
import css from "./ProductDetails.module.css"
import { useState } from "react";
import placeHolderImage from "../../assets/image_placeholder.svg"
import Card from "../common/Card";

interface Props {
    images: Array<string>,
    title: string,
    price: string
}

export default function ProductDetails() {
    const location = useLocation();
    const { images, title, price }: Props = location.state || {};
    const [mainImage, setMainImage] = useState<string>(images?.length > 0 ? images[0] : placeHolderImage)

    return <div className={css.container}>
        <div className={css.images}>
            <div className={css.imagesCollection}>
                {images?.map((image, i) => <img key={`product-details-${i}`} src={image} className={css.thumbnailImg} onClick={() => setMainImage(image)}></img>)}
            </div>
            <img className={css.mainImage} src={mainImage}></img>
        </div>
        <div className={css.details}>
            <h3 style={{  }}>{title}</h3>
        </div>
        <div className={css.options}>
            <Card className={css.cardOptions}>
                <div className={css.price}>
                    {price ? <><span className={css.symbol}>$</span>
                        <span className={css.value}>{price}</span>
                        <span className={css.fraction}>00</span></> : "--"}
                </div>
                <button className={`yellow ${css.button}`}>Agregar a carrito</button>
            </Card>
        </div>
    </div>
}