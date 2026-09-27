
// src/App.jsx
import BookCard from './components/BookCard';

const books = [ 
  {
    id: 1,
    title: '同志少女よ、敵を撃て',
    author: '逢坂冬馬',
    rating: 4.5,
    comment: 'とても良い本です。'
  },
  {
    id: 2,
    title: '君の膵臓をたべたい',
    author: '住野よる',
    rating: 4.0,
    comment: '感動的なストーリーでした。'
  }
 ];

function App() {
  return (
    <main className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">わたしの本棚</h1>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          comment={book.comment}
        />
      ))}
    </main>
  );
}

export default App;