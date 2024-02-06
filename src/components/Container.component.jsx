import React from 'react'

const ContainerComponent = ({children}) => {
  return (
    <div className=' container max-w-[1280px] mx-auto h-screen'>{children}</div>
  )
}

export default ContainerComponent