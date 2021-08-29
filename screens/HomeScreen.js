import * as React from 'react';
import { View ,TouchableOpacity,Text,StyleSheet,Image} from 'react-native';
import db from '../config'

export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state ={
      all_students:[]
    }
  }
render(){
  return(
    <View>
    <Text>{this.state.all_students}</Text>
    </View>
  )
}



async sort(){

 var class_ref = await db.ref('/').on('value',data=>{
  var all_Students =[]
  var class_a =data.val().class_a
  for (var i in class_a){
    all_Students.push(class_a[i])
  }
  all_Students.sort(function(a,b) {
    return a.roll_no - b.roll_no
  })
  this.setState({all_students:all_Students})
 })
}
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



}