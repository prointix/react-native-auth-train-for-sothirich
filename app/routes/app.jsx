import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignOut from '../screens/SignOut';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/Color';
import ArticleDetail from '../screens/Home/ArticleDetail';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default AppRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="AppTab"
        component={AppTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ArticleDetail"
        component={ArticleDetail}
        options={{
          title: 'Detail',
          headerStyle: {
            backgroundColor: COLORS.primary,
            height: 70,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
};
//  navigation.setOptions({title: `${item.title}`});
const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'list-sharp' : 'list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00BC22',
        tabBarInactiveTintColor: COLORS.black,
        tabBarLabelStyle: {paddingBottom: 5},
        tabBarStyle: {backgroundColor: COLORS.primary, height: 60, padding: 10},
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Settings" component={SignOut} />
    </Tab.Navigator>
  );
};

// const HomeRoute = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//       }}>
//       <Stack.Screen
//         name="ArticleHome"
//         component={Home}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="ArticleDetail"
//         component={ArticleDetail}
//         options={{
//           headerStyle: {
//             backgroundColor: COLORS.primary,
//             height: 70,
//           },
//           headerTitleStyle: {
//             fontSize: 25,
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
