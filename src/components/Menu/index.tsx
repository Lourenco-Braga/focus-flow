import { House, History, Settings, Sun } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href=""
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <House />
      </a>
      <a
        className={styles.menuLink}
        href=""
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <History />
      </a>
      <a
        className={styles.menuLink}
        href=""
        aria-label="Configurações"
        title="Configurações"
      >
        <Settings />
      </a>
      <a
        className={styles.menuLink}
        href=""
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        <Sun />
      </a>
    </nav>
  );
}
