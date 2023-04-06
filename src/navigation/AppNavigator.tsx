import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
// import AddWorkoutScreen from '../screens/AddWorkoutScreen';
// import WorkoutsScreen from '../screens/WorkoutsScreen';
// import TemplatesScreen from '../screens/TemplatesScreen';
// import AddTemplateScreen from '../screens/AddTemplateScreen';
// import EditTemplateScreen from '../screens/EditTemplateScreen';

type HomeStackParamList = {
  Home: undefined;
  AddWorkout: undefined;
};

// type WorkoutsStackParamList = {
//   Workouts: undefined;
// };

// type TemplatesStackParamList = {
//   Templates: undefined;
//   AddTemplate: undefined;
//   EditTemplate: undefined;
// };

// const WorkoutsStack = createStackNavigator<WorkoutsStackParamList>();
// const TemplatesStack = createStackNavigator<TemplatesStackParamList>();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
