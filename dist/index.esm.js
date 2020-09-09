import 'es6-object-assign/auto';

function checkWidth (el, binding) {
  var mirror = document.querySelector(".vue-input-autowidth-mirror-".concat(el.dataset.uuid));
  var defaults = {
    maxWidth: "none",
    minWidth: "none",
    comfortZone: 0
  };
  var options = Object.assign({}, defaults, binding.value);
  el.style.maxWidth = options.maxWidth;
  el.style.minWidth = options.minWidth;
  var val = el.value;

  if (!val) {
    val = el.placeholder || "";
  }

  while (mirror.childNodes.length) {
    mirror.removeChild(mirror.childNodes[0]);
  }

  mirror.appendChild(document.createTextNode(val));
  var newWidth = mirror.scrollWidth + options.comfortZone + 2;

  if (newWidth != el.scrollWidth) {
    el.style.width = "".concat(newWidth, "px");
  }
}

var directive = {
  beforeMount: function beforeMount(el) {
    if (el.tagName.toLocaleUpperCase() !== "INPUT") {
      throw new Error("v-input-autowidth can only be used on input elements.");
    }

    el.dataset.uuid = Math.random().toString(36).slice(-5);
    el.style.boxSizing = "content-box";
  },
  mounted: function mounted(el, binding, vnode) {
    var hasVModel = vnode.data.directives.some(function (directive) {
      return directive.name === "model";
    });
    var styles = window.getComputedStyle(el);
    el.mirror = document.createElement("div");
    Object.assign(el.mirror.style, {
      position: "absolute",
      top: "0",
      left: "0",
      visibility: "hidden",
      height: "0",
      overflow: "hidden",
      whiteSpace: "pre",
      fontSize: styles.fontSize,
      fontFamily: styles.fontFamily,
      fontWeight: styles.fontWeight,
      fontStyle: styles.fontStyle,
      letterSpacing: styles.letterSpacing,
      textTransform: styles.textTransform
    });
    el.mirror.classList.add("vue-input-autowidth-mirror-".concat(el.dataset.uuid));
    el.mirror.setAttribute("aria-hidden", "true");
    document.body.appendChild(el.mirror);
    checkWidth(el, binding);
    console.log('hasVModel', hasVModel);

    if (!hasVModel) {
      el.addEventListener("input", checkWidth.bind(null, el, binding));
    }
  },
  updated: function updated(el, binding) {
    checkWidth(el, binding);
  },
  unmounted: function unmounted(el) {
    document.body.removeChild(el.mirror);
    el.removeEventListener("input", checkWidth.bind(null, el, binding));
  }
};

var install = function install(Vue) {
  Vue.directive("autowidth", directive);
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}

directive.install = install;

export default directive;
