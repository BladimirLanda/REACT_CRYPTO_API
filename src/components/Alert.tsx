//COMPONENT ALERT
import { ReactNode } from "react"

type AlertProps = {
    children : ReactNode
}

function Alert( {children} : AlertProps ) {
  return (
    <div className="alert">
        {children}
    </div>
  )
}

export default Alert