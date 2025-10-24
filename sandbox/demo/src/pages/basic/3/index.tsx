import { useRef } from "kiru"
import gsap from "gsap"
import { useGSAP } from "kiru-gsap"

export default function ExampleThree() {
  const containerRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useGSAP(
    (_, contextSafe) => {
      // ✅ safe, created during execution
      gsap.to(btnRef.current, { x: 100 })

      // ✅ safe, wrapped in contextSafe() function
      const onClickGood = contextSafe(() => {
        console.log("onClickGood")
        gsap.to(btnRef.current, { rotation: 180 })
      })

      btnRef.current?.addEventListener("click", onClickGood)

      // 👍 we remove the event listener in the cleanup function below.
      return () => {
        // <-- cleanup
        btnRef.current?.removeEventListener("click", onClickGood)
      }
    },
    { scope: containerRef }
  )
  return (
    <div className="flex gap-2">
      <div ref={containerRef}>
        <button ref={btnRef} className="box gradient-blue cursor-pointer">
          Click Me
        </button>
      </div>
      <button className="box gradient-blue cursor-pointer">Click Me</button>
    </div>
  )
}
