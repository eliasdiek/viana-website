import Image from "next/image";
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Mabel de Jesus Viana Arias'
export const siteTitle = 'Mabel de Jesus Viana Arias'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <div className="top-container-alt relative flex-col items-center justify-center">
            {
              home ? (
                <h2 className={utilStyles.headingLg}>
                  {name}
                </h2>
              ) : (
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              )
            }

            <div className={styles.contactInfo}><span>Email</span>: <a href="mailto:viana.mabel3058@gmail.com">viana.mabel3058@gmail.com</a>, <span>Phone</span>: <a href="tel:+573058321929">+57 3058321929</a></div>
          </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}