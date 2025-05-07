import styles from './product-item.module.css'
function ButtonComponent(){
    return <button className={styles.buttonStyle}>Click</button>
}

function ProductItem(props){
    const {singleProductItem}=props;
    return(
        <div style={{padding:'20px', border:"2px solid blue", filter: "drop-shadow(0 0 0.2em #646cffaa)",marginBottom:'10px'}}>
            <p className={styles.productTitle}>{singleProductItem}</p>
            <ButtonComponent/>
        </div>
    );
}
export default ProductItem;