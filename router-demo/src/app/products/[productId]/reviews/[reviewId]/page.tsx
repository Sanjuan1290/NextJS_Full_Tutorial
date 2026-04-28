
const Review = async ({ params }: {params: Promise<{ productId: string, reviewId: string}>}) => {
    const productId = (await params).productId
    const reviewid = (await params).reviewId    

    return (
        <div>
            <h1>Review{reviewid} for product {productId}</h1>
        </div>
    )
}

export default Review