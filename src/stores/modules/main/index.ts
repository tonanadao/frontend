import { RootStore } from "../../store";
import createStore from 'pure-store';

export const setValues = <T1>(state: T1, key: keyof T1, payload: any) => {
    state[key as keyof T1] = payload;
}

export class Main {
    private rootStore: RootStore;

    repository = createStore({
        ex: true, // exchange - ?
        tu: 0, // ton usd
        su: 0, // solana usd
        au: 0, // atom usd
        nu: 0, // near usd
        usnu: 0, // usn usd
        auru: 0, // aurora near usd
        ethu: 0, // ethereum usd
    });

    getState() {
        return this.repository.state;
    }

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    setEx = (payload: boolean) => {
        this.repository.update(s => s.ex = payload);
    };

    setTu = (payload: number) => {
        this.repository.update(s => s.tu = payload);
    };

    setSu = (payload: number) => {
        this.repository.update(s => s.su = payload);
    };

    setAu = (payload: number) => {
        this.repository.update(s => s.au = payload);
    };

    setNu = (payload: number) => {
        this.repository.update(s => s.nu = payload);
    };

    setUsnu = (payload: number) => {
        this.repository.update(s => s.usnu = payload);
    };

    setAuru = (payload: number) => {
        this.repository.update(s => s.auru = payload);
    };

    setEthu = (payload: number) => {
        this.repository.update(s => s.ethu = payload);
    };
}