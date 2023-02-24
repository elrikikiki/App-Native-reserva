import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, View} from 'react-native';
/* import Constants from 'expo-constants'; */
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Navigation from './src/navigation/Navigation.jsx';
export default function App() {
  
  return (
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
    
    
    /* <NativeBaseProvider >
      <SafeAreaView>
    <NativeRouter>
      <Routes>
        <Route path='/' element={<Loguin main={<Main/>}/>}>
        </Route>
        <Route path='/main' element={<Main/>}/>
        <Route path='/carrusel1' element={<Carrusel1 />}/>
        <Route path='/categoria/:categoryName' element={<ItemListContainer />}/>
        <Route path='/detail' element={<ItemDetailContainer />}/>
        </Routes>
      <StatusBar style="auto" />
    </NativeRouter>
    </SafeAreaView>
    </NativeBaseProvider> */
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   /*  marginTop:Constants.statusBarHeight */
  },
});
