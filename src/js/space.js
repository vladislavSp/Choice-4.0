

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
        this._en = ['and', 'at', 'by', 'for', 'from', 'in', 'on', 'past', 'since', 'till', 'down', 'from', 'into', 'off', 'onto', 'of', 'over', 'past', 'under', 'up', 'close', 'over', 'past', 'above', 'at', 'below', 'by', 'near', 'under', 'at', 'in',];
        // ===
        this._elem = document.querySelectorAll('H2, H1, H3, H4, H5, H6, a, p');
    }

    /**
     * Init
    */ 
   init(){
        // p dom element
        this._p.map(obj => {
            this.translate(obj);
        });
        // a dom element
        this._a.map(obj => {
            this.translate(obj);
        });
    }

    /**
     * Translate
    */ 
    translate(obj){
        // ru lang
        this._elem.map(dat => {
            let string = new RegExp(' ' + dat + ' ','ig');
            obj.innerHTML = obj.textContent.replace( string, ` ${dat}&nbsp;` );
        });
    }
}

// 
// INDISSOLUBLE SPACE ---
// 

let sspace = new StringSpace;
sspace.init();