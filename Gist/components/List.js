import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList} from 'react-native';

export default function List({active, expanded, setActive, setExpanded}) {
    const [title, setTitle] = useState("New Gist");
    const [items, setItems] = useState([{title: "val1"}]);
    const close = () => {
        setActive(false);
        setExpanded(false);
    }

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
                {/* <FlatList  */}
                {/* /> */}

                <TextInput 
                    placeholder="New item"
                />
            </View>
        </View>
    );
}