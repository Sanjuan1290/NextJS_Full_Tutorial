import Link from 'next/link'
import React from 'react'

const reviews = async ({params}: { params:Promise<{ productId: string}>}) => {
    const productId = (await params).productId
    return (
    <div>
        <h1>reviewsPage</h1>
        <Link href={`/products/${productId}/reviews/1`}>Review 1</Link>
        <Link href={`/products/${productId}/reviews/2`}>Review 2</Link>
        <Link href={`/products/${productId}/reviews/3`}>Review 3</Link>
    </div>
  )
}

export default reviews