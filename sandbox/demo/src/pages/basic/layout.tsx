import { Link } from "kiru/router"

export default function BasicExamplesLayout({
  children,
}: {
  children: JSX.Children
}) {
  return (
    <div className="flex flex-col">
      <nav className="flex gap-2">
        <Link to="/basic/1">Example One</Link>
        <Link to="/basic/2">Example Two</Link>
        <Link to="/basic/3">Example Three</Link>
      </nav>
      {children}
    </div>
  )
}
