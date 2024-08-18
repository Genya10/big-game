import {create} from 'zustand'

interface IDamageStore {
    damages:{
        [key: string]:number
        player: number  //не обязательное поле
        opponent: number  //не обязательное поле
    }
    addDamage:(cardId: string, damage: number) => void
}

export const useDamageStore = create<IDamageStore>(set => ({
 damages:{
    player: 0,
    opponent: 0
 },
 addDamage:(cardId, damage)=>{
    set(state => ({
        damages:{
            ...state.damages,
            [cardId]: damage,
        },
    }))
    setTimeout(()=>{
        set(state => ({
            damages:{
                ...state.damages,
                [cardId]: 0,
            },
        }))
    },1000)
 },
}))