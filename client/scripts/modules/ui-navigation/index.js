module.exports = {
    init: function(el) {
        var $toggler = el.find('#navigation-toggle');

        if (!$toggler.length) return;

        $toggler.on('click', function(e) {
            e.preventDefault();
            el.toggleClass('open');
        });
    }
};
