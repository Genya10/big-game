import { Pause, Play } from 'lucide-react'
import { useRef, useState, useEffect} from 'react'
import { Button } from '../../../../components/ui/button/Button'

export function AudioPlayer(){
   const audioRef = useRef<HTMLAudioElement>(null)
   const [isPlaying, setIsPlaying] = useState(false)

   useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; 
    }
  }, []);

   const handlePlayPause = () => {
     if(!audioRef.current) return null
     if(isPlaying){
        audioRef.current.pause()
     } else {
        audioRef.current.play()
     }
     setIsPlaying(!isPlaying)
   }

    return(
        <Button variant='gray' isCircle 
                onClick={handlePlayPause}
                className='absolute right-8 bottom-28 z-20 max-lg:right-4 max-lg:bottom-32'>
         <audio ref={audioRef} loop>
           <source src='/assets/music/main.mp3' type='audio/mp3'/>
           Your browser does not support the audio element
         </audio>
         {isPlaying ? <Pause/> : <Play/>}
        </Button>
    )
}