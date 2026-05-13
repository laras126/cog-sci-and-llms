document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.reading-text').forEach(function (el) {
    var text = el.textContent;
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    var fragment = document.createDocumentFragment();
    var lastIndex = 0;
    var match;
    while ((match = urlRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }
      var a = document.createElement('a');
      a.href = match[1];
      a.textContent = match[1];
      fragment.appendChild(a);
      lastIndex = match.index + match[1].length;
    }
    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }
    el.textContent = '';
    el.appendChild(fragment);
  });
});
