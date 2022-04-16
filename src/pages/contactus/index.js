import React from "react";
import clsx from 'clsx';
import Layout from "@theme/Layout";
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const profilePicture = [
  {
    title: 'بهزاد صمدی',
    description: 'جوینده همیشگی دانش',
    imageUrl: '/img/general/behzadsamadi.jpg',
    alt: 'Behzad Samadi'
  }
]

const socialMedia = [
  {
    imageUrl: '/img/socialMedia/telegram.png',
    href: 'https://t.me/bsamadi',
    alt: 'Telegram ID'
  },
  {
    imageUrl: '/img/socialMedia/whatsapp.png',
    href: 'http://wa.me/14168867924',
    alt: 'WhatsApp ID'
  },
  {
    imageUrl: '/img/socialMedia/email.png',
    href: 'mailto:behzad@mechatronics3d.com',
    alt: 'Email ID'
  },
  {
    imageUrl: '/img/socialMedia/linkedin.png',
    href: 'https://linkedin.com/in/behzadsamadi',
    alt: 'LinkedIn Profile'
  }
]

function ProfilePicture({ title, description, imageUrl, alt }) {
  return (
    <div className={"avatar avatar--vertical"}>
      <img
        className={clsx(styles.profile__picture, "avatar__photo avatar__photo--xl")}
        src={useBaseUrl(imageUrl)}
        alt={alt}
      />
      {/* <Image className={clsx(styles.profile__picture, "avatar__photo avatar__photo--xl")} img={imageUrl} /> */}
      <div className={"avatar__intro"}>
        <h2 className={styles.avatar__title}>{title}</h2>
        <small className={styles.avatar__subtitle}>{description}</small>
      </div>
    </div>
  );
}

function SocialMedia({ imageUrl, href, alt }) {
  return (
    <div className={"avatar"}>
      <a
        href={href}
      >
        <img
          className={clsx(styles.social__media_pic, "avatar__photo avatar__photo--sm")}
          src={useBaseUrl(imageUrl)}
          alt={alt}
        />
      </a>
    </div>
  );
}

function Support() {
  return (
    <Layout
      title="تماس با من"
      description="می‌توانید در لینکداین به من پیام بدهید"
      keywords={['بهزاد صمدی', 'Behzad Samadi', 'Mechatronics3D']}>
      <div className={clsx(styles.custom_container)}>
        <header className={clsx(styles.heroBanner_contactus, 'hero hero--primary')}>
          <div className='container'>
            <h1 className={styles.hero__title_contactus}>هم‌افزایی</h1>
            <p className={styles.hero__subtitle_contactus}>جمع یک و یک بیشتر از دو است.</p>
          </div>
        </header>
        <main className={styles.main_features}>
          {profilePicture && profilePicture.length > 0 && (
            <section className={styles.profile__picture_features}>
              <div className={"container"}>
                {profilePicture.map((props, idx) => (
                  <ProfilePicture key={idx} {...props} />
                ))}
              </div>
            </section>
          )}
          {socialMedia && socialMedia.length > 0 && (
            <section className={styles.social__media_features}>
              <div className={"container"}>
                <div className={clsx("row", styles.center__row)}>
                  {socialMedia.map((props, idx) => (
                    <SocialMedia key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
}

export default Support;
