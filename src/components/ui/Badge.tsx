import cn from 'clsx'

interface IProps {
    value: number
    maxValue: number
    color: 'blue' | 'red'
}
export function Badge({value, maxValue, color} : IProps){
         
    return (
        <div className={cn(
            "bg-gradient-to-t  px-4 rounded-lg shadow-lg w-max mt-1",{
            'from-sky-800 to-sky-400': color === 'blue',
            'from-red-800 to-red-500': color === 'red'       
                        })}>
         {value}/{maxValue}
        </div>
    )
}