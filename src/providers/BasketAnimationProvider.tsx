import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

export type BasketAnimationContextType = {
  isPlaying: boolean;
  setPlaying: (value: boolean) => void;
};

export const BasketAnimationContext =
  React.createContext<BasketAnimationContextType | null>(null);

const BasketAnimationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const animation = useRef<Lottie>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const setPlaying = (value: boolean) => {
    setIsPlaying(value);
  };

  useEffect(() => {
    if (isPlaying) {
      animation.current?.play();
    }
  }, [isPlaying, animation.current]);

  return (
    <BasketAnimationContext.Provider value={{ isPlaying, setPlaying }}>
      {isPlaying && (
        <View style={styles.container}>
          <Lottie
            ref={animation}
            source={require('../../assets/animations/add-basket.json')}
            autoPlay={false}
            loop={false}
            onAnimationFinish={(isCancelled: boolean) => {
              if (!isCancelled) {
                setPlaying(false);
                animation.current?.reset();
              }
            }}
          />
        </View>
      )}
      {children}
    </BasketAnimationContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    zIndex: 9999,
    position: 'absolute',
  },
});

export default BasketAnimationProvider;
