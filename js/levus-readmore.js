// 5-12-2020
function levusReadmore(selector, height, word = 'розгорнути'){

    // клас або айді
    document.querySelectorAll(selector).forEach(item => {

        // height selector
        const h = item.offsetHeight;

        if(h > height){

            // add styles
            item.style.cssText = `height:${height}px;overflow:hidden;position:relative`;

            // create button
            const element = document.createElement('div');
            element.className = 'levus-readmore';
            // element.style.cssText = 'padding:5px;border:1px solid green;background:white;text-align:center;position:absolute;left:0;bottom:0;width:100%;cursor:pointer;overflow:hidden';
            element.textContent = word;

            // add button
            item.append(element);
        }

        item.addEventListener('click', e =>{
            if(e.target.className == 'levus-readmore'){
                item.style.cssText = '';
                e.target.style.display = 'none';
            }
        });        
    });

}

levusReadmore('#example p', 50);