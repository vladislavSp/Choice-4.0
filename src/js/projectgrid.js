class ProjectGrid {
    /**
     * Constructor
    */
    constructor(){
        this.lazyobj = {
            'wrapper': [...document.querySelectorAll('.project__item')],
            'element': '*[data-lazy="lazy"]'
        }
        // matrix
        this.matrix = {
            desktop: {
                one: ['data-one-src', 'data-three-src'],
                two: ['data-two-src', 'data-two-src', 'data-three-src', 'data-three-src', 'data-three-src', 'data-three-src']
            },
            mobile: ['data-three-src', 'data-two-src']
        }
    }

    /**
     * Calc
    */
    calc(){
        // obj
        this.projList = document.querySelector('*[data-proj-list="all"]');
        // if exist element
        if (this.projList) {
            // select element
            this.obj = [...document.querySelector('*[data-proj-list="all"]').querySelectorAll('.project__item')];
            // data
            this.data = [];
            // init
            this.init();
        }
    }
    
    /**
     * Init
    */
    init(){
        this.search();
        this.change();
        this.lazy();
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
     * Type element
    */
    type(name){
        if( name.match(/(jpg|jpeg|png|svg|gif)$/ig) != null ){
            return 'images';
        }
        if( name.match(/(mp4)$/ig) != null ){
            return 'video';
        }
    }
    
    /**
     * Cont stap
    */
    cont(ell, data, type){
        // data param
        let srcimg = ell.getAttribute(data),
            typecont = this.type(srcimg);
        // desktop content
        if(type == 'desktop'){
            // photo
            if( typecont == 'images' ){
                this.apply({
                    'wrap': ell,
                    'url': srcimg,
                    'element': '.projects__image',
                    'enable': '.projects__image',
                    'disable': '.project__video'
                });
            }
            // video
            if( typecont == 'video' ){
                this.apply({
                    'wrap': ell,
                    'url': srcimg,
                    'element': '.project__video video',
                    'enable': '.project__video',
                    'disable': '.projects__image' 
                });
            }
        }
        // mobile content
        if (type == 'mobile') {
            // photo
            if( typecont == 'images' ){
                this.apply({
                    'wrap': ell,
                    'url': srcimg,
                    'element': '.projects__image-mob',
                    'enable': '.projects__image-mob',
                    'disable': '.project__video-mob' 
                });
            }
            // video
            if( typecont == 'video' ){
                this.apply({
                    'wrap': ell,
                    'url': srcimg,
                    'element': '.project__video-mob video',
                    'enable': '.project__video-mob',
                    'disable': '.projects__image-mob' 
                });
            }
        }
    }

    /**
     * Data active
    */
    apply(obj){
        // src
        obj.wrap.querySelector(obj.element).setAttribute('data-src', obj.url);
        // enable
        obj.wrap.querySelector(obj.enable).setAttribute('data-view', 'enable');
        // disable
        obj.wrap.querySelector(obj.disable).setAttribute('data-view', 'disable');
    }

    /**
     * Lazy
    */
    lazy(){
        // check element
        this.lazyobj.wrapper.map(obj => {
            // element display block
            if( obj.getBoundingClientRect().width > 0 ){
                [...obj.querySelectorAll(this.lazyobj.element)].map( el => {
                    if( el.getAttribute('data-src') != null ){
                        // set attribute
                        el.setAttribute('src', el.getAttribute('data-src'));
                        // remove attribute
                        el.removeAttribute("data-src");
                    }
                });
            };
        });
    }
}

export default ProjectGrid;