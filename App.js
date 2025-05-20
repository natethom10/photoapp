import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./assets/Home";
import Groups from "./assets/Groups";
import Camera from "./assets/Camera";
import Settings from "./assets/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Camera">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Camera" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
