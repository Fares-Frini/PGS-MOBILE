import { View, Text, Image, Pressable, TextInput, TouchableOpacity , Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../../components/Button';
import Dropdown from 'react-native-input-select';
import axios from 'axios';
import Contact from './Contact';
export default function Form({ navigation }) {
  const [supplier, setSupplier] = React.useState();
  const [value, setValue] = useState('');
  const [tankCode, setTankCodeValue] = useState("");
  const handlePostRequest = async () => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/post', {
        tank : inputValue,
        supplier :supplier,
        quantity_liters : value
      });
      console.log('Response from server:', response.data);
      Alert.alert('Success', 'POST request successful!');
    } catch (error) {
      console.error('Error making POST request:', error);
      Alert.alert('Error', 'Failed to make POST request');
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.black
          }}>
            Submit Your Order Now ! 🛢️
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>Submit Your Order</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Tank Code</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Enter The Tank Code'
              placeholderTextColor={COLORS.black}
              keyboardType='email-address'
              style={{
                width: "100%"
              }}
          onChangeText={(val)=> setTankCodeValue(val)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 0 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Supplier</Text>

          <Dropdown
            placeholder="Select an option..."
            options={[
              { label: 'OLA', value: 'ola' },
              { label: 'AGIL', value: 'Agil' },
              { label: 'StarOil', value: 'SO' },
            ]}
            selectedValue={supplier}
            onValueChange={(value) => setSupplier(value)}
            onChangeText={(val)=> setSupplierValue(val)}
            primaryColor={'green'}
          />
        </View>

        <View>

        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}
          >Quantity</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Choose the ordered Quantity'
              placeholderTextColor={COLORS.black}
              style={{
                width: "100%"
              }} onChangeText={text => setValue(text)}
              value={value}
              keyboardType="numeric"

            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 12
              }}
            >
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Submit"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={() =>
            Alert.alert(
              `You have selected\n `,`TankCode: ${tankCode}\nSupplier: ${supplier}\nQuantity: ${value}`
            )
          }/>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
        </View>
      </View>
    </SafeAreaView>
  )
}