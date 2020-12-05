// 5-12-2020
"use strict";
function levusReadmore(selector, height) {
    var word = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'розгорнути';

    document.querySelectorAll(selector).forEach(function (item) {
        var h = item.offsetHeight;

        if (h > height) {
            item.style.cssText = "height:".concat(height, "px;overflow:hidden;position:relative");

            var element = document.createElement('div');
            element.className = 'levus-readmore';
            // element.style.cssText = 'padding:5px;border:1px solid green;background:white;text-align:center;position:absolute;left:0;bottom:0;width:100%;cursor:pointer;overflow:hidden';
            element.textContent = word;

            item.append(element);
        }

        item.addEventListener('click', function (e) {
            if (e.target.className == 'levus-readmore') {
            item.style.cssText = '';
            e.target.style.display = 'none';
            }
        });
    });
}

levusReadmore('#example p', 100);