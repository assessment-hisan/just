import React from 'react'

const IndProSection = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Filter Programs</h2>
    <div className="flex flex-wrap gap-4 mb-4">
      <select className="flex-1 basis-1/3 p-2 border border-gray-300 rounded-md bg-gray-200 text-gray-700">
        <option value="">Select Section</option>
      </select>
      <select className="flex-1 basis-1/3 p-2 border border-gray-300 rounded-md bg-gray-200 text-gray-700">
        <option value="">Select Category</option>
      </select>
      <select className="flex-1 basis-1/3 p-2 border border-gray-300 rounded-md bg-gray-200 text-gray-700">
        <option value="">Select Type</option>
      </select>
    </div>
    <input
      type="text"
      placeholder="Search by Program Name"
      className="w-full p-2 border border-gray-300 rounded-md mb-4"
    />
    <ul className="mt-4 list-none p-0">
      <li className="bg-gray-200 p-2 rounded-md shadow-sm"></li>
    </ul>
  </div>
</div>


  )
}

export default IndProSection
