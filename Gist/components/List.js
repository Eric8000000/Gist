import { useState } from "react";
import { StyleSheetList, Text, View, SafeAreaView, TextInput, Button, FlatList} from 'react-native';
import {useFonts} from 'expo-font';

export default function List({active, expanded, setActive, setExpanded}) {
    const [title, setTitle] = useState("New Gist");
    const [items, setItems] = useState([{title: "val1"}]);
    const close = () => {
        setActive(false);
        setExpanded(false);
    }
    const [data, setData] = useState([
        {name: 'Name', price: 'Price', quantity: 'Quantity',}
      ]);

      const addItem = () => {
        const newItem = {
          quantity: (data.length + 1).toString(),
          name: `Item ${data.length + 1}`,
          price: 'Price'
        };
        setData([...data, newItem]);
      };

    render = ({ item }) => (
        <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
        </View>
    );

    if (!expanded) {
        return (
            // give view set dimensions, style and center text
            <View>
                <Text>{title}</Text>
            </View>
        )
    }

    return (
        <View style={{display: (active ? "block" : "none")}}>
            <View>
                <TextInput
                    onChangeText={setTitle}
                    value={title}
                    placeholder="New Gist"
                />
                <Button
                    onPress={close}
                    title="X"
                    color="#841584"
                    accessibilityLabel="Delete Item"
                />
            </View>
            <View>
                <View>
                  <Button title="Add Item" onPress={addItem} />
                  <FlatList
                    data={data}
                    keyExtractor={(item, index) => "key" + index}
                    renderItem={render}
                  />
                </View>

                <TextInput 
                    placeholder="New item"
                />
            </View>
        </View>
    );

    const styles = StyleSheet.create({
        container: {
            flex:
            marginTop:
        }
        item: {
            backgroundColor:
            padding:
            marginVertical
        }
    })
}