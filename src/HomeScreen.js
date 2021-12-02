import {DefaultTheme} from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  Image,
  SafeAreaView,
  Alert,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function goToUnity(link) {
  Linking.openURL(link).catch(() => {
    Alert.alert('Error', 'Harap install aplikasi AR untuk DScanner', [
      {
        text: 'OK',
      },
    ]);
  });
}

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ScrollView style={{width: '100%'}}>
        <View
          style={{
            padding: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 40,
              letterSpacing: -1,
              marginTop: 30,
              fontFamily: 'Inter-ExtraBold',
            }}>
            DScanner
          </Text>
          <Text
            style={{
              lineHeight: 23,
              color: 'black',
              fontSize: 18,
              marginTop: 12,
              fontFamily: 'Inter-Medium',
            }}>
            Welcome to DScanner App by Project D and F2!
          </Text>
          <AnimatedLottieView
            source={require('./assets/cube.json')}
            autoPlay
            loop
            style={{alignSelf: 'center', width: 390}}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#86B4A9',
          position: 'absolute',
          bottom: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
        }}>
        <View style={{marginTop: -30, flexDirection: 'row'}}>
          <View
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              borderWidth: 5,
              borderColor: DefaultTheme.colors.background,
              marginRight: 6,
            }}>
            <Pressable
              onPress={() => goToUnity('unitydl://dscanner')}
              style={{width: 60, height: 60, backgroundColor: '#DC6666'}}
              android_ripple={{color: 'white', borderless: false}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  justifyContent: 'center',
                  flex: 1,
                  alignSelf: 'center',
                }}
                source={require('./assets/images/mobile.png')}
              />
            </Pressable>
          </View>

          <View
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              borderWidth: 5,
              borderColor: DefaultTheme.colors.background,
              marginLeft: 6,
            }}>
            <Pressable
              onPress={() => navigation.navigate('QR')}
              style={{width: 60, height: 60, backgroundColor: '#DC6666'}}
              android_ripple={{color: 'white', borderless: false}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  justifyContent: 'center',
                  flex: 1,
                  alignSelf: 'center',
                }}
                source={require('./assets/images/qr-code.png')}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
