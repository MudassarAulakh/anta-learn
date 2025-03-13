"use client"
import React from 'react'
import UnlockWorldLearning from './UnlockWorldLearning'
import { useRouter } from 'next/navigation';

const HomeMain = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F8FAFB] p-10 h-[calc(100vh-82px)] overflow-auto">
      <UnlockWorldLearning />
    </div>
  )
}

export default HomeMain
