import React, { memo } from 'react'
import { useOutletContext } from 'react-router-dom'


const Specialists = () => {
 const {data} = useOutletContext()
  console.log(data)
    return (
        <div>
            hello
        </div>
    )
}

export default memo(Specialists)
