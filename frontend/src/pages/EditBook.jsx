import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import LoadingComp from '../components/LoadingComp';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5619/home/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setDescription(response.data.description);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      description,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5619/home/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully.', { variant: 'success' });
        navigate('/home');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error!', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-5xl text-slate-300 text-center my-4 mb-6'>Edit Book</h1>
      {loading ? <LoadingComp /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-3 w-full bg-transparent rounded-md'
          />
        </div>
        <div className='my-4'>
          <input
            type='text'
            placeholder='Author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-3 w-full bg-transparent rounded-md'
          />
        </div>
        <div className='my-4'>
          <input
            type='text'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-3 w-full bg-transparent rounded-md'
          />
        </div>
        <div className='my-4'>
          <input
            type='number'
            placeholder='Publish Year'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-3 w-full bg-transparent rounded-md'
          />
        </div>
        <button className='p-2 bg-sky-300 hover:bg-sky-200 m-8 text-sky-900 font-bold rounded-md' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook