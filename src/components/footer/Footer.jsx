import { View, StyleSheet, Text } from "react-native"
import { Link } from "react-router-native";
import Constants  from "expo-constants";
export default function Footer() {
    return(
        <View style={styles.container}>
            <Link to='/loguin'>
            <Text>
                restaurant
            </Text>
            </Link>
            <Text>
                
            </Text>
            <Text>
                
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    paddingBottom:30,
    paddingTop:20,
  },
});