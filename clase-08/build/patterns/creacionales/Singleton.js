"use strict";
class Singleton {
    constructor() {
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    someBussinesLogic() {
        console.log("metodo del singleton");
    }
}
//# sourceMappingURL=Singleton.js.map