import { StyleSheet, TouchableOpacity, Text } from "react-native"
import React from "react"

export default function MyButton({onPress, children}) {
    return (
        <TouchableOpacity>
            <Text onPress={onPress} style={styles.btnStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({  
  btnStyle: {
    color: '#FFFFFF',
    backgroundColor: '#2A2AC0',
    paddingHorizontal: 90,
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 10,
    fontFamily: 'Lato',
    fontSize: 16
  },
})