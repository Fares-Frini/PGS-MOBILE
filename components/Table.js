import React from 'react'; 
import { StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper'; 
  
const Table = ({data}) => { 
  return ( 
    <DataTable style={styles.container}> 
      <DataTable.Header style={styles.tableHeader}> 
        <DataTable.Title>ID</DataTable.Title> 
        <DataTable.Title>Tank</DataTable.Title> 
        <DataTable.Title>Supplier</DataTable.Title> 
        <DataTable.Title>Product</DataTable.Title> 
        <DataTable.Title>Quantity</DataTable.Title> 
        <DataTable.Title>Order Date</DataTable.Title> 
      </DataTable.Header> 
      {/* {data.map((item, index) => (
        <View key={index} style={styles.row}>
        <DataTable.Row> 
        <DataTable.Cell>{it em.id}</DataTable.Cell> 
        <DataTable.Cell>{item.tank}</DataTable.Cell> 
        <DataTable.Cell>{item.supplier}</DataTable.Cell> 
        <DataTable.Cell>{item.product}</DataTable.Cell> 
        <DataTable.Cell>{item.quantity}</DataTable.Cell> 
        <DataTable.Cell>{item.orderdate}</DataTable.Cell> 
      </DataTable.Row>
        </View>
        
      ))} */}
    </DataTable> 
  ); 
}; 
  
export default Table; 
  
const styles = StyleSheet.create({ 
  container: { 
    padding: 15, 
  }, 
  tableHeader: { 
    backgroundColor: '#DCDCDC', 
  }, 
});