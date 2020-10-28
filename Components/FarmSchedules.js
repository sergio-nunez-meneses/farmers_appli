import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class EditFarmer extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { route, navigation } = this.props;
    const { item } = route.params;
    const { FarmSchedules } = route.params.item;
    console.log(FarmSchedules);

    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          {
            FarmSchedules.map((item) => (
              <React.Fragment key={item.id.toString()}>
                <Text style={styles.DataStyle}>Jour : {item.day}</Text>
                <Text style={styles.DataStyle}>Activité: {item.activity}</Text>
                <Text style={styles.DataStyle}>Horaires : de {item.start_time} à {item.end_time}</Text>
              </React.Fragment>
            ))
          }
        </ScrollView>
        {/* back to farm details */}
        <TouchableOpacity
          style={{ backgroundColor: '#FF0099'}}
          onPress={() => { navigation.navigate('FarmDetails'); }}
        >
          <Text style={styles.DataStyle}>Retourner</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex:1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#fff'
  },
  CardContainer: {
    flex: 3,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff'
  },
  TextInputStyleClass: {
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5
  },
  TouchableOpacitySubmitStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
    backgroundColor: '#FF0000'
  },
  TouchableOpacityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#fff'
  },
  TouchableOpacityStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
    backgroundColor: '#00BCD4'
  },
  DataStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 80,
    paddingVertical: 5,
    color:'#000',
    textAlign:'center',
    textTransform: 'uppercase'
  }
});
