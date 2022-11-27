/**
 * Store Types
 */
import {
    Main,
} from './modules';
  
/**
 * Root Store Class
 */
export class RootStore {
    storeMain: Main;

    constructor() {
        this.storeMain = new Main(this);
    }
}