import Auth from "./screens/Auth";
import SignUp from "./screens/Signup";
import Home from "./screens/Home";
import Chat from "./screens/fragment_home/Chat";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="auth" component={Auth}/>
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
