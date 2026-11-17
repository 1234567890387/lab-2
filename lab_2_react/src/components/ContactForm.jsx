import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Таймер на 1 хвилину (60000 мс)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    // Очищення таймера при розмонтуванні компонента
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl max-w-md w-full relative shadow-2xl">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white font-bold text-lg"
          title="Закрити"
        >
          ✕
        </button>
        
        <h2 className="text-xl font-bold mb-4">Форма зворотного зв'язку</h2>
        
        <form action="https://formspree.io/f/meagjerp" method="POST" className="flex flex-col gap-3">
          <div>
            <label className="block text-xs font-semibold mb-1">Ім'я</label>
            <input type="text" name="name" required placeholder="Ваше ім'я" className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Email</label>
            <input type="email" name="email" required placeholder="your@email.com" className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Номер телефону</label>
            <input type="tel" name="phone" required placeholder="+380..." className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600" />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Повідомлення</label>
            <textarea name="message" rows="3" required placeholder="Текст повідомлення..." className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600"></textarea>
          </div>

          <button type="submit" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}