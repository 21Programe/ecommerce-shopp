import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';
import Routes from './src/routes';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
export default function App() {
let [fontsLoading] = useFonts({
Montserrat_400Regular,
Montserrat_500Medium,
Montserrat_700Bold,
});




  return (
    <>
      <StatusBar style='light' backgroundColor='#000' translucent={false}/>
     <Routes/>
    </>
  );
}


