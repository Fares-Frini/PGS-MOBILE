import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import axios from 'axios';
export default function Contact() {
  const [data,getData]= useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data');
      getData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
      <Table data={data}/>
    </View>
  )
}