import { InvalidateSync } from './InvalidateSync';

export class SyncValue<T> {

    private _updater: (value: T) => Promise<void>;
    private _value: T;
    private _sync: InvalidateSync;

    constructor(initial: T, updater: (value: T) => Promise<void>) {
        this._value = initial;
        this._updater = updater;
        this._sync = new InvalidateSync(async () => {
            await this._updater(this._value);
        });
    }

    get value() {
        return this._value;
    }

    set value(v: T) {
        if (!Object.is(v, this._value)) {
            this._value = v;
            this._sync.invalidate();
        }
    }
}