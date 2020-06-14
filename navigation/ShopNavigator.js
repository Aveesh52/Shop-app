import { createStackNavigator , createAppContainer } from 'react-navigation';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors'

const ProductNavigator = createStackNavigator({
    ProductsOverview:ProductOverviewScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Colors.primary 
        },
        headerTintColor:'white'
    }
}
);
export default createAppContainer(ProductNavigator);