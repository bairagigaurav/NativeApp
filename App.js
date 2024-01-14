import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';

const amount = ["₹1 Cr", "₹2 Cr", "₹3 Cr", "₹4 Cr"];

const App = () => {
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
            <Text style={styles.discountText}>Discount ends in 10:05:45</Text>
            <Text style={styles.discountAmount}>₹60</Text>
          </View>
        </View>

        <View style={styles.prizeSection}>
          <View style={styles.selectWrap}>
            <SelectDropdown data={amount} fontSize={12} />
          </View>
          <TouchableOpacity style={styles.btnPrimary} onPress={onPress}>
            <Text style={styles.btnPrimaryText}>Total: ₹{count}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.totalSection}>
          <View style={styles.totalPrizeCard}>
            <Text style={styles.totalPriceText}>Total Prize ₹2.01Cr</Text>
            <Image source={require('./assets/down-arrow.png')} style={styles.downArrow} />
          </View>

          <View style={styles.trophyCard}>
            <Image source={require('./assets/trophy.png')} style={styles.trophyImg} />
            <Text style={styles.totalWinner}>40% Winners</Text>
          </View>

          <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#d24580', '#647ecb']} style={styles.linearGradientBadge}>
            <Image source={require('./assets/grow.png')} style={styles.growImg} />
            <Text style={styles.linearGradientBadgeText}>Win 1 CR</Text>
          </LinearGradient>
        </View>

        <View style={styles.teamScoreSection}>
          <Text style={styles.totalPriceText}>1123/4000 teams</Text>
          <View style={styles.teamScoreSectionRight}>
            <View style={styles.teamScoreContent}>
              <Image source={require('./assets/guaranteed.png')} style={styles.guaranteedImg} />
              <Text style={styles.teamScoreSectionRightTextBlue}>100%</Text>
            </View>
            <View style={styles.teamScoreContent}>
              <Image source={require('./assets/boost.png')} style={styles.guaranteedImg} />
              <Text style={styles.teamScoreSectionRightText}>3</Text>
            </View>
            <View style={styles.teamScoreContent}>
              <Image source={require('./assets/group.png')} style={styles.guaranteedImg} />
              <Text style={styles.teamScoreSectionRightText}>13</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.themeBottomCard}>
        <Image source={require('./assets/up.png')} style={styles.upIcon} />
        <Text style={styles.themeBottomCardText}>Biggest prizes guaranteed / IPL tagline</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

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
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      position:"absolute",
      right:-10,
      flexDirection:"row",
      alignItems:"center",
  },
  linearGradientBadgeText:{
    color:"#fff",
    fontWeight:"500",
    fontSize:10,
  },
  totalPriceText:{
    color:"#666666",
    fontSize:10,
    marginRight:10,
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
    paddingLeft:2,
    color:"#333333",
    fontWeight:"bold",
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
    flexDirection:"row",
    alignItems:"center",
  },
  themeBottomCardText:{
    fontWeight:"bold",
    // textTransform:"capitalize",
  },
  upIcon:{
        width: 25, 
        height: 25, 
        marginRight:10,
  },
  growImg:{
    height:20,
    width:20,
    marginRight:5,
  },
  trophyCard:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  downArrow:{
    height:6,
    width:10,

  },
  totalPrizeCard:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginRight:5,
  },
  trophyImg:{
    height:15,
    width:15,
    marginRight:5,
  },
  guaranteedImg:{
    height:16,
    width:16,
  },
  teamScoreContent:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginRight:10,
  },
  teamScoreSectionRightTextBlue:{
    color:"#024680",
    fontWeight:"bold",
    paddingLeft:2,
  }
});

export default App;
