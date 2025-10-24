import { useRef } from "kiru"
import gsap from "gsap"
import { useGSAP } from "kiru-gsap"

export default function ExampleOne() {
  const container = useRef<HTMLDivElement>(null)
  const circle = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", { rotation: "+=360", duration: 3 })

      // or refs...
      gsap.to(circle.current, { rotation: "-=360", duration: 3 })
    },
    { scope: container }
  ) // <-- scope for selector text (optional)

  return (
    <div className="flex gap-2">
      <div ref={container} className="flex gap-2">
        <div className="box gradient-blue">selector</div>
        <div className="circle gradient-green" ref={circle}>
          Ref
        </div>
      </div>
      <div className="box gradient-blue">selector</div>
    </div>
  )
}
