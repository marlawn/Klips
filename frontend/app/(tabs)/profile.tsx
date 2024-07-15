import { Image, Text, StyleSheet, ScrollView } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function Settings() {
    return (
      <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }}
      headerImage={
        <Image 
        source={require("../../assets/images/peakpx.jpg")}
        style = {{ width: '100%', height: '100%' }}
        />
      }
      >
        <ScrollView style = {{backgroundColor: "white"}}>
          <Text style = {styles.elements}>Profile stuff</Text>
        </ScrollView>
      </ParallaxScrollView>
    );
}

//style = {[styles.elements, {flex: 1, backgroundColor: "skyblue"}]}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  elements: {
    padding: 25,
    width: '100%'
  }
});