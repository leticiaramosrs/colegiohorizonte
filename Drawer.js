import { createDrawerNavigator } from "@react-navigation/drawer";
import PerfilScreen from "./Perfil";



const Drawer = createDrawerNavigator();

export default function AlunoDrawer({navigation}){
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "front",
      }}
    >
      <Drawer.Screen name="Perfil" component={PerfilScreen}/>
    
    </Drawer.Navigator>
    
  );
 
}
