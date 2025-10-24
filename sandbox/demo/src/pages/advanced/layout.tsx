import { Link } from "kiru/router"

export default function AdvancedLayout({
  children,
}: {
  children: JSX.Children
}) {
  return (
    <div className="flex flex-col">
      <nav className="flex gap-2">
        <Link to="/advanced/scroll-smoother">ScrollSmoother</Link>
        <Link to="/advanced/timeline-example">Timelines</Link>
      </nav>
      {children}
    </div>
  )
}
