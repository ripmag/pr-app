export default class Register {
    static has(name) {
        return window.localStorage && window.localStorage.getItem(name) !== null;
    }

    static set(name, obj) {
        window.localStorage && window.localStorage.setItem(name, JSON.stringify(obj));
    }

    static remove(name) {
        window.localStorage && window.localStorage.removeItem(name);
    }

    static get(name) {
        const objJSON = window.localStorage && window.localStorage.getItem(name);
        let obj = {};

        if (typeof objJSON === 'string') {
            try {
                obj = JSON.parse(objJSON);
            } catch (e) {               
            }
        }

        return obj;
    }
}