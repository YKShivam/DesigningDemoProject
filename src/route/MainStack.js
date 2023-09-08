import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import NonAuthStack from "./NonAuthStack";
import BottamTab from "./BottamTab";

export default function MainStack() {
  const Stack = createNativeStackNavigator();

  return (

      <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName='AuthStack' >
        <Stack.Screen options={{ headerShown: false }} name='AuthStack' component={AuthStack} />
        <Stack.Screen options={{ headerShown: false }} name='NonAuthStack' component={NonAuthStack} />
        <Stack.Screen options={{ headerShown: false }} name='BottamTab' component={BottamTab} />
      </Stack.Navigator>
      
   
  );
}