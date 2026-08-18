import Sidebar from '@/components/Sidebar'
import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <main className="flex-1 p-4 h-10000">{children}</main>
    </div>
  )
}

export default layout
