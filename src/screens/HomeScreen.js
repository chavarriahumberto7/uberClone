import {  StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='p-5'>
        <Image
        source={{
          uri:'https://links.papareact.com/gzs'
        }}
        className='w-32 h-32'
        style={{
          resizeMode:'contain'
        }}

        
        />
        
          

     
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:'blue'
    }
})