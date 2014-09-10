module.exports = {
    $window: $(window),
    // centering function from Chris Coyier
    // http://css-tricks.com/perfect-full-page-background-image/
    resize: function(el) {
        var aspectRatio = el.width() / el.height();

        if ( (this.$window.width() / this.$window.height()) < aspectRatio ) {
            var pullLeft = (aspectRatio * this.$window.height() - this.$window.width()) / -2;
            el
                .removeClass('full-width')
                .addClass('full-height');
            el.css('left', pullLeft);
        } else {
            el
                .removeClass('full-height')
                .addClass('full-width');
            el.css('left', 0);
        }
    }
};
