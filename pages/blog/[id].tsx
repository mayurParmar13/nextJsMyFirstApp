import { useRouter } from 'next/router'
import React from 'react'

const DynamicRoutes = () => {
    const routes = useRouter()
    
    return (
    <div>DynamicRoutes ID = {routes?.query.id}</div>
  )
}

export default DynamicRoutes