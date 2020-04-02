import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Root,Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input, Toast,} from 'native-base';
import { Platform } from 'react-native';

class Categories extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
         
        }
    }

    render() {

      const {navigate}=this.props.navigation;

      return (
        <View  style={{flex:1,backgroundColor:'#f5f6fb'}}>
    <ScrollView style={{ }}>

<Text style={{marginTop:30,fontSize:30,fontWeight:'bold',marginLeft:20}}>Category</Text>
<Text style={{marginTop:10,color:'#87848e',fontSize:16,marginLeft:20}}>Lorem Ipsum is a gooda Dat</Text>

<View style={{flexDirection:'row',flexWrap:'wrap',marginTop:20}}>

{/* HOME CATOGORY */}
<View style={{borderRadius:20,backgroundColor:'#FFFFFF',height:200,width:'40%',marginHorizontal:'5%',marginBottom:20,justifyContent:'center',flexDirection:'row'}}>
<View style={{justifyContent:'center'}}>
<TouchableOpacity onPress={()=>navigate('Post')}>
<Image source={require('../images/home.png')} style={{width:80,height:80}}/>
<Text style={{textAlign:'center',marginTop:20,fontWeight:'bold'}}>Home</Text>
</TouchableOpacity>
</View>
</View>

{/* HOME CATOGORY */}
<View style={{borderRadius:20,backgroundColor:'#FFFFFF',height:200,width:'40%',marginHorizontal:'5%',marginBottom:20,justifyContent:'center',flexDirection:'row'}}>
<View style={{justifyContent:'center'}}>
<TouchableOpacity onPress={()=>navigate('Post')}>
<Image source={require('../images/technical-support.png')} style={{width:80,height:80}}/>
<Text style={{textAlign:'center',marginTop:20,fontWeight:'bold'}}>Tech</Text>
</TouchableOpacity>
</View>
</View>

{/* HOME CATOGORY */}
<View style={{borderRadius:20,backgroundColor:'#FFFFFF',height:200,width:'40%',marginHorizontal:'5%',marginBottom:20,justifyContent:'center',flexDirection:'row'}}>
<View style={{justifyContent:'center'}}>
<TouchableOpacity onPress={()=>navigate('Post')}>
<Image source={require('../images/bracelet.png')} style={{width:80,height:80}}/>
<Text style={{textAlign:'center',marginTop:20,fontWeight:'bold'}}>Men Jewels</Text>
</TouchableOpacity>
</View>
</View>

{/* HOME CATOGORY */}
<View style={{borderRadius:20,backgroundColor:'#FFFFFF',height:200,width:'40%',marginHorizontal:'5%',marginBottom:20,justifyContent:'center',flexDirection:'row'}}>
<View style={{justifyContent:'center'}}>
<TouchableOpacity onPress={()=>navigate('Post')}>
<Image source={require('../images/necklace.png')} style={{width:80,height:80}}/>
<Text style={{textAlign:'center',marginTop:20,fontWeight:'bold'}}>Women Jewels</Text>
</TouchableOpacity>
</View>
</View>


{/* HOME CATOGORY */}
<View style={{borderRadius:20,backgroundColor:'#FFFFFF',height:200,width:'40%',marginHorizontal:'5%',marginBottom:20,justifyContent:'center',flexDirection:'row'}}>
<View style={{justifyContent:'center'}}>
  <TouchableOpacity onPress={()=>navigate('Post')}>
<Image source={require('../images/man.png')} style={{width:80,height:80}}/>
<Text style={{textAlign:'center',marginTop:20,fontWeight:'bold'}}>Men in lead</Text>
</TouchableOpacity>
</View>
</View>

{/* HOME CATOGORY */}
<View style={{borderRadius:20,backgroundColor:'#FFFFFF',height:200,width:'40%',marginHorizontal:'5%',marginBottom:20,justifyContent:'center',flexDirection:'row'}}>
<View style={{justifyContent:'center'}}>
  <TouchableOpacity onPress={()=>navigate('Post')}>
<Image source={require('../images/woman.png')} style={{width:80,height:80}}/>
<Text style={{textAlign:'center',marginTop:20,fontWeight:'bold'}}>Women in lead</Text>
</TouchableOpacity>
</View>
</View>



</View>
    </ScrollView>
</View>
);
}
}



            
export default Categories;