export function ObserverDecorator(obs_arr: Array<{
    value: string,
    observable: any
}>) {

    function _rt(key, value) {
        let t = {}
        t[key] = value;
        return t;
    }

    return function componentClass(target: any) {

        const original = target;

        function construct(constructor, args) {
            const c: any = function () {
                return constructor.apply(this, args);
            }
            c.prototype = constructor.prototype;
            return new c();
        }

        // the new constructor behaviour
        const f: any = function (...args) {
            const instance = construct(original, args);
            // obs.subscribe(value => {
            // 	instance.setState(_rt(value))
            // });

            // instance.render = function(...rargs) {
            // 	console.log("render", rargs);
            // 	return original.prototype.render.apply(this, rargs);
            // }

            instance.componentDidMount = function (...rargs) {
                obs_arr.forEach(obs => {
                    obs.observable.subscribe(value => {
                        instance.setState(_rt(obs.value, value))
                    });
                })
                return original.prototype.componentDidMount.apply(this, rargs);
            }

            return instance;
        }

        // copy prototype so intanceof operator still works
        f.prototype = original.prototype;

        // return new constructor (will override original)
        return f;
    }
}

export function StoreDecorator(store) {


    return function componentClass(target: any) {

        const original = target;

        function construct(constructor, args) {
            const c: any = function () {
                return constructor.apply(this, args);
            }
            c.prototype = constructor.prototype;
            return new c();
        }

        // the new constructor behaviour
        const f: any = function (...args) {
            const instance = construct(original, args);

            function differentByKeys (a, b, keys) {
                return keys.some((key) => {
                    return (typeof b[key] !== 'undefined' && a[key] !== b[key])
                });
            }

            instance.setState = function (...rargs) {
                if (store.keys) {
                    if (differentByKeys(instance.state, rargs[0], store.keys)) {
                        store.changeState(rargs[0]);
                    }
                } else {
                    store.changeState(instance.state);
                }
                return original.prototype.setState.apply(this, rargs);
            }

            return instance;
        }

        // copy prototype so intanceof operator still works
        f.prototype = original.prototype;

        // return new constructor (will override original)
        return f;
    }
}