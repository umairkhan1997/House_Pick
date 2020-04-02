import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Root,Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input, Toast,} from 'native-base';
import { Platform } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";


class Post extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image
          ],    
        }
    }

    render() {

      const {navigate}=this.props.navigation;
      return (
        <View  style={{flex:1,backgroundColor:'#f5f6fb'}}>
    <ScrollView style={{ }}>

<View>
    <TouchableOpacity onPress={()=>navigate('Post')} style={{position:'absolute',top:10,left:10,zIndex:2}}>
    <Image source={require('../images/back.png')} style={{width:30,height:20,}}/>
  </TouchableOpacity>

{/* SLIDER */}
    <SliderBox images={this.state.images}   sliderBoxHeight={400}/>
</View>

<Text style={{fontWeight:'bold',fontSize:30,marginLeft:'5%',marginVertical:20}}>Bruje Khalifa</Text>
<Text style={{marginLeft:'5%',width:'90%'}}>adsasd sdfjhsdkf ashdsahj skadhkashd skfhsdkfjh Kjhskfhdsk kjhsdkjhasd kfhkasdhf dskfhdkasfjh dsfhasdhf
  sladfldsjhf lsfjldsah dksfhsdkf adsasd sdfjhsdkf ashdsahj skadhkashd skfhsdkfjh Kjhskfhdsk kjhsdkjhasd kfhkasdhf dskfhdkasfjh dsfhasdhf
  sladfldsjhf lsfjldsah dksfhsdkf adsasd sdfjhsdkf ashdsahj skadhkashd skfhsdkfjh Kjhskfhdsk kjhsdkjhasd kfhkasdhf dskfhdkasfjh dsfhasdhf
  sladfldsjhf lsfjldsah dksfhsdkf adsasd sdfjhsdkf ashdsahj skadhkashd skfhsdkfjh Kjhskfhdsk kjhsdkjhasd kfhkasdhf dskfhdkasfjh dsfhasdhf
  sladfldsjhf lsfjldsah dksfhsdkfadsasd sdfjhsdkf ashdsahj skadhkashd skfhsdkfjh Kjhskfhdsk kjhsdkjhasd kfhkasdhf dskfhdkasfjh dsfhasdhf
  sladfldsjhf lsfjldsah dksfhsdkf
</Text>

    </ScrollView>
</View>
);
}
}



            
export default Post;