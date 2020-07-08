

class Lang {
    
    /**
     * Init param
    */
    constructor() {
        // language
        this.cont = ['ru', 'uk', 'be'];
        // language brouser
        this.lang = window.navigator.language.substr(0, 2);
    }

    /**
     * Select language
    */
    select() {
        // result
        let result = 0;
        // calc result
        this.cont.map( obj => {
            if( obj == this.lang ){
                result = 1;
            }
        });
        // change
        if (result == 0) {
            this.change();
        }
    }
    
    /**
     * Change language
    */
    change(){
        // all element laguage
        let el = document.querySelectorAll(`*[data-lng]`);
        // change language
        [...el].map(obj => {
            let cont = obj.textContent;
            obj.textContent = obj.getAttribute('data-lng');
            obj.setAttribute('data-lng', cont);
        });
    }
}

let lang = new Lang;
lang.select();