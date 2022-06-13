import { MarketHeader } from "./MarketHeader";
import styles from "./Market.module.scss"
import { MarketBody } from "./MarketBody";

export function Market() {

  return(
    <div className={styles.container}>
      <MarketHeader />
      <MarketBody />
    </div>
  )
}