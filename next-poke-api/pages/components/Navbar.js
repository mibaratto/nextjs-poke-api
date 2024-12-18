import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1 className={styles.logo}>PokeNext</h1>
      </div>

      <ul className={styles.link_items}>
        <li>
          <Link className={styles.link_items_link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link_items_link} href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
