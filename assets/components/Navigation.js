import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Groups from "../pages/Groups";
import Settings from "../pages/Settings";
import Camera from "../pages/Camera";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Camera">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Camera" component={Camera} />
    </Tab.Navigator>
  );
}
