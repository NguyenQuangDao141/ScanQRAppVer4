import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Ionicons";
import firebase from "./Config";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Home({route, navigation }) {
  let itemId
  if(route.params===undefined){
    // alert(`Vui lòng quét mã QR...`);
    navigation.navigate('Scan')
  } else {
    // alert(`Thông tin bệnh nhân sẽ được hiển thị`)
    itemId = route.params.result.data
  }
  const rootRef = firebase.database().ref();
  const animal = rootRef.child(`${itemId}`);
  
  const [nameIf,setNameIf]     = useState();
  const [bedIDIf,setBedIDIf]   = useState();
  const [IDUserIf,setIDUserIf] = useState();
  const [voluIf,setVoluIf]     = useState();
  const [time,setTime]     = useState();
  const [velo,setVelo]     = useState();
  const [calibVelo,setCalibVelo]     = useState();
  const [solutionIf,setSolutionIf]     = useState();
  useEffect(()=>{

    animal.on('value', (child) => {
      console.log(child)
      setIDUserIf(child.val()?.IDUser)
      setNameIf(child.val()?.name)
      setBedIDIf(child.val()?.bedId)
      setVoluIf(child.val()?.volu)
      setVelo(child.val()?.velo)
      setTime(child.val()?.time)
      setCalibVelo(child.val()?.calibVelo)
      setSolutionIf(child.val()?.solution)
    })
  },[itemId])



  return (
    <ScrollView>
      <View>

        <View style={styles.header}>
          <Text style={styles.textHeader}>
            Thông tin bệnh nhân :
          </Text>
        </View>

        <View style={{flexDirection:'row-reverse'}} >
          <View style={{height:60,width:'75%',alignItems:'center',justifyContent:'center'}}>
            <View style ={{width:"90%",height:50,borderWidth:1,borderColor:'grey',borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'#2BDA8E',}}>
              <Text style={{color:'#D01C1C',fontSize:16,fontWeight:'bold'}}>
                {IDUserIf}
              </Text>
            </View>
          </View>
          <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <Icon5
              name={"id-card"}
              size ={35}
              color = {'#2BDA8E'}
            />
          </View>
        </View >

        <View style={{flexDirection:'row-reverse'}} >
          <View style={{height:60,width:'75%',alignItems:'center',justifyContent:'center'}}>
            <View style ={{width:"90%",height:50,borderWidth:1,borderColor:'grey',borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'#2BDA8E',}}>
              <Text style={{color:'#D01C1C',fontSize:16,fontWeight:'bold'}}>
                {nameIf}
              </Text>
            </View>
          </View>
          <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <Icon5
              name={"hospital-user"}
              size ={35}
              color = {'#2BDA8E' }
            />
          </View>
        </View >

        <View style={{flexDirection:'row-reverse'}} >
          <View style={{height:60,width:'75%',alignItems:'center',justifyContent:'center'}}>
            <View style ={{width:"90%",height:50,borderWidth:1,borderColor:'grey',borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'#2BDA8E',}}>
              <Text style={{color:'#D01C1C',fontSize:16,fontWeight:'bold'}}>
                {bedIDIf}
              </Text>
            </View>
          </View>
          <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <Icon5
              name={"bed"}
              size ={35}
              color = {'#2BDA8E'}
            />
          </View>
        </View >

        <View style={{flexDirection:'row-reverse'}} >
          <View style={{height:60,width:'75%',alignItems:'center',justifyContent:'center'}}>
            <View style ={{width:"90%",height:50,borderWidth:1,borderColor:'grey',borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'#2BDA8E',}}>
              <Text style={{color:'#D01C1C',fontSize:16,fontWeight:'bold'}}>
                {voluIf}  (ml)
              </Text>
            </View>
          </View>
          <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <Icon5
              name={"prescription-bottle"}
              size ={35}
              color = {'#2BDA8E'}
            />
          </View>
        </View >

        <View style={{flexDirection:'row-reverse'}} >
          <View style={{height:60,width:'75%',alignItems:'center',justifyContent:'center'}}>
            <View style ={{width:"90%",height:50,borderWidth:1,borderColor:'grey',borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'#2BDA8E',}}>
              <Text style={{color:'#D01C1C',fontSize:16,fontWeight:'bold'}}>
                {solutionIf}
              </Text>
            </View>
          </View>
          <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <Icon5
              name={"prescription-bottle-alt"}
              size ={35}
              color = {'#2BDA8E'}
            />
          </View>
        </View >

        <View style={{flexDirection:'row-reverse'}} >
          <View style={{height:60,width:'75%',alignItems:'center',justifyContent:'center'}}>
            <View style ={{width:"90%",height:50,borderWidth:1,borderColor:'grey',borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'#2BDA8E',}}>
              <Text style={{color:'#D01C1C',fontSize:16,fontWeight:'bold'}}>
                {time}  (phút)
              </Text>
            </View>
          </View>
          <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <Icon2
              name={"time"}
              size ={35}
              color = {'#2BDA8E'}
            />
          </View>
        </View >

        <View style={{flexDirection:'row-reverse'}} >
          <View style={{height:60,width:'75%',alignItems:'center',justifyContent:'center'}}>
            <View style ={{width:"90%",height:50,borderWidth:1,borderColor:'grey',borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'#2BDA8E',}}>
              <Text style={{color:'#D01C1C',fontSize:16,fontWeight:'bold'}}>
                {velo}  (giọt/phút)
              </Text>
            </View>
          </View>
          <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <Icon2
              name={"speedometer"}
              size ={35}
              color = {'#2BDA8E'}
            />
          </View>
        </View >

        <View style={{flexDirection:'row-reverse'}} >
          <View style={{height:60,width:'75%',alignItems:'center',justifyContent:'center'}}>
            <View style ={{width:"90%",height:50,borderWidth:1,borderColor:'grey',borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'#2BDA8E',}}>
              <Text style={{color:'#D01C1C',fontSize:16,fontWeight:'bold'}}>
                {calibVelo}  (giọt/phút)
              </Text>
            </View>
          </View>
          <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <View style={{flex: 1,alignItems:'center',flexDirection:'row',marginLeft:'13%'}}>
              <Icon2
                name={"speedometer"}
                size ={35}
                color = {'#2BDA8E'}
              />
              <Icon2
                name={"settings"}
                size ={15}
                color = {'#2BDA8E'}
              />
            </View>
          </View>
        </View >
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header : {
    height: HEIGHT/15,  //HEIGHT = 720
    justifyContent: 'center',
    backgroundColor: '#2BDA8E',
  },
  header2 : {
    height: HEIGHT/15,  //HEIGHT = 720
    justifyContent: 'center',
    backgroundColor: '#2BDA8E',
    marginTop : 5,
  },
  textHeader:{
    fontSize : 20,
    fontWeight: 'bold',
    marginLeft : 15,
  },
  body :{
    alignItems: 'center',
    justifyContent: 'space-around',
    height : 60,
    width : '100%',
    marginTop : 10,
    padding: 10,
    flexDirection: 'row-reverse'
  },
  bodySolut:{
    alignItems: 'center',
    justifyContent: 'space-around',
    height : 60,
    marginTop : 10,
    padding: 10,
    flexDirection: 'reverse'

  },
  TextInput: {
    width: "50%",
    textAlign: 'center',
  },
  Text :{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
  containerStyle: {
    flex: 1,
  },
  ViewInput : {
    backgroundColor : 'white',
    height : 60,
    width : 160,
    marginTop: 10,
    borderRadius: 5,
    borderColor : 'grey',
    borderWidth: 1.5,
    marginLeft : 2,


  },

  textSolut :{
    fontWeight :'bold',
    fontSize : 14,
    // marginLeft : 12,
    alignItems :'center',
    marginTop : 10,
    justifyContent : 'center',
    textAlign : 'center',
    color: '#D01C1C',
  },
  textInput : {
    fontWeight :'bold',
    fontSize : 20,
    // marginLeft : 2,
    marginTop : 25,
    justifyContent : 'center',
    color: 'black',
  },
})
