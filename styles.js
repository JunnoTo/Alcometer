import {StyleSheet, StatusBar} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},

result:{
    marginBottom:10,
    marginTop:10,
    fontSize:40,
    fontWeight: 'bold',
    textAlign: 'center'
},

title:{
    color:'#4e3c80',
    fontSize:40,
    marginBottom:20,
    textAlign: 'center',
    fontWeight: 'bold',
},

lesserTitle:{
    fontStyle:'normal',
    fontWeight:'bold',
},

picker:{
    marginVertical:10,
    flex:1,
},

field:{
    width:300,
},

header:{
    flex:1,
    paddingTop:StatusBar.currentHeight,
},

scrollView:{
    marginHorizontal:0,
    marginTop:30,
},



radioBtn:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginBottom:10,
    paddingTop:10,
    paddingRight:30,
},

radioLabel:{
    flex:1,
    fontSize:15,
    textAlign:'left',
},

radioDot:{
    height:26,
    width:26,
    borderRadius:15,
    borderWidth:2,
    borderColor:'#000000',
    alignItems:'center',
    justifyContent:'center',
},

dotChecked:{
    width:18,
    height:18,
    borderRadius:7,
    backgroundColor:'#000000',
}

})