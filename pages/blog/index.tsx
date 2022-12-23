import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>Blog
        <div>
            <Link href={"/blog/1"}>Blog 1</Link>
            <Link href={"/blog/2"}>Blog 2</Link>
            <Link href={"/blog/3"}>Blog 3</Link>
            <Link href={"/blog/4"}>Blog 4</Link>
        </div>
    </div>
  )
}

export default Blog