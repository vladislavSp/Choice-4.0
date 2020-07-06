class ProjectGrid {

    /**
     * Calc
    */
    calc(){
        // obj
        this.obj = [...document.querySelectorAll('.project__item')];
        // matrix
        this.matrix = {
            desktop: {
                one: ['data-one-src', 'data-three-src'],
                two: ['data-two-src', 'data-two-src', 'data-three-src', 'data-three-src', 'data-three-src', 'data-three-src']
            },
            mobile: ['data-two-src', 'data-three-src']
        }
        // data
        this.data = [];
        // init
        this.init();
    }
    
    /**
     * Init
    */
    init(){
        this.search();
        this.change();
    }

    /**
     * Body stap
    */
    search(){
        this.data[0] = [];
        // 
        for(let i = 0; i < 2; i++){
            this.data[0].push(this.obj[i]);
        }
        // calc length
        let leng = (this.obj.length - 2)/6;
            leng = Math.ceil(leng);
        //
        for( let i = 0; i < leng; i++ ){
            // 
            let num = this.data.length++;
            this.data[num] = [];
            // 
            for( let m = num*6-4; m < num*6+2; m++ ){
                if(this.obj[m] != undefined){
                    this.data[num].push(this.obj[m]);
                }
            }
        }
    }

    /**
     * Change stap
    */
    change(){
        // scan object
        this.data.map( (el, index) => {
            // scan element
            el.map( (ell, indexx) => {
                if(ell != undefined){
                    // one section desktop
                    if(index == 0){
                        this.cont(ell, this.matrix.desktop.one[indexx], 'desktop');
                    }
                    // two section desktop
                    if(index > 0){
                        this.cont(ell, this.matrix.desktop.two[indexx], 'desktop');
                    }
                    // first case mobile
                    if(indexx == 0){
                        this.cont(ell, this.matrix.mobile[0], 'mobile');
                    }
                    // not first case mobile
                    if(indexx > 0){
                        this.cont(ell, this.matrix.mobile[1], 'mobile');
                    }
                }
            });
        });
    }
    
    /**
     * Cont stap
    */
    cont(ell, data, type){
        let srcimg = ell.getAttribute(data);
        // desktop content
        if(type == 'desktop'){
            // photo
            if( ell.querySelector('.projects__image') != undefined ){
                // apply
                ell.querySelector('.projects__image').setAttribute('src', srcimg);
            }
            // video
            if( ell.querySelector('.project__video') != undefined ){
                // select elem
                let source = `<source data-src="" data-wf-ignore="true" src="${srcimg}">`,
                    obj = ell.querySelector('.project__video').querySelector('video');
                // apply
                obj.innerHTML = source;
            }
        }
        // mobile content
        if(type == 'mobile'){
            // photo
            if( ell.querySelector('.projects__image-mob') != undefined ){
                // apply
                ell.querySelector('.projects__image-mob').setAttribute('src', srcimg);
            }
            // video
            if( ell.querySelector('.project__video-mob') != undefined ){
                // select elem
                let source = `<source src="${srcimg}">`,
                    obj = ell.querySelector('.project__video-mob').querySelector('video');
                // apply
                obj.innerHTML = source;
            }
        }
    }
}

export default ProjectGrid;