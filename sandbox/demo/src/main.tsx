import "./global.css"
import gsap from "gsap"
import { mount } from "kiru"
import { FileRouter } from "kiru/router"
import { useGSAP } from "kiru-gsap"

gsap.registerPlugin(useGSAP)

mount(
  <FileRouter
    config={{
      pages: import.meta.glob("/**/index.{tsx,jsx}"),
      layouts: import.meta.glob("/**/layout.{tsx,jsx}"),
    }}
  />,
  document.getElementById("app")!
)
