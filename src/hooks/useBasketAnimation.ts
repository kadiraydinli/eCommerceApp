import { useContext } from "react";

import { BasketAnimationContext, BasketAnimationContextType } from "@/providers/BasketAnimationProvider";

const useBasketAnimation = () => {
    const { isPlaying, setIsPlaying } = useContext(BasketAnimationContext) as BasketAnimationContextType;


    const onPlay = () => {
        setIsPlaying(true);
    }

    const onFinish = () => {
        setIsPlaying(false);
    }

    return {
        isPlaying,
        onPlay,
        onFinish,
    }
};

export default useBasketAnimation;