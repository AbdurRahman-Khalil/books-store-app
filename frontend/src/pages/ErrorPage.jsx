// import React from 'react';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-grow items-center justify-center">
            <div className="rounded-lg bg-slate-300 p-9 px-10 text-center shadow-xl">
                <h1 className="mb-4 text-5xl text-slate-800 font-bold">404</h1>
                <p className="text-lg text-gray-600 text-slate-700 font-bold">Oops! The page you are looking for could not be found.</p>
                <Link to="/home" className="mt-4 inline-block rounded bg-slate-600 px-4 py-2 text-white hover:bg-slate-700"> Go back to Home </Link>
            </div>
        </div>
    );
}

export default ErrorPage;