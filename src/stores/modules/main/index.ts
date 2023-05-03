import { RootStore } from "../../store";
import { atom } from 'nanostores';

export class Main {
    private rootStore: RootStore;

    repository = atom({
        ex: true, // exchange - ?
        tu: 0, // ton usd
        su: 0, // solana usd
        au: 0, // atom usd
        nu: 0, // near usd
        usnu: 0, // usn usd
        auru: 0, // aurora near usd
        ethu: 0, // ethereum usd
        maticu: 0, // ethereum usd
        massau: 0.25, // massa usd
    });

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    setEx = (payload: boolean) => {
        this.repository.set({ ...this.repository.get(), ex: payload });
    };

    setTu = (payload: number) => {
        this.repository.set({ ...this.repository.get(), tu: payload });
    };

    setSu = (payload: number) => {
        this.repository.set({ ...this.repository.get(), su: payload });
    };

    setAu = (payload: number) => {
        this.repository.set({ ...this.repository.get(), au: payload });
    };

    setNu = (payload: number) => {
        this.repository.set({ ...this.repository.get(), nu: payload });
    };

    setUsnu = (payload: number) => {
        this.repository.set({ ...this.repository.get(), usnu: payload });
    };

    setAuru = (payload: number) => {
        this.repository.set({ ...this.repository.get(), auru: payload });
    };
    smaticu = (payload: number) => {
        this.repository.set({ ...this.repository.get(), maticu: payload });
    };
    smassau = (payload: number) => {
        this.repository.set({ ...this.repository.get(), massau: payload });
    };

    setEthu = (payload: number) => {
        this.repository.set({ ...this.repository.get(), ethu: payload });
    };
}
