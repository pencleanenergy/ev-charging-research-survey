import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_top}></div>
        <div className={styles.header_container}>
          <div className={styles.header_logo}>
            <a href="https://www.peninsulacleanenergy.com">
              <img
                src="https://www.peninsulacleanenergy.com/wp-content/uploads/2021/05/PCE_logo_svg_full.svg"
                alt="Peninsula Clean Energy Logo"
                data-lazy-src="https://www.peninsulacleanenergy.com/wp-content/uploads/2021/05/PCE_logo_svg_full.svg"
                data-ll-status="loaded"
                width="1656"
                height="648"
              />
              <noscript>
                <img
                  width="1656"
                  height="648"
                  src="https://www.peninsulacleanenergy.com/wp-content/uploads/2021/05/PCE_logo_svg_full.svg"
                  alt="Peninsula Clean Energy Logo"
                />
              </noscript>
            </a>
          </div>
          <div className={styles.navbar}>
            <div className={styles.navbar_row}>
              <div>English</div>
              <div>Spanish</div>
              <div>Search</div>
            </div>
            <ul className={styles.navbar_row}>
              <li className={styles.navbar_link}>
                <a href="#">Residential</a>
                <svg
                  className={styles.arrow}
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </li>
              <li className={styles.navbar_link}>
                <a href="#">Commercial</a>
                <svg
                  className={styles.arrow}
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </li>
              <li className={styles.navbar_link}>
                <a href="#">Energy Sources</a>
                <svg
                  className={styles.arrow}
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </li>
              <li className={styles.navbar_link}>
                <a href="#">Community</a>
                <svg
                  className={styles.arrow}
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </li>
              <li className={styles.navbar_link}>
                <a href="#">About</a>
                <svg
                  className={styles.arrow}
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
