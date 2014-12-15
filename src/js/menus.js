var gui = require('nw.gui');
var win = gui.Window.get();

var nativeMenuBar = new gui.Menu({ type: 'menubar' });

nativeMenuBar.createMacBuiltin('Tempest');

var devMenu = new gui.Menu();

devMenu.append(new gui.MenuItem({
    label: 'Developer Tools',
    key: 'j',
    modifiers: 'cmd',
    click: function() {
        require('nw.gui').Window.get().showDevTools();
    }
}));

nativeMenuBar.append(new gui.MenuItem({
    label: 'Tools',
    submenu: devMenu
}));

win.menu = nativeMenuBar;