window.onscroll = function(){var a = document.querySelectorAll("#dismissible.style-scope.ytd-video-renderer ytd-thumbnail a"); console.log(a.length); for (let i = 0; i < a.length; i++) {let e2 = a[i]; let eh=e2.href; if (eh.includes("shorts")) {e2.parentNode.parentNode.remove();}}}
