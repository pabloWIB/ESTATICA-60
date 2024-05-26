var ie = (!!navigator.userAgent.match(/Trident\/7\./)) ? .5 : 1,
      perspective = 1000,
      duration = 5,
      animation = new TimelineMax({repeat: -1});



    new TimelineMax()
      .set($("#box"), {perspective: perspective*ie})
      .set($(".box"), {transformStyle: "preserve-3d"})
      .set($(".box div"), {transformPerspective: perspective*ie})
      .set($(".back"), {rotationY: 180})
      .set($(".right"), {rotationY:270})
      .set($(".left"), {rotationY:90})
      .set($(".top"), {rotationX: 90})
      .set($(".bottom"), {rotationX:270})

    setParametersBox(100, 100, 100)
    animateAngle(360, 360, 360);


    function setParametersBox(width, height, depth) {
      new TimelineMax()

//        default parameters box
        .set([$(".box"),$("#box")], {width: width, height: height})
        .set($(".box div"), {transformOrigin: '50% 50% -'+depth/2+'px'})

//        set parameters wall box
        .set($(".front"), {width: width, height: height, lineHeight: height+'px'})
        .set($(".back"), {width: width, height: height, lineHeight: height+'px'})
        .set($(".right"), {width: depth, height: height, left: (width-depth)/2, z: (width-depth)/2, transformOrigin: '50% 50% -'+width/2+'px', lineHeight: height+'px'})
        .set($(".left"), {width: depth, height: height, left: (width-depth)/2, z: (width-depth)/2, transformOrigin: '50% 50% -'+width/2+'px', lineHeight: height+'px'})
        .set($(".top"), {width: width, height: depth, top: (height-depth)/2, z: (height-depth)/2, transformOrigin: '50% 50% -'+height/2+'px', lineHeight: depth+'px'})
        .set($(".bottom"), {width: width, height: depth, top: (height-depth)/2, z: (height-depth)/2, transformOrigin: '50% 50% -'+height/2+'px', lineHeight: depth+'px'})
    }

    function animateAngle(x,y,z) {
      animation
        .clear()
        .to($(".front"), duration, {rotationX: x, rotationY: y, rotationZ: z, ease: Linear.easeNone})
        .to($(".back"), duration, {rotationX: -x, rotationY: 180+y, rotationZ: z, ease: Linear.easeNone}, 0, 0)
        .to($(".top"), duration, {rotationX: 90+x, rotationY: y, rotationZ: z, ease: Linear.easeNone}, 0, 0)
        .to($(".bottom"), duration, {rotationX: 270+x, rotationY: y, rotationZ: z, ease: Linear.easeNone}, 0, 0)
        .to($(".left"), duration, {rotationY: 90+y, rotationZ: z, ease: Linear.easeNone}, 0, 0)
        .to($(".left div"), duration, {rotationZ: x, ease: Linear.easeNone}, 0, 0)
        .to($(".right"), duration, {rotationY: 270+y, rotationZ: z, ease: Linear.easeNone}, 0, 0)
        .to($(".right div"), duration, {rotationZ: -x, ease: Linear.easeNone}, 0, 0);
    }