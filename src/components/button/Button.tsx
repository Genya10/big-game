import type{ HTMLAttributes, ReactNode } from 'react'
import cn from 'clsx'
import cl from './Button.module.scss'

interface Props extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export function Button({children, ...rest}: Props){
    return (
        <button className = {
            cn(cl.button, rest.className)
        }
        {...rest}>{children}</button>
    )
}

