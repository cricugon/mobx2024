import { makeObservable, observable, action, computed, reaction } from 'mobx';

class ArepasStore {
    
    constructor() {
        this.arepas = [];
        // Fix for shadowing the name `localStorage`
        const storedArepas = localStorage.getItem('arepas');
        if (storedArepas) {
            this.arepas = JSON.parse(storedArepas);
        }

        // Initialize makeObservable in the constructor
        makeObservable(this, {
            arepas: observable,
            agregarArepa: action,
            borrarArepa: action,
            numeroArepas: computed,
        });
    }
    agregarArepa = (arepa) => {
        this.arepas.push(arepa);
    };
    get numeroArepas() {
        // Corrected typo from 'lenght' to 'length'
        return this.arepas.length;
    };
    borrarArepa = () => {
        this.arepas = [];
    };
}

const arepasStore = new ArepasStore();

reaction(
    () => JSON.stringify(arepasStore.arepas),
    arepasStr => {
        localStorage.setItem('arepas', arepasStr);
    }
);

export default arepasStore;
