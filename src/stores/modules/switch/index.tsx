import { RootStore } from "../../store";
import { atom } from 'nanostores';

export class Switch {
    private rootStore: RootStore;

    repository = atom({
        isTestNet: false,
    });

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    setIsTestNet = (payload: boolean) => {
        this.repository.set({ ...this.repository.get(), isTestNet: payload });
    };
}