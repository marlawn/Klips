import { Tabs } from 'expo-router';
import { Octicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs  
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth:0
        }
      }}>
      <Tabs.Screen name="(home)" options={{ title: "Home", tabBarShowLabel: false, tabBarIcon: (tabInfo) => {return (<Octicons name="home" size={30} color="gray"/>);} }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" , tabBarShowLabel: false, tabBarIcon: (tabInfo) => {return (<Octicons name="person" size={30} color="gray"/>);}}}/>
    </Tabs>
  );
}
