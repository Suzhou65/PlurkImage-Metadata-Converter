(function() {
  $(function() {
    var base62, pattern1;
    base62 = function(target) {
      var arr, q, u;
      arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
      u = arr.length;
      return q = target.split('').reverse().reduce(function(a, b, index) {
        return a += arr.indexOf(b) * Math.pow(u, index);
      }, 0);
    };
    pattern1 = /https:\/\/images.plurk.com\/.{16}(.{4})\.(png|gif|jpg|jpeg|bmp)/;
    return $('#send').click(function() {
      var id, matched, val;
      val = $('#q').val();
      if (matched = val.match(pattern1)) {
        id = base62(matched[1]);
        $('#iframe').attr({
          src: "https://www.plurk.com/getWidget?uid=" + id
        });
        return $('#callback').html("ACCESS GRANTED");
      } else {
        $('#iframe').attr({
          src: "about:blank"
        });
        return $('#callback').html("ACCESS DENIED");
      }
    });
  });

}).call(this);