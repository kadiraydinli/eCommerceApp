import { useContext } from "react";

import { BasketAnimationContext, BasketAnimationContextType } from "@/providers/BasketAnimationProvider";

const useBasketAnimation = () => {
    const { isPlaying, setPlaying } = useContext(BasketAnimationContext) as BasketAnimationContextType;


    const onPlay = () => {
        setPlaying(true);
    }

    const onFinish = () => {
        setPlaying(false);
    }

    return {
        isPlaying,
        onPlay,
        onFinish,
    }
};

export default useBasketAnimation;