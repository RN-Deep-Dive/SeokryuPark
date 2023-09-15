import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import MyProfile from './src/MyProfile';
import { myProfile } from './src/data'
import Margin from './src/Margin';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(`${Platform.OS} :`, statusBarHeight, bottomSpace) 

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView edges={['right', 'left']} style={styles.container}>
        <Header />

        <Margin height={10} />

        <MyProfile 
          name={myProfile.name}
          uri={myProfile.uri}
          intro={myProfile.introduction}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
