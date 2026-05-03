export const metadata = {
    title: 'Marketing Layout'
}

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <html lang="en">
        <body>
            <header>Customer Header</header>
            {children}
            <footer>Customer Footer</footer>
        </body>
    </html>
  )
}

export default MarketingLayout