import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BookSingleCard = ({ book }) => {
  return (
    <div className='border-2 border-gray-500 rounded-lg px-5 py-3 m-4 relative hover:scale-105 duration-300'>
      <h2 className='absolute top-2 right-2 px-4 py-1 bg-purple-300 text-purple-900 font-semibold rounded-lg'>
        {book.publishYear}
      </h2>
      <h4 className='my-2 text-gray-500'>{book._id}</h4>
      <div className='flex justify-start items-center gap-x-2 pt-1'>
        <PiBookOpenTextLight className='text-sky-200 text-3xl' />
        <h2 className='my-1 font-semibold text-lg'>{book.title}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-sky-200 text-3xl' />
        <h2 className='my-1 font-semibold text-lg'>{book.author}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-5 p-4 pb-2'>
        <Link to={`/home/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-500 hover:text-green-300' />
        </Link>
        <Link to={`/home/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-yellow-300' />
        </Link>
        <Link to={`/home/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-500 hover:text-red-300' />
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
