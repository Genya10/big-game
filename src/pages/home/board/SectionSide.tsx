import type {PropsWithChildren} from 'react'
import cn from 'clsx'

interface IProps extends PropsWithChildren{
    isPlayer : boolean
}

export function SectionSide({isPlayer, children}: IProps){
    return (
        <section className={cn('absolute w-full h-[44vh] left-0',{
            'pt-28 top-0 max-md:!pt-48 flex flex-col justify-end': !isPlayer,
            'pb-12 bottom-0': isPlayer
        })}>
         {children}
        </section>
    )
}