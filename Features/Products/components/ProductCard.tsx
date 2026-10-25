import styles from "../Css/Card.module.css";
import {IProduct} from"../../../Types/ProductTypes"
import ActionButton from"./ButtonAction"



interface ProductCardProps {
  product: IProduct;
  onEdit?: () => void;
  onDelete?: () => void;
   onError: (message: string) => void;
}

export default function ProductCard({ product,onEdit,onDelete, onError}: ProductCardProps) {



  return (
    <article className={styles.card}>

      <div className={styles.actions}>

        <ActionButton ProoId={product._id} onError={onError} />

        
      </div>


      {/* CENTER - PRODUCT INFORMATION */}
      <div className={styles.info}>

        {/* TITLE */}
        <div className={`${styles.column} ${styles.titleColumn}`}>
          <span className={styles.label}>
            PRODUCT
          </span>

          <h3 className={styles.title}>
            {product.title}
          </h3>

          {product.description && (
            <p className={styles.description}>
              {product.description}
            </p>
          )}
        </div>


        {/* CATEGORY */}
        <div className={styles.column}>
          <span className={styles.label}>
            CATEGORY
          </span>

          <span className={styles.value}>
            {product.category}
          </span>
        </div>


        {/* PRICE */}
        <div className={styles.column}>
          <span className={styles.label}>
            PRICE
          </span>

          <span className={styles.price}>
            ${product.price.toLocaleString()}
          </span>
        </div>

      </div>


      {/* RIGHT - IMAGE */}
      <div className={styles.imageWrapper}>

        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />

        <div className={styles.imageOverlay} />

      </div>

    </article>
  );
}