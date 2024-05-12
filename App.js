import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./screens/login";
import Signup from "./screens/Signup";
import Navigation from "./screens/navigation";
import Home from './screens/Home';
import Contact from './screens/Home/Contact';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Navigation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}