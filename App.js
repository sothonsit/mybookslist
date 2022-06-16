import React, { useState } from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'uuid-random';

const App = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'HTML' },
    { id: uuid(), text: 'CSS' },
    { id: uuid(), text: 'JS' },
    { id: uuid(), text: 'PHP' }
  ])

  return (
    <View style={ styles.container }>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item}/> } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;