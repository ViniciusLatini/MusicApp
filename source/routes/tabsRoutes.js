import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '@expo/vector-icons/Feather';
import fonts from '../styles/fonts';

import { Profile } from '../screens/Profile';
import { Search } from '../screens/Search';
import { Home } from '../screens/Home';

const Tabs = createBottomTabNavigator();

const TabsRoutes = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'light' == 'light' ? '#fff' : '#222',
          shadowColor: 'light' == 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
          shadowOpacity: 1,
          shadowRadius: 6,
          borderTopEndRadius: 18,
          borderTopStartRadius: 18
          
        },
        labelStyle: {
          fontFamily: fonts.subtitle
        }
        }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options= {{
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={23} />
            ),							
        }}
      />

      <Tabs.Screen
        name="Search"
        component={function RenderSearch(props) {
          return <Search {...props} />
        }}
        options= {{
            tabBarIcon: ({color}) => (
              <Icon name="search" color={color} size={23} />
            )
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={function RenderProfile(props) {
          return <Profile {...props} />
        }}
        options= {{
            tabBarIcon: ({color}) => (
              <Icon name="user" color={color} size={23} />
            ) 
        }}
      />
    </Tabs.Navigator>
  )
}

export default TabsRoutes;