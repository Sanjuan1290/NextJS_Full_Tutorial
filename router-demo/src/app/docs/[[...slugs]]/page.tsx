
const page = async ({
    params
}:{
    params: Promise<{slugs: string[]}>
}) => {

    const { slugs } = await params

    if(slugs?.length === 2) {
        return (
            <div>
                <h1>Viewing docs for feature {slugs[0]} and {slugs[1]}</h1>
            </div>
        )
    }else if(slugs?.length === 1) {
        return (
            <div>
                <h1>Viewing docs for feature {slugs[0]}</h1>
            </div>
        )
    }
    
  return (
    <div>Docs Home page</div>
  )
}

export default page