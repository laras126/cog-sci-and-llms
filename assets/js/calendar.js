(function () {
  var blocks = Array.from(document.querySelectorAll('[data-week-date]'));
  if (!blocks.length) return;

  var now = new Date();
  var target = blocks[blocks.length - 1];

  for (var i = 0; i < blocks.length; i++) {
    var cutoff = new Date(blocks[i].dataset.weekDate + 'T20:00:00-04:00');
    if (now < cutoff) {
      target = blocks[i];
      break;
    }
  }

  var clone = target.cloneNode(true);
  clone.removeAttribute('data-week-date');
  clone.querySelectorAll('[id]').forEach(function (el) { el.removeAttribute('id'); });

  document.getElementById('next-class-content').appendChild(clone);
  document.getElementById('next-class').style.display = '';
})();
