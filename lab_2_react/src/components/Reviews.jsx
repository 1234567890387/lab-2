import { useEffect, useState } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Запит для 5 варіанта (posts/5/comments)
    fetch('https://jsonplaceholder.typicode.com/posts/5/comments')
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Помилка завантаження відгуків:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center my-4">Завантаження відгуків...</p>;

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Відгуки попередніх роботодавців</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 capitalize">{comment.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{comment.email}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}