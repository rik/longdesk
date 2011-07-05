const pageMod = require("page-mod");
const data = require("self").data;

exports.main = function() {
    pageMod.PageMod({
        include: ["*"],
        contentScriptFile: data.url('pagemod.js'),
        onAttach: function onAttach(worker) {
            worker.on('message', function(message) {
              if (message == 'load-styles') {
                  worker.postMessage({styles: data.load('style.css')});
              }
            });
        }
    });
}