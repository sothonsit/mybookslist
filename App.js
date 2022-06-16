import React, { useState } from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuid from 'uuid-random';

const App = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'HTML' },
    { id: uuid(), text: 'CSS' },
    { id: uuid(), text: 'JS' },
    { id: uuid(), text: 'PHP' }
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  return (
    <View style={ styles.container }>
      <Header />
      <AddItem />
      <FlatList
        data={items}
        renderItem={
          ({item}) => (<ListItem item={item} deleteItem={ deleteItem } />)
        } />
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