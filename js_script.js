function startLogic() {
    var newHtml = '<em>New Header</em>';
    document.getElementById('headerItem').innerHTML = newHtml;
}
startLogic();
function clickHandler() {
alert('You clicked me!');
}

var $elem = document.getElementById('output');  
$elem.innerHTML += 4 + 6 + ' Demo';
//$elem.innerHTML += 'Demo ' + 4 + 6
//$elem.innerHTML += 'Demo ' + (4 + 6)