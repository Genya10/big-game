import { Button } from "../../components/ui/button/Button"
import { useGameStore } from "../../store/game/game.store"
import { Heading } from "../../components/ui/heading/Heading"
import { useTransition } from "react"
import { Loader } from "../../components/ui/loader/Loader"

export function StartedScreen() {
  const [isPending, startTransition] = useTransition();
  const { startGame } = useGameStore();

  const onClick = () => {
   startTransition(()=>{
    startGame()
   })
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Heading>Max Stone</Heading>
      <br/>
      <Button variant="primary" isCircle onClick={onClick}>
        {isPending ? <Loader/> : 'Start game'}
      </Button>
    </div>
  );
}
