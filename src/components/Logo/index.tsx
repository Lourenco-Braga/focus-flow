import { EqualApproximately } from 'lucide-react'
import styles from './styles.module.css'

export function Logo() {
    return (
        <div className={styles.logo}>
            <a className={styles.logoLink} href="">
                <EqualApproximately />
                <p>Focus<span>Flow</span></p>
            </a>
        </div>
    )
}