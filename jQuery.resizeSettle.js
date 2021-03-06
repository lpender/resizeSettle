/*!
 * resizeSettle alpha 1 // 2013.08.13 // jQuery 1.9.1+
 * http://www.github.com/lpender/resizeSettle
 *
 * You may use resizeSettle under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2013, Lee Pender
 */

/** resizeSettle solves the problem created when a user resizes a window and a
 * resize event is unnecessarily called potentially hundreds or thousands of times.
 * resizeSettle waits for the user to stop resizing a window or object before firing,
 * and fires only once.
 *
 * // basic usage ... just like .resize()
 * .resizeSettle( handler, [delay] )
 *
 *
 * @param  handler   function to pass the resize event to
 * @author Lee Pender <lpender(at)gmail(dot)com>
 */
(function($) {
    $.fn.resizeSettle = function(settleHandler, delay) {
        "use strict";
        // default configuration values
        var _delay = parseInt(delay, 10) || 500,
            _timeoutId;

        // handle resize of object
        function resizeHandler(ev) {
            if (_timeoutId) clearTimeout(_timeoutId);

            _timeoutId = setTimeout(function() {
                settleHandler.call(this, ev);
            }, _delay);
        }

        return this.on({'resize.resizeSettle': resizeHandler});
    };
})(jQuery);
