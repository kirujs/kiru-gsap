import { Link } from "kiru/router"

export default function Layout({ children }: { children: JSX.Children }) {
  return (
    <div className="App flex flex-col">
      <nav className="flex gap-2">
        <Link to="/basic">Basic</Link>
        <Link to="/advanced">Advanced</Link>
      </nav>
      {children}
    </div>
  )
}
