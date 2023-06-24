import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

export type BasketAnimationContextType = {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
};

export const BasketAnimationContext =
  React.createContext<BasketAnimationContextType | null>(null);

const BasketAnimationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <BasketAnimationContext.Provider value={{ isPlaying, setIsPlaying }}>
      <View
        style={[styles.container, { display: isPlaying ? 'flex' : 'none' }]}>
        <Lottie
          source={require('../../assets/animations/add-basket.json')}
          autoPlay
          loop={false}
          onAnimationFinish={(isCancelled: boolean) => {
            if (!isCancelled) {
              setIsPlaying(false);
            }
          }}
        />
      </View>
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
