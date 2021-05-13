
import React  from 'react'
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native'

class Splash extends React.Component{
    componentDidMount = () => {
        // Remember the timer handle
        this.timerHandle = setTimeout(() => {
          this.props.navigation.replace('Home');
          this.timerHandle = 0;
        }, 4000);
      };
      componentWillUnmount = () => {
        // Is our timer running?
        if (this.timerHandle) {
          // Yes, clear it
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
        }
      };
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textIcon}>BMI<Text style={styles.textIcon2}>Analytics</Text></Text>
                <ActivityIndicator size='large' color='white' style={styles.loading}/>
            </View>
        )
    }
}
export default Splash


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:"center"
    },
    textIcon:{
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },
    textIcon2:{
        color:'white'
    },
    loading:{
        marginTop:10
    }
})