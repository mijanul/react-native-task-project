import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    (navigationRef as any).navigate(name, params);
  }
}

export function resetRoot(name: string = '') {
  if (navigationRef.isReady()) {
    (navigationRef as any).resetRoot({
      index: 0,
      routes: [{name}],
    });
  }
}
