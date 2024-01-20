import React, {lazy, Suspense} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigationParamList} from '../../../../models/navigationModel';

const AuthenticationContainer = lazy(
  () => import('../../../../components/authentication/authenticationContainer'),
);
const ShareListContainer = lazy(
  () => import('../../../../components/shareList/shareListContainer'),
);

const Stack = createNativeStackNavigator<RootNavigationParamList>();

const RootNavigationStackComponent = () => {
  return (
    <Stack.Navigator initialRouteName={'Auth'}>
      <Stack.Screen name="Auth" component={AuthenticationContainer} />
      <Suspense>
        <Stack.Screen name="Share" component={ShareListContainer} />
      </Suspense>
    </Stack.Navigator>
  );
};

export default RootNavigationStackComponent;
