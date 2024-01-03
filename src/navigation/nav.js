import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./stackRoutes";



const Drawer = createDrawerNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Juguemos!"
        drawerContent={(props) => <DrawerContent{...props} />}
      >
        <Drawer.Screen name="Juguemos!" component={Routes.HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;


// const Stack = createNativeStackNavigator();

// const HeaderTitle = () => (

//   <Text style={{ marginLeft: 10, fontSize: 18, color: 'black' }}>
//     ¡Hola niños!
//   </Text>

// );

// function AppNavigation() {

//   return (

//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Juguemos!">
//         <Stack.Screen
//           name="Juguemos!"
//           component={Routes.HomeScreen}
//           options={({ navigation }) => ({
//             headerTitle: () => <HeaderTitle />,
//             headerShown: true,
//             headerRight: () => (
//               <TouchableOpacity>
//                 <Image
//                   source={require('../assets/icon-nav.png')}
//                   style={{ width: 40, height: 40 }}

//                 />
//               </TouchableOpacity>
//             ),
//           })}
//         />

//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }




