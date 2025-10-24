import gsap from "gsap"
import { useGSAP } from "kiru-gsap"

export default function ExampleTwo() {
  const { contextSafe } = useGSAP()

  const rotate = contextSafe<(e: MouseEvent) => void>(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: "+=360" })
  })

  return (
    <button className="box gradient-blue cursor-pointer" onclick={rotate}>
      Click Me
    </button>
  )
}
