import {DefaultTheme} from '@react-navigation/native'
import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import {
  View,
  Text,
  StatusBar,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native'

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

      <View style={{flexGrow: 1, width: '100%', padding: 20}}>
        <Text
          style={{
            color: 'black',
            fontSize: 40,
            letterSpacing: -2,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          DScanner
        </Text>
        <Text
          style={{
            lineHeight: 23,
            color: 'black',
            fontSize: 17,
            fontWeight: '500',
            marginTop: 12,
          }}>
          Welcome to DScanner App by Project D and F2!
        </Text>
        <AnimatedLottieView
          source={require('./assets/cube.json')}
          autoPlay
          loop
          style={{marginTop: 40}}
        />
      </View>

      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#86B4A9',
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
              onPress={() => navigation.navigate('AR')}
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
  )
}