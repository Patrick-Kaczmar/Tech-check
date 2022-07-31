import React from 'react';
import styles from '../assets/css/home.module.css'

export default function Home() {
    return (
        <>
            <aside className={styles.aside}><img alt='paint buckets' className={styles.paintImg} src={require('../assets/images/paint.png')}></img></aside>
        </>
    )
}