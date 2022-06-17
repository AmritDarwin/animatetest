import { StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const DATA = [
  {
    title: 'Lorem Ipsum',
  },
  {
    title: 'Lorem Ipsum',
  },
  {

    title: 'Lorem Ipsum',
  },
  {

    title: 'Lorem Ipsum',
  },
  {

    title: 'Lorem Ipsum',
  },
  {

    title: 'Lorem Ipsum',
  },
  {

    title: 'Lorem Ipsum',
  },
  {

    title: 'Lorem Ipsum',
  },
  {

    title: 'Lorem Ipsum',
  },
  {

    title: 'Lorem Ipsum',
  },

];

const App = () => {

  const loopCount = windowWidth / (windowWidth * 6 / 100);
  const list = [...Array(Math.round(loopCount) - 1)].map(() => (
    <>
      <View style={styles.mainLeft}>
        <View style={styles.innerLeft} />
      </View>
      <View style={styles.mainRight}>
        <View style={styles.innerRight} />
      </View>
    </>
  ));

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.voucherView}>
        <Text style={styles.voucherText}>Welcome</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={true}
          data={DATA}
          renderItem={({ item }) => (
            <View style={{
              flexDirection: 'row',
              paddingVertical: windowWidth * 5 / 100
            }}>
              <View style={styles.itemStart} >
                <View style={styles.itemStartInner} />
              </View>
              <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>

              </View>
              <View style={styles.itemEnd} >
                <View style={styles.itemEndInner} />
              </View>
            </View>
          )}
        />
        <View style={{ position: 'absolute', bottom: 0 }}>
          <View style={{ flexDirection: 'row' }}>
            {list}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  voucherView: {
    backgroundColor: '#0096ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: windowWidth * 4 / 100,
    position: 'relative'
  },
  voucherText: {
    color: 'white',
    fontSize: 16
  },
  mainLeft: {
    width: Math.round(windowWidth * 3 / 100),
    height: Math.round(windowWidth * 4 / 100),
    backgroundColor: '#0096ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerLeft: {
    backgroundColor: 'white',
    marginTop: Math.round(windowWidth * 2 / 100),
    marginStart: '40%',
    height: windowWidth * 3 / 100,
    width: '70%',
    alignSelf: 'center',
    borderTopLeftRadius: 20
  },
  mainRight: {
    width: Math.round(windowWidth * 3 / 100),
    height: Math.round(windowWidth * 4 / 100),
    backgroundColor: '#0096ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerRight: {
    backgroundColor: 'white',
    marginTop: Math.round(windowWidth * 2 / 100),
    marginEnd: '40%',
    height: windowWidth * 3 / 100,
    width: '70%',
    alignSelf: 'center',
    borderTopRightRadius: 20
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: windowWidth * 10 / 100,
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 5 / 100,
  },
  itemStart: {
    backgroundColor: '#f9c2ff',
    height: windowWidth * 10 / 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: windowHeight * 5 / 100,
    justifyContent: 'center'
  },
  itemStartInner: {
    marginRight: windowWidth * 3 / 100,
    backgroundColor: '#0096ff',
    height: windowWidth * 3 / 100,
    width: windowWidth * 2 / 100,
    borderTopEndRadius: windowWidth * 1 / 100,
    borderBottomEndRadius: windowWidth * 1 / 100,
  },
  itemEnd: {
    backgroundColor: '#f9c2ff',
    height: windowWidth * 10 / 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: windowHeight * 5 / 100,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemEndInner: {
    marginLeft: windowWidth * 3 / 100,
    backgroundColor: '#0096ff',
    height: windowWidth * 3 / 100,
    width: windowWidth * 2 / 100,
    borderTopStartRadius: windowWidth * 1 / 100,
    borderBottomStartRadius: windowWidth * 1 / 100,
  }
})