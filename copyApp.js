import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown'


const amount = ["₹1 Cr", "₹2 Cr", "₹3 Cr", "₹4 Cr"]


export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <View style={styles.themeCard}>
        <View style={styles.themeCardHeader}>
          <View style={styles.themeBadge}>
            <Text style={styles.badgeText}>Mega Contest</Text>
          </View>
          
          <View style={styles.discount}>
            <Text style={styles.discountText}>Discount ends in 10:05:45
            </Text>
            <Text style={styles.discountAmount}>₹60</Text>
          </View>
        </View>
        <View style={styles.prizeSection}>
          <View style={styles.selectWrap}>
            <SelectDropdown
              data={amount}
              fontSize={12}
              />
          </View>
            <TouchableOpacity style={styles.btnPrimary} onPress={onPress}>
                <Text style={styles.btnPrimaryText}>Total: ₹{count}</Text>
            </TouchableOpacity>
        </View>
        <View>
        <View style={styles.totalSection}>
          <Text style={styles.totalPriceText}>Total Prize ₹2.01Cr</Text>
          <Text style={styles.totalWinner}>40% Winners</Text>
          <LinearGradient  start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#d24580', '#647ecb' ]} style={styles.linearGradientBadge}>
              <Text style={styles.linearGradientBadgeText}>
                Win 1 CR
              </Text>
        </LinearGradient>
        </View>
        <View style={styles.teamScoreSection}>
          <Text style={styles.totalPriceText}>1123/4000 teams</Text>
          <View style={styles.teamScoreSectionRight}>
            <Text style={styles.teamScoreSectionRightText}>100%</Text>
            <Text style={styles.teamScoreSectionRightText}>3</Text>
            <Text style={styles.teamScoreSectionRightText}>13</Text>
          </View>
        </View>
        </View>
      </View>
      <View style={styles.themeBottomCard}>
        <Text  style={styles.themeBottomCardText}>Biggest prizes guaranteed / IPL tagline</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:40,
    padding:15,
  
  },
  themeCard:{
    backgroundColor:"#fff",
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    width:"100%",
    elevation:10,
    marginTop:20,
    borderRadius:10
  },
  themeBadge:{
    backgroundColor:"#E8F6FB",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"#D0EAF3",
    paddingLeft:5,
    paddingRight:5,
    width:80,
    borderBottomLeftRadius:4,
    borderBottomRightRadius:4,
    position:"absolute",
    top:0,
    left:10,

  },
  themeCardHeader:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"flex-end",
    marginBottom:10,
    position:"relative",
  },
  badgeText:{
    color:"#306999",
    fontSize:10,
    textAlign:"center",
  },
  discount:{
    alignItems:"center",
    flexDirection:"row",
    paddingTop:10,
  },
  discountText:{
    fontSize:12,
    color:"#024680",
    marginRight:5,
  },
  discountAmount:{
    color:"#333333",
    fontWeight:"bold",
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  btnPrimary:{
    backgroundColor:"#00BF36",
    borderRadius:5,
    padding:6,
  },
  btnPrimaryText:{
    color:"#fff",
    textAlign:"center",
  },
  prizeSection:{
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"space-between",
    marginTop:10,
  },
  selectWrap:{
    position:"relative",
  },

  totalSection:{
    flexDirection:"row",
    position:"relative",
    marginTop:30,
    marginBottom:30,
  },
  linearGradientBadge:{
      paddingLeft:20,
      paddingRight:20,
      paddingTop:5,
      paddingBottom:5,
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      position:"absolute",
      right:-10
  },
  linearGradientBadgeText:{
    color:"#fff",
    fontWeight:"500",
    fontSize:10,
  },
  totalPriceText:{
    color:"#666666",
    fontSize:12,
    marginRight:20,
  },
  totalWinner:{
    color:"#666666",
    fontSize:12,
  },
  teamScoreSection:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  teamScoreSectionRight:{
    flexDirection:"row",
  },
  teamScoreSectionRightText:{
    paddingLeft:10,
    paddingRight:10,
    color:"#333333",
  },
  themeBottomCard:{
    backgroundColor:"#D9F1FE",
    elevation:10,
    borderRadius:4,
    padding:10,
    width:"100%",
    marginBottom:30,
    borderStyle:"dashed",
    borderColor:"#999999",
    borderTopWidth:1, 
  },
  themeBottomCardText:{
    fontWeight:"bold",
  }

});
