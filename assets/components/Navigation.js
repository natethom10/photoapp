import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Groups from "../pages/Groups";
import Login from "../pages/Login";
import Camera from "../pages/Camera";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Camera"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black", // Tab bar background
          borderTopColor: "black", // Optional: top border color
          height: 70, // Custom height
        },
        tabBarActiveTintColor: "#00ffcc", // Color for selected tab
        tabBarInactiveTintColor: "#888", // Color for unselected tab
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false, // Hides header (optional)
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}
