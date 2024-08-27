"use client";
import React, { useState } from "react";
import styles from "./navBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isSidebarActive, setSidebarActive] = useState<boolean>(false);

  const nav = [
    { id: 1, link: "#", title: "About" },
    { id: 2, link: "#", title: "Offers" },
    { id: 3, link: "#", title: "Corporate" },
    { id: 4, link: "#", title: "Personal" },
    { id: 5, link: "#", title: "Location" },
    { id: 6, link: "#", title: "Contact Us" },
  ]

  const socialLinks = [
    { id: 1, name: "facebook", imgUrl: "/images/fb_1.svg", url: "https://www.facebook.com/" },
    { id: 2, name: "Instagram", imgUrl: "/images/ig_1.svg", url: "https://www.instagram.com/" },
    { id: 3, name: "twitter", imgUrl: "/images/x_1.png", url: "https://x.com/" },
    { id: 4, name: "LinkedIn", imgUrl: "/images/in_1.svg", url: "https://www.linkedin.com/" }
  ]

 
  const handleBurgerClick = () => {
    setSidebarActive(true);
  };


  const handleCloseClick = () => {
    setSidebarActive(false);
  };

  return (
    <div className={styles.header}>
      <header>
        <div className={styles.nav}>
          <div className={styles.navSocial}>
            <ul className={styles.navSocialList}>
              {socialLinks.map((sm) => (
                <li className={styles.navSocailLi} key={sm.id}>
                  <Link href={sm.url} target="_blank">
                    <Image
                      src={sm.imgUrl}
                      alt={sm.name}
                      className={styles.facebookNavLogo}
                      height={15}
                      width={15}
                    />
                  </Link>

                </li>))}
            </ul>
          </div>
          <div className={styles.navLayer}>
            <div id="navLogo">
              <Image
                src="/images/logo_name.png"
                className={styles.companyLogo}
                width={370}
                height={54}
                alt="carRental"
              />
            </div>
            <div className={styles.navList}>
              <ul className={styles.navLinkList}>
                {nav.map((item) => (
                  <li className={styles.navLinkLi} key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
                <li
                  className={`${styles.navLinkLi} ${styles.navLinkButtonLi}`}
                  id="navLinkButtonLi"
                >
                  <button className={styles.notificationButton}>
                    <Image
                      src="/images/bell_icon.png"
                      alt="notification"
                      height={24}
                      width={24}
                    />
                  </button>
                  {/* <!-- avtar --> */}
                  <button className={styles.acctButton}>
                    <span className={styles.acct}>J</span>
                    <span className={styles.name}>John Doe</span>
                  </button>
                </li>
              </ul>
              <div className={styles.burger} onClick={handleBurgerClick}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>
          </div>
        </div>

{/* responsive nav bar */}
        <div
          className={`${styles.sideBar} ${isSidebarActive ? styles.sideBarActive : ""
            }`}
        >
          <div>
            <Image
               src="/images/cross_icon.svg"
              alt="Close Icon For Side Bar"
              className={styles.closeButtonIcon}
              onClick={handleCloseClick}
              width="32"
              height="32"
            />
          </div>

          <div className={styles.dropNavMenu}>
            {nav.map((item, index) => (<>
              <Link href={item.link} key={item.id}>{item.title}</Link>
              <div className={styles.hDivider} key={index}></div></>
            ))}
            <button className={styles.loginSignUpButton}>Login/Sign Up</button>
          </div>


        </div>
      </header>
    </div>
  );
}

