import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen 
        name = "(tabs)" 
        options={{ 
          title: "KLIP", 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: props => (
            <View style={{ flex: 1, flexDirection: "row"}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', padding: 10}}> {props.children} </Text>
            </View>
          )
        }} 
      />
    </Stack>
  );
}
