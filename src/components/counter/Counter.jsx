import React from 'react'
import { useSelector } from 'react-redux';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-80">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>
        <p className="text-5xl font-semibold text-blue-600 mb-6">{count}</p>
        <div className="flex justify-center gap-4">
          <button className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl text-lg transition-all duration-200">
            -
          </button>
          <button className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl text-lg transition-all duration-200">
            Reset
          </button>
          <button className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-lg transition-all duration-200">
            +
          </button>
        </div>
      </div>
    </div>
  );
}


export default Counter