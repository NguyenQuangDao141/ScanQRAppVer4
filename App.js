import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QrCodeCamera from "./src/QrCodeCamera";
import Home from "./src/Home";
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={stylesNavigation}
        tabBarOptions={{
          activeTintColor: '#2BDA8E',
          inactiveTintColor: 'gray',}}
        >
        <Tab.Screen name="Home" component={Home} options={{title:'Trang chủ'}} />
        <Tab.Screen name="Scan" component={QrCodeCamera} options={{title:'ScanQR'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const stylesNavigation = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name == "Home") {
      iconName = focused
        ? 'shield-home'
        : 'shield-home-outline';
    } else if (route.name == "Scan") {
      iconName = focused ? 'qrcode-scan' : 'qrcode-scan';
    }
    return <MCIcons name={iconName} size={size} color={color} />;
  }
})