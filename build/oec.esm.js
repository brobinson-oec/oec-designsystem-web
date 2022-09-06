import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-6b788f04.js';
import { g as globalScripts } from './app-globals-9393530e.js';

/*
 Stencil Client Patch Browser v2.17.1 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-551d7421.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["oec-nav",[[1,"oec-nav",{"userId":[1,"user-id"],"enabledApps":[16],"missedNotifications":[32],"missedMessages":[32]},[[4,"totalNotificationsChanged","getChangedValue"]]]]],["oec-overlay-container",[[2,"oec-overlay-container",{"overlayRefs":[32],"addOverlay":[64],"removeOverlay":[64]},[[9,"keydown","closeWithEscapeKey"]]]]],["oec-modal",[[4,"oec-modal",{"type":[1],"size":[1],"visible":[1028]}]]],["oec-button",[[1,"oec-button",{"type":[1],"disabled":[4]}]]],["oec-nav-search",[[1,"oec-nav-search",{"isMouseOver":[32],"isForcedOpen":[32],"isFocused":[32]},[[1,"mouseover","handleMouseOver"],[1,"mouseout","handleMouseOut"],[1,"keydown","handleKeyDown"]]]]],["oec-overlay-item",[[2,"oec-overlay-item",{"overlayConfig":[16],"isVisible":[32],"show":[64],"hide":[64],"isShowing":[64],"getBackdropElement":[64],"getPaneElement":[64]}]]],["oec-notification-items",[[1,"oec-notification-items",{"notificationItems":[16],"appUrl":[1,"app-url"]}]]],["oec-notifications-settings",[[1,"oec-notifications-settings"]]],["oec-notifications",[[1,"oec-notifications",{"enabledApps":[16],"companyId":[1,"company-id"],"userId":[1,"user-id"],"carouselOffset":[32],"appListWidth":[32],"selectedApp":[32],"notifications":[32]}]]],["oec-app-launcher",[[1,"oec-app-launcher",{"enabledApps":[16],"allowedApps$":[32]}]]],["oec-header",[[4,"oec-header",{"level":[2]}]]],["oec-nav-locate",[[1,"oec-nav-locate"]]],["oec-nav-menu-action",[[1,"oec-nav-menu-action",{"isClickable":[4,"is-clickable"],"badgeTotal":[2,"badge-total"]}]]],["oec-user-icon",[[1,"oec-user-icon",{"userId":[1,"user-id"],"userInfo":[32],"initials":[32]}]]],["oec-overlay-content",[[2,"oec-overlay-content",{"overlayConfig":[16],"hide":[16]}]]],["oec-overlay-pane",[[2,"oec-overlay-pane",{"overlayConfig":[16],"hide":[16],"getArrowElement":[64]},[[1,"click","handleClick"]]]]],["oec-app-card",[[1,"oec-app-card",{"appDefinition":[16]}]]],["oec-overlay-backdrop",[[2,"oec-overlay-backdrop",{"overlayConfig":[16],"hide":[16],"isShowing":[16]},[[1,"click","close"]]]]],["oec-overlay-arrow",[[2,"oec-overlay-arrow",{"overlayConfig":[16]}]]]], options);
});
