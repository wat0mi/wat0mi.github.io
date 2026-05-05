(function () {
  "use strict";

  /* ---- Discord copy-to-clipboard ---- */
  var btn = document.getElementById("discord-btn");
  if (btn) {
    var hideTimer = null;

    var fallbackCopy = function (text) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    };

    var showCopied = function () {
      btn.classList.add("copied");
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        btn.classList.remove("copied");
      }, 1200);
    };

    btn.addEventListener("click", function () {
      var handle = btn.getAttribute("data-handle") || "";
      if (!handle) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(handle).then(showCopied, function () {
          fallbackCopy(handle);
          showCopied();
        });
      } else {
        fallbackCopy(handle);
        showCopied();
      }
    });
  }

  /* ---- background music toggle ---- */
  var music = document.getElementById("music-toggle");
  var audio = document.getElementById("bg-audio");
  var label = document.getElementById("music-label");
  if (music && audio) {
    audio.volume = 0.55;

    var setPlaying = function (playing) {
      music.classList.toggle("is-playing", playing);
      music.setAttribute("aria-pressed", playing ? "true" : "false");
      if (label) label.textContent = playing ? "pause" : "play";
    };

    music.addEventListener("click", function () {
      if (audio.paused) {
        var p = audio.play();
        if (p && typeof p.then === "function") {
          p.then(function () { setPlaying(true); })
           .catch(function () { setPlaying(false); });
        } else {
          setPlaying(true);
        }
      } else {
        audio.pause();
        setPlaying(false);
      }
    });

    audio.addEventListener("play",  function () { setPlaying(true);  });
    audio.addEventListener("pause", function () { setPlaying(false); });
    audio.addEventListener("ended", function () { setPlaying(false); });
  }
})();
