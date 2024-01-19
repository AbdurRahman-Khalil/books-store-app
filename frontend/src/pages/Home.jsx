import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingComp from '../components/LoadingComp';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import { VscSignOut } from "react-icons/vsc";
import BooksTable from '../components/home/BooksTable';
import BooksCards from '../components/home/BooksCards';
import Searchbar from '../components/Searchbar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  const [filter, setFilter] = useState('');
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5619/home/books')
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 mx-6'>
      <nav className='absolute top-0 left-0 flex justify-between items-center min-w-full p-2 px-4 border-b-2 border-b-slate-600'>
        <h1 className='text-4xl font-bold text-slate-200 mb-2'>Books Store</h1>
        <Link to='/'>
          <VscSignOut id='logout' className='text-3xl cursor-pointer text-slate-400 hover:text-slate-200 duration-200' />
        </Link>
      </nav>
      {/* <div className='flex justify-between items-center mt-16'> */}
      <h1 className='text-3xl text-slate-300 my-5 font-bold mt-20'>Your Books</h1>
      {/* </div> */}
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-x-4 mb-5'>
          <h2 className='text-slate-400'>See Books in:</h2>
          <button
            className='bg-sky-300 hover:bg-sky-200 px-5 py-2 rounded-full text-sky-900 font-bold'
            onClick={() => setShowType('table')}
          >
            Table
          </button>
          <button
            className='bg-sky-300 hover:bg-sky-200 px-5 py-2 rounded-full text-sky-900 font-bold'
            onClick={() => setShowType('card')}
          >
            Cards
          </button>
        </div>
        <div className='flex justify-between items-center'>
          <Link to='/home/books/create'>
            <MdOutlineAddBox className='text-green-300 hover:text-green-400 active:text-green-300 duration-200 text-4xl mb-7 mx-6' />
          </Link>
          <Searchbar filter={filter} setFilter={setFilter} />
        </div>
      </div>
      {loading ? (
        <LoadingComp />
      ) : showType === 'table' ? (
        <BooksTable books={books} filteredBooks={filteredBooks} />
      ) : (
        <BooksCards books={books} />
      )}
    </div>
  );
};

export default Home;
