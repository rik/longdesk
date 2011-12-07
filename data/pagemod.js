(function () {
    var imgs = document.querySelectorAll('img[longdesc]');
    
    if (imgs.length == 0)
        return;
    
    self.postMessage('load-styles');
    self.on('message', function (data) {
        if (data.styles) {
            var style = document.createElement('style');
            style.appendChild(document.createTextNode(data.styles));
            document.head.appendChild(style);
        }
    })
    
    for (var i=0, il=imgs.length; i < il; i++) {
        var img = imgs[i];
        if(img.getAttribute("longdesc").toString().length>0) {
            var a = document.createElement('a');
            a.classList.add('longdesc-addon-link');
            a.href = imgs[i].getAttribute('longdesc');
            a.appendChild(document.createTextNode('Description'));
        
            var top = img.offsetTop + img.height;
            a.style.top = top + "px";
            a.style.left = img.offsetLeft + "px";
        
            img.parentNode.insertBefore(a, img.nextSibling);
        
        }
    }
})();