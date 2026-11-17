import { useEffect, useState } from "react";

const STORAGE_KEY = "user_system_info";

function Footer() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const systemInfo = {
      os: navigator.platform,
      browser: navigator.userAgent,
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
      online: navigator.onLine,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(systemInfo));

    const saved = localStorage.getItem(STORAGE_KEY);
    setInfo(saved ? JSON.parse(saved) : null);
  }, []);

  return (
    <footer className="footer">
      {info && (
        <>
          <p><strong>ОС / Платформа:</strong> {info.os}</p>
          <p className="footer__browser">
            <strong>Браузер:</strong> {info.browser}
          </p>
          <p><strong>Мова:</strong> {info.language}</p>
          <p><strong>Екран:</strong> {info.screen}</p>
          <p><strong>Онлайн:</strong> {info.online ? "так" : "ні"}</p>
        </>
      )}
    </footer>
  );
}

export default Footer;