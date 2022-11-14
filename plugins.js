plugins = ["bgchanger", "2", "3", "chooser", "tag adder", "save page", "bg"]

function $(selector) {
  return document.querySelector(selector)
}

let program = document.createElement('div');
program.className = "program"
//program.style.display = "none"
// https://asdafasdgfdas.netlify.app/
programs = `

  <link href="https://waylite.github.io/test1/1.css" rel="stylesheet">
  <div class="script"></div>
  <div class="plugins"></div>
`
program.innerHTML = programs

$("body").append(program)



function create(m, name, win) {
  console.log($(`.plugin.${name.replaceAll(" ", "_")}`))
  if (m == "window" && $(`.plugin.${name.replaceAll(" ", "_")}`) == null) {
    name = name.replaceAll(" ", "_")
    let div = document.createElement('div');
    div.innerHTML = win
    div.className = `plugin ${name}`
    document.querySelector(".plugins").append(div)
  }

}

document.addEventListener("keyup", switcher)

function switcher(e) {
  if (e.code == "Insert") {
    console.log(e.code)
    a = $(".program").style
    if (a.display == "") {
      a.display = "none"
    } else {
      a.display = ""
    }
  }

}
let a;
function load_plugin(name) {
  if ($(`.plugin.${name.replaceAll(" ", "_")}`) == null) {
    let script = document.createElement('script');
    script.src = `https://asdafasdgfdas.netlify.app/plugins/${name}.js`
    // script.src = `plugins/${name}.js`
    name = name.replaceAll(" ", "_")
    //script.className = name
    document.querySelector(".script").append(script)
    // a = window.open('about:', name,'width=800,height=500')
    // window.origin = "allow-same-origin allow-forms allow-modals allow-scripts"
    // a.origin = ""
    //console.log(a)
    // a.document.body.append(script)
    //

  }

}

abcc = 'accent-color:auto;align-content:normal;align-items:normal;align-self:auto;alignment-baseline:auto;animation-delay:0s;animation-direction:normal;animation-duration:0s;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;app-region:none;appearance:none;backdrop-filter:none;backface-visibility:visible;background-attachment:scroll;background-blend-mode:normal;background-clip:border-box;background-color:rgb(251, 255, 20);background-image:none;background-origin:padding-box;background-position:0% 0%;background-repeat:repeat;background-size:auto;baseline-shift:0px;block-size:918px;border-block-end-color:rgb(0, 0, 0);border-block-end-style:none;border-block-end-width:0px;border-block-start-color:rgb(0, 0, 0);border-block-start-style:none;border-block-start-width:0px;border-bottom-color:rgb(0, 0, 0);border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-bottom-style:none;border-bottom-width:0px;border-collapse:separate;border-end-end-radius:0px;border-end-start-radius:0px;border-image-outset:0;border-image-repeat:stretch;border-image-slice:100%;border-image-source:none;border-image-width:1;border-inline-end-color:rgb(0, 0, 0);border-inline-end-style:none;border-inline-end-width:0px;border-inline-start-color:rgb(0, 0, 0);border-inline-start-style:none;border-inline-start-width:0px;border-left-color:rgb(0, 0, 0);border-left-style:none;border-left-width:0px;border-right-color:rgb(0, 0, 0);border-right-style:none;border-right-width:0px;border-start-end-radius:0px;border-start-start-radius:0px;border-top-color:rgb(0, 0, 0);border-top-left-radius:0px;border-top-right-radius:0px;border-top-style:none;border-top-width:0px;bottom:auto;box-shadow:none;box-sizing:content-box;break-after:auto;break-before:auto;break-inside:auto;buffered-rendering:auto;caption-side:top;caret-color:rgb(0, 0, 0);clear:none;clip:auto;clip-path:none;clip-rule:nonzero;color:rgb(0, 0, 0);color-interpolation:srgb;color-interpolation-filters:linearrgb;color-rendering:auto;column-count:auto;column-gap:normal;column-rule-color:rgb(0, 0, 0);column-rule-style:none;column-rule-width:0px;column-span:none;column-width:auto;contain-intrinsic-block-size:none;contain-intrinsic-height:none;contain-intrinsic-inline-size:none;contain-intrinsic-size:none;contain-intrinsic-width:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:block;dominant-baseline:auto;empty-cells:show;fill:rgb(0, 0, 0);fill-opacity:1;fill-rule:nonzero;filter:none;flex-basis:auto;flex-direction:row;flex-grow:0;flex-shrink:1;flex-wrap:nowrap;float:none;flood-color:rgb(0, 0, 0);flood-opacity:1;font-family:"Times New Roman";font-kerning:auto;font-optical-sizing:auto;font-palette:normal;font-size:16px;font-stretch:100%;font-style:normal;font-synthesis-small-caps:auto;font-synthesis-style:auto;font-synthesis-weight:auto;font-variant:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;grid-auto-columns:auto;grid-auto-flow:row;grid-auto-rows:auto;grid-column-end:auto;grid-column-start:auto;grid-row-end:auto;grid-row-start:auto;grid-template-areas:none;grid-template-columns:none;grid-template-rows:none;height:918px;hyphens:manual;image-orientation:from-image;image-rendering:auto;inline-size:1064px;inset-block-end:auto;inset-block-start:auto;inset-inline-end:auto;inset-inline-start:auto;isolation:auto;justify-content:normal;justify-items:normal;justify-self:auto;left:auto;letter-spacing:normal;lighting-color:rgb(255, 255, 255);line-break:auto;line-height:normal;list-style-image:none;list-style-position:outside;list-style-type:disc;margin-block-end:8px;margin-block-start:8px;margin-bottom:8px;margin-inline-end:8px;margin-inline-start:8px;margin-left:8px;margin-right:8px;margin-top:8px;marker-end:none;marker-mid:none;marker-start:none;mask-type:luminance;max-block-size:none;max-height:none;max-inline-size:none;max-width:none;min-block-size:0px;min-height:0px;min-inline-size:0px;min-width:0px;mix-blend-mode:normal;object-fit:fill;object-position:50% 50%;object-view-box:none;offset-distance:0px;offset-path:none;offset-rotate:auto 0deg;opacity:1;order:0;orphans:2;outline-color:rgb(0, 0, 0);outline-offset:0px;outline-style:none;outline-width:0px;overflow-anchor:auto;overflow-clip-margin:0px;overflow-wrap:normal;overflow-x:visible;overflow-y:visible;overscroll-behavior-block:auto;overscroll-behavior-inline:auto;padding-block-end:0px;padding-block-start:0px;padding-bottom:0px;padding-inline-end:0px;padding-inline-start:0px;padding-left:0px;padding-right:0px;padding-top:0px;paint-order:normal;perspective:none;perspective-origin:532px 459px;pointer-events:auto;position:static;r:0px;resize:none;right:auto;rotate:none;row-gap:normal;ruby-position:over;rx:auto;ry:auto;scale:none;scroll-behavior:auto;scroll-margin-block-end:0px;scroll-margin-block-start:0px;scroll-margin-inline-end:0px;scroll-margin-inline-start:0px;scroll-padding-block-end:auto;scroll-padding-block-start:auto;scroll-padding-inline-end:auto;scroll-padding-inline-start:auto;scrollbar-gutter:auto;shape-image-threshold:0;shape-margin:0px;shape-outside:none;shape-rendering:auto;speak:normal;stop-color:rgb(0, 0, 0);stop-opacity:1;stroke:none;stroke-dasharray:none;stroke-dashoffset:0px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-width:1px;tab-size:8;table-layout:auto;text-align:start;text-align-last:auto;text-anchor:start;text-decoration:none solid rgb(0, 0, 0);text-decoration-color:rgb(0, 0, 0);text-decoration-line:none;text-decoration-skip-ink:auto;text-decoration-style:solid;text-emphasis-color:rgb(0, 0, 0);text-emphasis-position:over;text-emphasis-style:none;text-indent:0px;text-overflow:clip;text-rendering:auto;text-shadow:none;text-size-adjust:auto;text-transform:none;text-underline-position:auto;top:auto;touch-action:auto;transform:none;transform-origin:532px 459px;transform-style:flat;transition-delay:0s;transition-duration:0s;transition-property:all;transition-timing-function:ease;translate:none;unicode-bidi:normal;user-select:auto;vector-effect:none;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:1064px;will-change:auto;word-break:normal;word-spacing:0px;writing-mode:horizontal-tb;x:0px;y:0px;z-index:auto;zoom:1;-webkit-border-horizontal-spacing:0px;-webkit-border-image:none;-webkit-border-vertical-spacing:0px;-webkit-box-align:stretch;-webkit-box-decoration-break:slice;-webkit-box-direction:normal;-webkit-box-flex:0;-webkit-box-ordinal-group:1;-webkit-box-orient:horizontal;-webkit-box-pack:start;-webkit-box-reflect:none;-webkit-font-smoothing:auto;-webkit-highlight:none;-webkit-hyphenate-character:auto;-webkit-line-break:auto;-webkit-line-clamp:none;-webkit-locale:auto;-webkit-mask-box-image:none;-webkit-mask-box-image-outset:0;-webkit-mask-box-image-repeat:stretch;-webkit-mask-box-image-slice:0 fill;-webkit-mask-box-image-source:none;-webkit-mask-box-image-width:auto;-webkit-mask-clip:border-box;-webkit-mask-composite:source-over;-webkit-mask-image:none;-webkit-mask-origin:border-box;-webkit-mask-position:0% 0%;-webkit-mask-repeat:repeat;-webkit-mask-size:auto;-webkit-print-color-adjust:economy;-webkit-rtl-ordering:logical;-webkit-tap-highlight-color:rgba(0, 0, 0, 0.18);-webkit-text-combine:none;-webkit-text-decorations-in-effect:none;-webkit-text-fill-color:rgb(0, 0, 0);-webkit-text-orientation:vertical-right;-webkit-text-security:none;-webkit-text-stroke-color:rgb(0, 0, 0);-webkit-text-stroke-width:0px;-webkit-user-drag:auto;-webkit-user-modify:read-only;-webkit-writing-mode:horizontal-tb;'

function dumpCSSText(element){
  var s = '';
  var b = '';
  var o = getComputedStyle(element);
  for(var i = 0; i < o.length; i++){
    b+=o[i] + ':' + o.getPropertyValue(o[i])+';';
    console.log(b, abcc.search(b))
    if (abcc.search(b) != -1) {s+=b;console.log(b)}
    b = ""
  }
  //return s;
}

// function dumpCSSText(element){
//   var s = '';
//   var b = '';
//   var o = getComputedStyle(element);
//   for(var i = 0; i < o.length; i++){
//     b+=o[i] + ':' + o.getPropertyValue(o[i])+';';
//     //console.log(b, a.search(b))
//     if (a.search(b) == -1) {s+=b;console.log(b)}
//     b = ""
//   }
//   //return s;
// }

function load_plugin_from_url(name) {
  //if ($(`.plugin.${name.replaceAll(" ", "_")}`) == null) {
    let script = document.createElement('script');
    // script.src = `https://asdafasdgfdas.netlify.app/plugins/${name}.js`
    url = name.replace("github", "raw.githubusercontent").replace("blob/", "")
    console.log(url)
    script.src = url
    //name = name.replaceAll(" ", "_")
    //script.className = name
    document.querySelector(".script").append(script)
  //}

}

for (let i = 0;i < plugins.length;i++) {
  p = document.createElement("p")
  p.innerText = plugins[i]
  // p.draggable = true
  $(".plugins").append(p)
}

function load() {
  $(".plugins").onclick = e => {
    if (e.target.tagName == "P") {
      load_plugin(e.target.innerText)
    }
  }
  // keys = Object.keys(win);
  // let link = document.createElement('link');
  // link.href = "https://asdafasdgfdas.netlify.app/1.css"
  // link.rel = "stylesheet"
  // document.querySelector("head").append(link)


}

document.addEventListener("DOMContentLoaded", load);
