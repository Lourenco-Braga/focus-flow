import styles from './styles.module.css'
import type { HomeProps } from '../../pages/Home'

export function Countdown({ state }: HomeProps) {
    return (
        <div className={styles.container}>
            {state.formattedSecondsRemaining}
        </div>
    )
}