document.getElementById('AddLink').addEventListener('click', function() {
    var link = document.getElementById('LinkInput').value;
    if (link) {
        var li = document.createElement('li');
        li.textContent = link;
        document.getElementById('LinkList').appendChild(li);
        document.getElementById('LinkInput').value = '';
    }
});