
const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <>
    <html lang="en">
        <body>
            <header>Auth Header</header>
            {children}
            <footer>Auth Footer</footer>
        </body>
    </html>
    </>
  )
}

export default AuthLayout