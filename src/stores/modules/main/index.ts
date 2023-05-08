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
        SOLwalletKey: "",
        MUMBwalletKey: "",
        TONwalletKey: "",
        NEARwalletKey: "",
        ATOMwalletKey: "",
        AURwalletKey: "",
        ETHwalletKey: "",
        AURMaxAmount: 0,
        SOLMaxAmount: 0,
        TONMaxAmount: 0,
        ATOMMaxAmount: 0,
        NEARMaxAmount: 0,
        ETHMaxAmount: 0,
        USNMaxAmount: 0,
    });

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    //maxAmounts
    setSOLMaxAmount = (payload: number) => {
        this.repository.set({ ...this.repository.get(), SOLMaxAmount: payload });
    }

    setUSNMaxAmount = (payload: number) => {
        this.repository.set({ ...this.repository.get(), USNMaxAmount: payload });
    }

    setETHMaxAmount = (payload: number) => {
        this.repository.set({ ...this.repository.get(), ETHMaxAmount: payload });
    }

    setNEARMaxAmount = (payload: number) => {
        this.repository.set({ ...this.repository.get(), NEARMaxAmount: payload });
    }

    setATOMMaxAmount = (payload: number) => {
        this.repository.set({ ...this.repository.get(), ATOMMaxAmount: payload });
    }

    setTONMaxAmount = (payload: number) => {
        this.repository.set({ ...this.repository.get(), TONMaxAmount: payload });
    }

    setAURMaxAmount = (payload: number) => {
        this.repository.set({ ...this.repository.get(), AURMaxAmount: payload });
    }


    // WalletKeys
    setETHwalletKey = (payload: string) => {
        this.repository.set({ ...this.repository.get(), ETHwalletKey: payload });
    }

    setAURwalletKey = (payload: string) => {
        this.repository.set({ ...this.repository.get(), AURwalletKey: payload });
    }

    setATOMwalletKey = (payload: string) => {
        this.repository.set({ ...this.repository.get(), ATOMwalletKey: payload });
    }

    setNEARwalletKey = (payload: string) => {
        this.repository.set({ ...this.repository.get(), NEARwalletKey: payload });
    };

    setSOLwalletKey = (payload: string) => {
        this.repository.set({ ...this.repository.get(), SOLwalletKey: payload });
    };

    setMUMBwalletKey = (payload: string) => {
        this.repository.set({ ...this.repository.get(), MUMBwalletKey: payload });
    };

    setTONwalletKey = (payload: string) => {
        this.repository.set({ ...this.repository.get(), TONwalletKey: payload });
    };




    

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

    setEthu = (payload: number) => {
        this.repository.set({ ...this.repository.get(), ethu: payload });
    };
}
