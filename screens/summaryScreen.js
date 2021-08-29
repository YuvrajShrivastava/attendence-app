import * as React from 'react';
import { View ,TouchableOpacity,Text,StyleSheet,Button} from 'react-native';
import {Header}  from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen'
import db from '../config'

export default class Hello extends React.Component{
  updateAttendence(status,roll_no){
  var id = '';
  if(roll_no<=9){
    id = '0'+roll_no
  }else{
  id = roll_no
  }
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10){
    dd='0'+dd
  }
if(mm<10){
dd='0'+mm
}
today = dd + '-' + mm +'-'+yyyy;
var ref_path = id
var class_ref = db.ref(ref_path);
class_ref.update({
  [today]: status
})
}
  render(){
    return(
      <View>
<Header
          backgroundColor={'yellow'}
          centerComponent={{
            text: 'School Attendence',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Text style = {styles.text}>Student Names</Text>
        <Text style = {styles.name}>1)Slappy</Text>
        <Button title = 'Present' color = 'green' onPress = {this.updateAttendence('present',1)}/>
                <Button title = 'Absent' color = 'red'  onPress = {this.updateAttendence('Absent',1)}/> 
                    <Text style = {styles.name}>2)Frost</Text>
                    <Button title = 'Present' color = 'green' onPress = {this.updateAttendence('present',2)}/>
                <Button title = 'Absent' color = 'red'  onPress = {this.updateAttendence('Absent',2)}/> 

</View> 

    )
  }

}


const styles = StyleSheet.create({
    
  text: {
    marginTop: 10,
 textAlign: 'center',
 color: 'Black',
 fontSize: 30
  },
  name: {
    marginTop: 10,
    fontSize: 20
  }
  
})