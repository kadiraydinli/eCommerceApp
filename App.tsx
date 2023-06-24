import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigator from '@/navigators/RootNavigator';
import { persistor, store } from '@/store/store';
import BasketAnimationProvider from '@/providers/BasketAnimationProvider';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BasketAnimationProvider>
          <RootNavigator />
        </BasketAnimationProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
