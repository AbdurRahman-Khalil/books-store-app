import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ filteredBooks }) => {
  return (
    <div id='TablePage' className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-s text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className="px-6 py-3">
              ID
            </th>
            <th className="px-6 py-3">
              Title
            </th>
            <th className='px-6 py-3 max-md:hidden'>
              Author
            </th>
            <th className='px-6 py-3 max-md:hidden'>
              Publish Year
            </th>
            <th className="px-6 py-3">Operations</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <tr key={book._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {index + 1}
              </td>
              <td className='px-6 py-4'>
                {book.title}
              </td>
              <td className='px-6 py-4 max-md:hidden'>
                {book.author}
              </td>
              <td className='px-6 py-4 max-md:hidden'>
                {book.publishYear}
              </td>
              <td className='px-6 py-4'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/home/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-500 hover:text-green-400' />
                  </Link>
                  <Link to={`/home/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-yellow-400' />
                  </Link>
                  <Link to={`/home/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-500 hover:text-red-400' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
