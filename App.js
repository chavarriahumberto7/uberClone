import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {store} from './store'
import {Provider} from 'react-redux'
import HomeScreen from './src/screens/HomeScreen';



export default function App() {
  return (
    <Provider store={store}>
      
      <HomeScreen/>

    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
