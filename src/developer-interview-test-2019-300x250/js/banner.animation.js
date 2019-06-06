'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/copy1.png',
    'images/copy2.png',
    'images/copy3.png',
    'images/copy4.png',
    'images/logo.svg',
    'images/logo1.png',
    'images/logo2.png',
    'images/logo3.png',
    'images/plat1.png',
    'images/plat2.png',
    'images/plat3.png',
    'images/scribble.png'
  ];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  
  this.logo = this.smartObject({
    id: 'BANNERTIME',
    backgroundImage: 'images/logo.svg',
    width: 217,
    height: 26,
    retina: true,
    parent: this.banner
  });

  this.logo1 = this.smartObject({
    id: 'YOEMAN',
    backgroundImage: 'images/logo1.png',
    retina: true,
    parent: this.banner
  });

  this.logo2 = this.smartObject({
    id: 'NPM',
    backgroundImage: 'images/logo2.png',
    retina: true,
    parent: this.banner
  });

  this.logo3 = this.smartObject({
    id: 'GULP',
    backgroundImage: 'images/logo3.png',
    retina: true,
    parent: this.banner
  });

  this.logo4 = this.smartObject({
    id: 'LOGO4',
    innerHTML: 'ADOBE CC ??',
    fontSize: '22px',
    parent: this.banner
  });

  for(var b = 1; b <= 4; b++){
    this[`copy${b}`] = this.smartObject({
      id: `COPY${b}`,
      backgroundImage: `images/copy${b}.png`,
      retina: true,
      parent: this.banner
    });
  }

  this.scribble = this.smartObject({
    id: 'SCRIBBLE',
    backgroundImage: 'images/scribble.png',
    backgroundPosition: '0px 0px',
    backgroundSize: '1300% 100%',
    width: 425,
    height: 42,
    parent: this.banner
  });

  this.plat1 = this.smartObject({
    id: 'DC',
    backgroundImage: 'images/plat1.png',
    retina: true,
    parent: this.banner
  });

  this.plat2 = this.smartObject({
    id: 'SIZMEK',
    backgroundImage: 'images/plat2.png',
    retina: true,
    parent: this.banner
  });

  this.plat3 = this.smartObject({
    id: 'FLASHTALKING',
    backgroundImage: 'images/plat3.png',
    retina: true,
    parent: this.banner
  });

};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {

  this.logo.center();

  for (let c = 1; c <= 4; c++) {
    this[`logo${c}`].center();
  }

  for (let d = 1; d <= 4; d++) {
    this[`copy${d}`].center();
    if( d === 1 || d === 3){
      this[`copy${d}`].set({ top: '-=15', scale: 0.3, autoAlpha: 0 });
    }
    else{
      this[`copy${d}`].set({ top: '+=15', scale: 0, autoAlpha: 0 });
    }
  }

  for (let e = 1; e <= 3; e++) {
    this[`plat${e}`].center();
  }

  this.scribble.set({ top: '+=105', left: '-=40' });

  this.icons = [this.logo1, this.logo2, this.logo3, this.logo4];
  this.servers = [this.plat1, this.plat2, this.plat3];

};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  let _this = this;

  function copyAnimation(copy1, copy2) {
    let tl = new TimelineLite({ paused:true })
      .staggerTo([copy1, copy2], 0.5, { scale: 1, autoAlpha: 1, ease:Power3.easeIn }, 1, 'in')
      .to(copy1, 0.5, { scale: 3, y: -150, autoAlpha: 0, ease:Power3.easeIn }, 'out+=0.5')
      .to(copy2, 0.5, { scale: 3, y: 150, autoAlpha: 0, ease:Power3.easeIn }, 'out+=0.5');

      return tl;
  }


  this.timeline = new TimelineMax({ })
    .addLabel('start', 0)
    .to(this.logo, 0.5, { scale: 0.3, autoAlpha: 0, ease:Power2.easeOut }, '+=1');

  this.icons.forEach(function(item, index){
    if( index === 3 ){
      _this.timeline.fromTo(item, 0.2, { scaleX: 0, opacity: 0.4 }, { autoAlpha: 1, scaleX: 1, ease:Power2.easeOut });
    }
    else{
      _this.timeline.fromTo(item, 0.2, { scaleX: 0, opacity: 0.4 }, { autoAlpha: 1, scaleX: 1, ease:Power2.easeOut })
        .to(item, 0.3, { scaleX: 0, opacity: 0.4, ease:Power2.easeIn }, '+=0.3')
        .set(item, { autoAlpha: 0 });
    }
  });

  this.timeline.from(this.scribble, 0.001, { autoAlpha:0 }, '+=1.2')
    .to(this.scribble, 0.52, { backgroundPosition: '-5100px, 0', ease:SteppedEase.config(12) })
    .to([this.scribble, this.logo4], 0.3, { autoAlpha: 0 }, '+=1')
    .add(copyAnimation(this.copy1, this.copy2).play());

  this.servers.forEach(function(item) {
    _this.timeline.from(item, 0.5 , { scale: 4.5, autoAlpha: 0, ease: Bounce.easeOut })
      .to(item, 0.4, { autoAlpha: 0 }, '+=0.3');
    });
    this.timeline.set(this.logo, { scale: 4.5, autoAlpha: 0, ease: Bounce.easeOut })
      .to(this.logo, 1 , { scale: 1, autoAlpha: 1, ease: Bounce.easeOut });


};
