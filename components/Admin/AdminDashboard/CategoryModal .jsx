"use client";
import React, { useState } from "react";

const CategoryModal = ({ onClose }) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  const handleSubCategoryKeyDown = (e) => {
    if (e.key === "Enter" && subCategory.trim() !== "") {
      e.preventDefault();
      setSubCategories([...subCategories, subCategory.trim()]);
      setSubCategory("");
    }
  };

  const removeSubCategory = (index) => {
    setSubCategories(subCategories.filter((_, i) => i !== index));
  };

  const isCreateButtonDisabled = !(category.trim() !== "" && subCategories.length >= 2);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[70%]">
        <h2 className="mb-4">Create New Category</h2>
        <div className="w-full h-[2px] bg-gray-300 my-7"></div>

        {/* Category Input */}
        <h2 className="py-3 text-xl">Category</h2>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border-gray-300 focus:outline-none p-3 mb-4 border rounded-xl"
        />

        {/* Sub-Category Input */}
        <h2 className="py-3 text-xl">Sub-category*</h2>
        <div className="flex flex-wrap gap-2 border p-3 rounded-xl">
          {subCategories.map((item, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded-lg flex items-center">
              {item}
              <button onClick={() => removeSubCategory(index)} className="ml-2 pb-[2px] bg-gray-300 px-2 rounded-lg text-red-500 font-bold">×</button>
            </span>
          ))}
          <input
            type="text"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            onKeyDown={handleSubCategoryKeyDown}
            className="outline-none border-none flex-grow"
            placeholder="Type and press Enter..."
          />
        </div>

        <p className="text-[13px] text-gray-400">
          Add a minimum of 2 sub-categories. Press Enter after each sub-category.
        </p>

        <div className="w-full h-[2px] bg-gray-300 my-7"></div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button 
            className={`px-4 py-2 rounded ${isCreateButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white'}`} 
            disabled={isCreateButtonDisabled}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
