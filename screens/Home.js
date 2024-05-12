import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import {  Image } from "react-native";
 import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "../assets/user.jpg";
import Backups from "../screens/Home/Backups";
import Categories from "../screens/Home/Categories";
import Contact from "../screens/Home/Contact";
import Form from './Home/Form';
import Page from './Home/Page';
import Timer from "../screens/Home/Timer";
import Settings from "../screens/Home/Settings";

const Drawer = createDrawerNavigator();
export default function Navigation() {
  return (
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    source={User}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Abdelwahed Souid</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  >Product Manager</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#01aeab",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Page}
        />
        <Drawer.Screen
          name="Submit Order"
          options={{
            drawerLabel: "submit",
            title: "submit",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Form}
        />
        <Drawer.Screen
          name="Contact"
          options={{
            drawerLabel: "Orders",
            title: "Contact",
            drawerIcon: () => (
                <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={Contact}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={Settings}
        />

        <Drawer.Screen
          name="Backups"
          options={{
            drawerLabel: "Backups",
            title: "Backups",
            drawerIcon: () => (
              <MaterialIcons name="backup" size={20} color="#808080" />
            )
          }}
          component={Backups}
        />

        
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
