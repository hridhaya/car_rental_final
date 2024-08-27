import Image from 'next/image';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  // Define link groups for the footer links
  const linkGroups: string[][] = [
    ['Home', 'About Us', 'Services'],
    ['Offers', 'Locations', 'Contact Us'],
    ['FAQ', 'Privacy Policy', 'Service Request'],
    ['Career', 'Terms & Conditions'],
  ];

  // Define social icons with their respective URLs
  const socialLinks = [
    {
      src: 'images/fb2.svg',
      alt: 'Facebook',
      href: 'https://www.facebook.com',
    },
    {
      src: 'images/x2.svg',
      alt: 'Twitter',
      href: 'https://www.twitter.com',
    },
    {
      src: 'images/ig2.svg',
      alt: 'Instagram',
      href: 'https://www.instagram.com',
    },
    {
      src: 'images/in2.svg',
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com',
    },
    {
      src: 'images/yt2.svg',
      alt: 'YouTube',
      href: 'https://www.youtube.com',
    },
  ];

  return (
    <footer className={styles.footerClass}>
      <div className={styles.footerContent}>
        {/* Footer Logo and Description */}
        <div className={styles.footerLogo}>
          <Image
            src="/images/logo.svg"
            alt="footer-logo"
            width={100}
            height={100}
          />
          <p>
            <span>
              Member of the <br /> Al Habtoor Group
            </span>
          </p>
        </div>

        {/* Footer Links */}
        {linkGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.footerLink1}>
            {group.map((link, linkIndex) => (
            <div className={styles.footerColumn}>
              <a key={linkIndex} href="#">
                {link}
              </a>
              </div>
            ))}
          </div>
        ))}

        {/* Social Media Links */}
        <div className={styles.followUs}>
          <p>
            <span>FOLLOW US ON</span>
          </p>
          <div className={styles.socialIcons}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={14}
                  height={14}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>© 2018 Car rental LLC - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
