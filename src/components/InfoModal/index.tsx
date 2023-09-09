import { View, Modal, Text, TouchableOpacity } from "react-native";
import ActionBtn from "../ActionBtn";

interface OwnProps {
    isVisible: boolean
    closeModal(): void
}

type Props = OwnProps

export default function InfoModal(props: Props) {
    return (
        <Modal
            animationType="fade"
            visible={props.isVisible}
            onRequestClose={() => {
            }}
            onDismiss={() => {
                props.closeModal()
            }}
        >   
            <View className="items-center justify-center flex-1">
                <View className="border-pink-700 border-2 items-center justify-center">
                    <Text>Info</Text>
                    <ActionBtn text={"OK"}
                        color=""
                        handlePress={() => {
                            props.closeModal()
                        }} 
                    />
                </View>
 
            </View>
        </Modal>
    );
}


{/* <Modal
animationType="slide"
transparent={true}
visible={modalVisible}
onRequestClose={() => {
  Alert.alert('Modal has been closed.');
  setModalVisible(!modalVisible);
}}>
<View style={styles.centeredView}>
  <View style={styles.modalView}>
    <Text style={styles.modalText}>Hello World!</Text>
    <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={() => setModalVisible(!modalVisible)}>
      <Text style={styles.textStyle}>Hide Modal</Text>
    </Pressable>
  </View>
</View>
</Modal> */}