import { View, Modal, Text, TouchableOpacity } from "react-native";
import ActionBtn from "../Button";

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
            <View className="f-1 justify-center items-center mt-22">
                <View className="m-20 bg-white rounded-lg p-35 items-center shadow-cyan-500 ring-offset-purple-800">
                    <Text>oi</Text>
                    <ActionBtn text={"OK"} 
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