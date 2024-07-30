import type { ICard } from "../../types/card.types"

export type TPlayer = 'player' | 'opponent'

export interface IGameCard extends ICard {
    id: number
    isOnBoard: boolean
    isCanAttack: boolean
}

export interface IHero {
    deck:IGameCard[]
    health:number
    mana: number
}

export interface IGameMethodsStore {
    startGame:() => void
    endTurn:() => void
    playCard:(cardId: number) => void
    returnCard:(cardId: number) => void
    attackCard:(attackerId: number, targetId: number) => void
    attackHero:(attackerId: number) => void
    resetGameOver: () => void
}

export interface IGameStore extends IGameMethodsStore{
     player:IHero
    opponent:IHero
    isGameStarted:boolean,
    isGameOver: boolean
    currentTurn: TPlayer
    turn: number
}