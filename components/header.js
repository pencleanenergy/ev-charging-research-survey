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
              <a href="https://www.peninsulacleanenergy.com/program/eM6pR7/">Return</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
