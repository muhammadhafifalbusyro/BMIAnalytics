
import React  from 'react'
import {View,Text,StyleSheet,TextInput,TouchableNativeFeedback,ScrollView,Image,ToastAndroid} from 'react-native'

class Home extends React.Component{
    state={
        weight:'',
        height:'',
        resultBMI:'',
        BMIIndex:'',
        load:false
    }
    result=(height,weight)=>{
        if(this.state.weight!=''&&this.state.height!=''){
            this.setState({load:true})
        const heightInt= parseFloat(height)
        const weightInt = parseFloat(weight)
        const result= weightInt/(heightInt*heightInt)
        this.setState({BMIIndex:result})
        if(result<18.5){
            this.setState({resultBMI:'UNDERWEIGHT'})
        }
        else if(result>=18.5 && result<=24.9){
            this.setState({resultBMI:'NORMAL'})
        }
        else if(result>=25 && result<=29.9){
            this.setState({resultBMI:'OVERWEIGHT'})
        }
        
        else if(result>=30 && result<=34.9){
            this.setState({resultBMI:'OBESE'})
        }
        else if(result>=35){
            this.setState({resultBMI:'EXTREME OBESE'})
        }
        }
        else{
            ToastAndroid.show(
                'Field must be inputed',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
        }
    }
    imageResult=()=>{
        if(this.state.resultBMI=='UNDERWEIGHT'){
            return(
                <Image source={require('../../assets/images/2w.jpg')} style={styles.image}/>
            )
        }
        else if(this.state.resultBMI=='NORMAL'){
            return(
                <Image source={require('../../assets/images/3w.jpg')} style={styles.image}/>
            )
        }
        else if(this.state.resultBMI=='OVERWEIGHT'){
            return(
                <Image source={require('../../assets/images/1w.jpg')} style={styles.image}/>
            )
        }
        else if(this.state.resultBMI=='OBESE'){
            return(
                <Image source={require('../../assets/images/5w.jpg')} style={styles.image}/>
            )
        }
        else if(this.state.resultBMI=='EXTREME OBESE'){
            return(
                <Image source={require('../../assets/images/4w.jpg')} style={styles.image}/>
            )
        }
    }
    render(){
        const {height,weight}=this.state
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>BMIAnalytics</Text>
                </View>
                <ScrollView style={styles.scroll}>
                <View style={styles.boxInput}>
                    <TextInput placeholder='Input your height in meters' style={styles.input} placeholderTextColor='grey' keyboardType='decimal-pad'onChangeText={teks=>this.setState({height:teks})}/>
                </View>
                <View style={styles.boxInput}>
                    <TextInput placeholder='Input your weight in kilograms' style={styles.input} placeholderTextColor='grey' keyboardType='decimal-pad' onChangeText={teks=>this.setState({weight:teks})}/>
                </View>
                
                <View style={styles.boxInput}>
                    <TouchableNativeFeedback onPress={()=>this.result(height,weight)}>
                    <View placeholder='Input your height in meters' style={styles.button} placeholderTextColor='grey' keyboardType='decimal-pad'>
                        <Text style={styles.buttonText}>Submit</Text>
                    </View>
                    </TouchableNativeFeedback>
                </View>
                {
                    this.state.load?
                    (<Text style={styles.resultText}>BMI INDEX : {this.state.BMIIndex}</Text>
                    ):
                    (
                        false
                    )
                }
                {
                    this.state.load?
                    (<Text style={{...styles.resultText,paddingTop:5}}>BMI RESULT : {this.state.resultBMI}</Text>
                    ):
                    (
                        false
                    )
                }
                {
                    this.state.load?
                    (
                        <View style={styles.boxImage}>
                           {this.imageResult()}
                        </View>
                    ):
                    (
                        false
                    )
                }
                </ScrollView>
            </View>
        )
    }
}
export default Home


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        height:50,
        width:'100%',
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        elevation:5
    },
    scroll:{
        flex:1
    },
    textHeader:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    boxInput:{
        width:'100%',
        paddingHorizontal:10,
        paddingTop:20
    },
    input:{
        height:50,
        width:'100%',
        borderRadius:5,
        color:'#444444',
        borderWidth:1,
        borderColor:'grey'
        
    },
    button:{
            height:50,
            width:'100%',
            borderRadius:5,
            backgroundColor:'green',
            justifyContent:'center',
            alignItems:'center',
            elevation:5
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        
    },
    resultText:{
        paddingTop: 20,
        paddingHorizontal:10,
        fontSize:16,
        fontWeight:'bold',
        color:'#444444'
    },
    boxImage:{
        width:'100%',
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        resizeMode:'contain'
    }
})