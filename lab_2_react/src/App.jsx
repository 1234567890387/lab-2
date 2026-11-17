import { useState, useEffect } from 'react';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Визначення часу доби: Денна 07:00 - 21:00, Нічна - в інший час
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'dark' ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      {/* Шапка з кнопкою перемикання теми */}
      <header className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">Моє Резюме / Портфоліо</h1>
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 text-sm font-medium border rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 transition"
        >
          {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
        </button>
      </header>

      {/* Основний вміст */}
      <main className="max-w-4xl mx-auto p-4">
        {/* Тут залишаються ваші основні компоненти з ЛР №2 */}
        
        {/* Компонент відгуків ЛР №4 */}
        <Reviews />
      </main>

      {/* Модальне вікно та футер */}
      <ContactForm />
      <Footer />
    </div>
  );
}