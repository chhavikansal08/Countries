import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const error = useRouteError();
  return (
 
   <div><h1>Something went wrong {error.status};
   </h1></div>

  )
}

export default Error