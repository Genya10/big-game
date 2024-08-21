import type { IGameStore } from "../../game.types"
import { playRandomCard } from "./play-random-card"

export const randomOpponentPlay =(state: IGameStore)=> {
    const opponent = state.opponent

    let mana = opponent.mana
    while(mana > 0){
        const newState = playRandomCard(state, mana)
        mana = newState.opponent?.mana
        state = {...state, ...newState}
    }
}