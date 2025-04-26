import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import FarmerHome from './pages/FarmerHome';
import CustomerHome from './pages/CustomerHome';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="FarmerHome" component={FarmerHome} />
        <Stack.Screen name="CustomerHome" component={CustomerHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
console.log('Navigation Container initialized.');
console.log('Stack Navigator initialized with initial route name: Login');
console.log('Stack Screens initialized: Login, FarmerHome, CustomerHome');