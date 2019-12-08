import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Loading from './Loading';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const MainNavi = createStackNavigator({
  TodoList,
  AddTodo,
});

const LoadingNavi = createSwitchNavigator(
  {
    Loading,
    MainNavi,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default createAppContainer(LoadingNavi);
