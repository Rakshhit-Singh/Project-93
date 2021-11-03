import * as React from 'react';
import { Text, StyleSheet, View, Picker, TouchableOpacity, TextInput } from 'react-native';

export default class FindFoodScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      food: '',
      diet: '',
      health: '',
      mealType: '',
      dishType: '',
      cuisineType: '',

    };
  }

  getRecipes = async () => {
    if (this.state.food) {
      if (this.state.diet) {
        if (this.state.health) {
          if (this.state.mealType) {
            if (this.state.dishType) {
              if (this.state.cuisineType) {
                var url = 'https://api.edamam.com/search?app_id=226996f1&app_key=ff026ba1ac748f365b53ddfb8d48c1ec'
                  + '&q=' + this.state.food + '&diet=' + this.state.diet
                  + '&health=' + this.state.health + '&mealType=' + this.state.mealType + '&dishType=' + this.state.dishType
                  + '&cuisineType=' + this.state.cuisineType;
              }
            }
          }
        }
      } else {

      }
    }






  }


  render() {
    return (
      <View>
        <Text> Recipe Screen</Text>

        <TextInput
          style={styles.textInput}
          placeholderTextColor="#023e8a"
          placeholder="Food Name"
          value={this.state.food}
          onChangeText={(text) => {
            this.setState({
              food: text,
            });
          }}
        />

        <Picker
          mode="dropdown"
          selectedValue={this.state.diet}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              diet: itemValue,
            })
          }>
          <Picker.Item label="Diet" value="" />
          <Picker.Item label="Balanced" value="balanced" />
          <Picker.Item label="High-Fiber" value="high-fiber" />
          <Picker.Item label="High-Protein" value="high-protein" />
          <Picker.Item label="Low-Carb" value="low-carb" />
          <Picker.Item label="Low-Fat" value="low-fat" />
          <Picker.Item label="Low-Sodium" value="low-sodium" />
        </Picker>

        <Picker
          mode="dropdown"
          selectedValue={this.state.health}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              health: itemValue,
            })
          }>
          <Picker.Item label="Health" value="" />
          <Picker.Item label="Alcohol-Cocktail" value="alcohol-cocktail" />
          <Picker.Item label="Alcohol-Free" value="alcohol-free" />
          <Picker.Item label="Celery-Free" value="celery-free" />
          <Picker.Item label="Crustcean-Free" value="crustacean-free" />
          <Picker.Item label="Dairy-Free" value="dairy-free" />
          <Picker.Item label="Egg-Free" value="egg-free" />
        </Picker>

        <TouchableOpacity>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    width: '48.5%',
    height: 40,
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    color: 'black',
  },
  textInput: {
    width: '94%',
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
  }
})