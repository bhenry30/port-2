function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        // duration: '100%',
        offset: 0,
        triggerHook: 0
    })
    .setPin('.about-name')
    .addIndicators()
    .addTo(controller)
}

splitScroll()