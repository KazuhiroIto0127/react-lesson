import { Link } from "react-router-dom"

type PageType = {
  title: string,
  path: string,
}

const pages: PageType[] = [
  {
    title: 'Home',
    path: '/home'
  },
  {
    title: 'Counter',
    path: '/counters'
  }
]

function NavBar() {
  return (
    <>
      {pages.map((page) => (
        <Link to={page.path}>{page.title}</Link>
      ))}
    </>
  )
}

export default NavBar
