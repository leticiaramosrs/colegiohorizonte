import { createDrawerNavigator } from "@react-navigation/drawer";
import PerfilAluno from "./PerfilAluno";



const Drawer = createDrawerNavigator();

export default function AlunoDrawer({navigation}){
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerType: "front",
      }}
    >
      <Drawer.Screen name="PerfilAluno" component={PerfilAluno} />
    
    </Drawer.Navigator>
    
  );
 
}
