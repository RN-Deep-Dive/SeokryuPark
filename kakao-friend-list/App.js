import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import Profile from './src/Profile';
import { myProfile, friendProfiles } from './src/data'
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(`${Platform.OS} :`, statusBarHeight, bottomSpace) 

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView edges={['right', 'left']} style={styles.container}>
        <Header />

        <Margin height={10} />

        <Profile 
          name={myProfile.name}
          uri={myProfile.uri}
          intro={myProfile.introduction}
          />

        <Margin height={15} />

        <Division />

        <Margin height={9} />

        <FriendSection 
          friendProfileLen={friendProfiles.length}
          onPressArrow={() => {
            console.log("Clicked!")
          }}
          />

        <FriendList 
          data={friendProfiles}
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
    justifyContent: 'flex-start',
    paddingHorizontal: 7,
  },
});
