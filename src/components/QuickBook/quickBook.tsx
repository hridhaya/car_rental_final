"use client";
import { useState } from 'react';
import styles from "./quickBook.module.css";
import Image from 'next/image';

function QuickBook() {

    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
    const [isDifferentDropOff, setIsDifferentDropOff] = useState<boolean>(false)

    const toggleMenuVisibility = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <div className={styles.container}>
            <div className={styles.quickBookSection}>

                <div className={styles.tabs}>
                    <ul className={styles.tabsList}>
                        <li className={styles.tabItem}><a href="#">Same as Pick-Up</a></li>
                        <li className={styles.tabItem}><a href="#">Different Drop-Off</a></li>
                        <li>
                            <select name="vehicle" defaultValue="default" className={styles.vehicleDropdown}>
                                <option value="default" disabled hidden>Select Vehicle Type</option>
                            </select>
                        </li>
                    </ul>
                </div>

                <div className={styles.inputSection}>
                    <select name="location" className={styles.locationDropdown} defaultValue="default">
                        <option value="default" disabled hidden>Al Quaz</option>
                        <option value="al-Quaz">Al Quaz</option>
                    </select>

                    <input className={styles.datetimeInput} type="datetime-local"  />
                    <input className={styles.datetimeInput} type="datetime-local"  />
                    <button className={styles.searchButton}>
                        <Image width={26} height={26} src="/images/search_icon.svg" alt="Search Icon" />
                    </button>
                    <div className={styles.verticalDivider}></div>
                    <button className={styles.quickBookButton}>Quick Book</button>
                </div>

                <div className={styles.appDownloadSection}>
                    <p className={styles.downloadText}>Download our App for easy accessibility anytime, anywhere!</p>
                    <div className={styles.appStoreImages}>
                        <Image width={110} height={32} className={styles.storeImage} src="/images/appstore_qb.svg" alt="App Store" />
                        <Image width={110} height={32} className={styles.storeImage} src="/images/gplay_qb.svg" alt="Play Store" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickBook;
