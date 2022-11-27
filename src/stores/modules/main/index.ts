import { makeAutoObservable } from "mobx";
import { RootStore } from "../../store";

export const setValues = <T1>(state: T1, key: keyof T1, payload: any) => {
    state[key as keyof T1] = payload;
}

export class Main {
    private rootStore: RootStore;

    state = {
        ex: true, // exchange - ?
        tu: 0, // ton usd
        su: 0, // solana usd
        au: 0, // atom usd
        nu: 0, // near usd
        usnu: 0, // usn usd
        auru: 0, // aurora near usd
        ethu: 0, // ethereum usd
    }

    getState() {
        return this.state;
    }

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeAutoObservable(this);
    }

    setEx = (payload: boolean) => {
        setValues<ReturnType<typeof this.getState>>(this.state, 'ex', payload);
    };

    setTu = (payload: number) => {
        setValues<ReturnType<typeof this.getState>>(this.state, 'tu', payload);
    };

    setSu = (payload: number) => {
        setValues<ReturnType<typeof this.getState>>(this.state, 'su', payload);
    };

    setAu = (payload: number) => {
        setValues<ReturnType<typeof this.getState>>(this.state, 'au', payload);
    };

    setNu = (payload: number) => {
        setValues<ReturnType<typeof this.getState>>(this.state, 'nu', payload);
    };

    setUsnu = (payload: number) => {
        setValues<ReturnType<typeof this.getState>>(this.state, 'usnu', payload);
    };

    setAuru = (payload: number) => {
        setValues<ReturnType<typeof this.getState>>(this.state, 'auru', payload);
    };

    setEthu = (payload: number) => {
        setValues<ReturnType<typeof this.getState>>(this.state, 'ethu', payload);
    };
}