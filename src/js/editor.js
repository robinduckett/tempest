var textarea = document.getElementById('edit');

var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'darcula',
    indentUnit: 4,
    scrollbarStyle: 'native',
    autofocus: true,
    flattenSpans: true
});