import React from 'react'

interface TitleProps {
    title: string
}

const Title = ({ title }: TitleProps): JSX.Element => {
  return (
    <h1 className='text-xl text-slate-700 text-left'>
        {title}
    </h1>
  )
}

export default Title