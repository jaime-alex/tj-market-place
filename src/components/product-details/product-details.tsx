import { useLocation } from "react-router-dom";
import css from "./ProductDetails.module.css"
import { useState } from "react";
import placeHolderImage from "../../assets/image_placeholder.svg"

interface Props {
    images: Array<string>,
    title: string,
    price: string
}

export default function ProductDetails() {
    const location = useLocation();
    const { images, title }: Props = location.state || {};
    const [mainImage, setMainImage] = useState<string>(images?.length > 0 ? images[0] : placeHolderImage)

    return <div className={css.container}>
            <div className={css.images}>
                <div className={css.imagesCollection}>
                    {images?.map((image, i) => <img key={`product-details-${i}`} src={image} className={css.thumbnailImg}></img>)}
                </div>
                <img className={css.mainImage} src={mainImage}></img>
            </div>
            <div className={css.details}>
                <h2>{title}</h2>
            </div>
            <div className={css.options}></div>
        </div>
}