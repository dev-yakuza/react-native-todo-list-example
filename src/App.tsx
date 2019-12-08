import React from 'react';
import {TodoContextProvider} from '~/Context/Todo';

import Navigator from './Screen/Navigator';

const App = () => {
  return (
    <TodoContextProvider>
      <Navigator />
    </TodoContextProvider>
  );
};

export default App;
