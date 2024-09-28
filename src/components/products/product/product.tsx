import Card from "../../common/Card"
import styles from "./Product.module.css"

export default function Product(props: any) {
    return <div className={styles.product}>
        <Card>
        <img className={styles.image} src="https://media.istockphoto.com/id/1300459022/photo/natural-organic-spa-cosmetic-products-set-with-eucalyptus-leaves-top-view-herbal-skincare.jpg?s=612x612&w=0&k=20&c=_xkB2_OnFqzJKVdDCeNCPeMp4jwLTsSQy2VvRloiPgk="></img>
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