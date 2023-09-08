import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import appColors from "../constant/colors";

export default function Loader() {
  return (
        <Modal
          visible={true}
          animationType="fade"
          transparent={true}
        >
          <View style={style.modalScreen}>
    
            <ActivityIndicator size={"large"} color={appColors.blue} />
    
          </View>
        </Modal>
    
  )
}
const style =StyleSheet.create({
    modalScreen: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})