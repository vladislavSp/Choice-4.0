// 
// --- INDISSOLUBLE SPACE
// 

class StringSpace{

    /**
     * Data
    */ 
    constructor(){
        // ===
        this._ru = ['а', 'без', 'безо', 'в', 'во', 'вне', 'да', 'для', 'до', 'ее', 'еще', 'и', 'или', 'из', 'изо', 'или', 'их', 'за', 'к', 'как', 'ко', 'меж', 'на', 'над', 'не', 'ни', 'но', 'о', 'об', 'обо', 'от', 'ото', 'по', 'под', 'при', 'про', 'с', 'со', 'то', 'там', 'у', 'уж', 'что', 'я'];
        // ===
        this._en = ['and', 'at', 'by', 'for', 'from', 'in', 'on', 'past', 'since', 'till', 'down', 'from', 'into', 'off', 'onto', 'of', 'over', 'past', 'under', 'up', 'close', 'over', 'past', 'above', 'at', 'also', 'below', 'the', 'a', 'by', 'near', 'under', 'at', 'in',];
        // ===
        this._elem = [...document.querySelectorAll('H2, H1, H3, H4, H5, H6, p')];
    }

    /**
     * Init
    */ 
   init(){
        // p dom element
        this._elem.map(obj => {
            this.translate(obj);
        });
    }

    /**
     * Translate
    */ 
    translate(obj){
        // ru lang
        this._ru.map(dat => {
            let string = new RegExp(' ' + dat + ' ','ig');
            obj.innerHTML = obj.innerHTML.replace( string, ` ${dat}&nbsp;` );
        });
        // en lang
        this._en.map(dat => {
            let string = new RegExp(' ' + dat + ' ','ig');
            obj.innerHTML = obj.innerHTML.replace( string, ` ${dat}&nbsp;` );
        });
    }
}

// 
// INDISSOLUBLE SPACE ---
// 

let sspace = new StringSpace;
sspace.init();