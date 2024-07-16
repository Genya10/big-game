import type { PropsWithChildren } from "react"

export function Heading({children}:PropsWithChildren){
    return (
        <h1 className="text-7xl font-bold text-white [text-shadow:_2px_4px_0_rgba(0_0_0_/_60%)]"
          >{children}
        </h1>
    )
}