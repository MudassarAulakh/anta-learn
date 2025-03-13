"use client"
import React from 'react'
import CategoriesSectionCard from './CategoriesSectionCard'

const CategoriesSection = () => {
  return (
    <div className="bg-[#F8FAFB] p-10 h-[calc(100vh-82px)] overflow-auto">
      <h2 className="text-3xl font-semibold pb-7">Categories</h2>
      <CategoriesSectionCard />
    </div>
  )
}

export default CategoriesSection
