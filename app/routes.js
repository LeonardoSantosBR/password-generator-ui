import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home/home";
import { Passwords } from "./pages/passwords/passwords";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Gerar senha"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} name="home" color={color} />;
            }

            return <Ionicons size={size} name="home-outline" color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Senhas geradas"
        component={Passwords}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} name="lock-closed" color={color} />;
            }

            return (
              <Ionicons size={size} name="lock-closed-outline" color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
