import React from 'react'
import ContentWrapper from '../components/layouts/ContentWrapper'

const home = () => {
  return (
      <div className='relative min-h-[500px] flex overflow-hidden'>
      {/* Hero Section */}

        {/* Background */}
        <div className='w-full h-full bg-slate-400 -z-10 absolute' />

        <ContentWrapper>
          <div className='flex justify-between'>

            {/* Text */}
            <div className='w-4/6 text-white flex items-center text-[7rem]'>
              Site under constructions ⚒
            </div>
          </div>
        </ContentWrapper>

      </div>
  )
}

export default home