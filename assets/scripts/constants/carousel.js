const CAROUSEL_DEFAULT_ARGS = ({
    modules,
    $prevButton,
    $nextButton,
    updateCallback
} = {
    modules: [],
    $prevButton: null,
    $nextButton: null,
    updateCallback: () => {},
}) => {
    return {
        modules: modules,
        speed: 400,
        loop: false,
        spaceBetween: 10,
        a11y: true,
        slidesPerView: 1.1,
        navigation: {
            prevEl: $prevButton,
            nextEl: $nextButton,
        },
        breakpoints: {
            700: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            1000: {
                slidesPerView: 3.2,
            },
        },
        on: {
            init: updateCallback,
            breakpoint: updateCallback,
            destroy: updateCallback,
        },
    };
};

const CAROUSEL_HERO_ARGS = ({
    modules,
    $pagination,
    updateCallback
} = {
    modules: [],
    $pagination: null,
    updateCallback: () => {},
}) => {
    return {
        modules: modules,
        speed: 600,
        loop: true,
        spaceBetween: 10,
        a11y: true,
        slidesPerView: 1,
        pagination: {
            el: $pagination,
            clickable: true
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        breakpoints: {
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 0,
            }
        },
        on: {
            init: updateCallback,
            breakpoint: updateCallback,
            destroy: updateCallback,
        },
    };
};

export {
    CAROUSEL_DEFAULT_ARGS,
    CAROUSEL_HERO_ARGS
};