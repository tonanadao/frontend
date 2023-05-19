/**
 * Store Types
 */
import {
    Main,
    Switch
} from './modules';
  
/**
 * Root Store Class
 */
export class RootStore {
    storeMain: Main;
    storeSwitch: Switch;

    constructor() {
        this.storeMain = new Main(this);
        this.storeSwitch = new Switch(this);
    }
}