import React from 'react';
import {
  Text, View, StyleSheet, TouchableHighlight, SafeAreaView, Image, TextInput,
  ImageBackground, Dimensions, KeyboardAvoidingView, ScrollView, TouchableOpacity,
  FlatList
} from 'react-native';
import { Root, Icon, Drawer, Item, Header, Body, Card, Left, Right, Button, Picker, Input, Toast, } from 'native-base';
import { Platform } from 'react-native';
import firestore from '@react-native-firebase/firestore';

class Post extends React.Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let category = this.props.route.params.category;
    let posts = []
    firestore().collection('post').where('category', '==', category).get().then(async snapshot => {
      await snapshot.forEach((doc) => {
        posts.push(doc.data())
      })
      this.setState({ posts })
    })
    // console.log(snapshot)
  }
  render() {
    let categoryName = this.props.route.params.categoryName;
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#f5f6fb' }}>
        <ScrollView style={{}}>

          <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 20 }}>
            <TouchableOpacity onPress={() => navigate('Categories')}>
              <Image source={require('../images/back.png')} style={{ marginTop: 10, marginRight: 10, width: 30, height: 20 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{categoryName}</Text>
          </View>

          <View style={{ flex: 1, marginTop: 20 }}>

            <FlatList
              numColumns={2}
              style={{ flex: 1, }}
              data={this.state.posts}
              renderItem={({ item, index }) => {
                const { postImages, flagImage } = item;
                return (
                  <View key={index} style={{ width: '40%', marginHorizontal: '5%', marginBottom: 20, justifyContent: 'center', }}>
                    <TouchableOpacity onPress={() => navigate('PostDetail', { postData: item })}>
                      <View>
                        <Image source={{ uri: postImages[0] }} style={{ width: '100%', height: 120, borderRadius: 10 }} />
                        <Image source={{ uri: flagImage }} style={{ width: 20, height: 20, borderRadius: 2, position: 'absolute', bottom: 10, right: 10 }} />
                      </View>
                    </TouchableOpacity>
                <Text style={{ textAlign: 'center', width: '90%', marginLeft: '5%', marginTop: 10 }}>{item.postName}</Text>
                  </View>
                )
              }}
            />

          </View>
        </ScrollView>
      </View>
    );
  }
}




export default Post;