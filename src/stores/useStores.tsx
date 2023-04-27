import {useContext} from 'react';
import {RootStore} from './store';
import {StoreContext} from './useStore';

export const useStores = (): RootStore => useContext(StoreContext);