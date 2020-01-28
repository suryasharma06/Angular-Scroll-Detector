import { Injectable, ɵɵdefineInjectable, Component, EventEmitter, Directive, Output, HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll-detector.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgScrollDetectorService = /** @class */ (function () {
    function NgScrollDetectorService() {
    }
    NgScrollDetectorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgScrollDetectorService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgScrollDetectorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgScrollDetectorService_Factory() { return new NgScrollDetectorService(); }, token: NgScrollDetectorService, providedIn: "root" });
    return NgScrollDetectorService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll-detector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgScrollDetectorComponent = /** @class */ (function () {
    function NgScrollDetectorComponent() {
    }
    /**
     * @return {?}
     */
    NgScrollDetectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgScrollDetectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ng-scroll-detector',
                    template: "\n    <p>\n      ng-scroll-detector works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    NgScrollDetectorComponent.ctorParameters = function () { return []; };
    return NgScrollDetectorComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var elemntscrollTracker = /** @class */ (function () {
    function elemntscrollTracker() {
        this.scrolled = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    elemntscrollTracker.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // do tracking
        // console.log('scrolled', event.target.scrollTop);
        // Listen to click events in the component
        /** @type {?} */
        var tracker = event.target;
        /** @type {?} */
        var endReachedVerticle = false;
        /** @type {?} */
        var endReachedHorizontal = false;
        /** @type {?} */
        var limitVerticle = tracker.scrollHeight - tracker.clientHeight;
        /** @type {?} */
        var limitHorizontal = tracker.scrollWidth - tracker.clientWidth;
        // alert(event.target.scrollLeft);
        // console.log(event.target.scrollTop, limitVerticle);
        if (event.target.scrollTop === limitVerticle) {
            // alert('end reached');
            endReachedVerticle = true;
        }
        if (event.target.scrollLeft === limitHorizontal) {
            // alert('end reached bottom');
            endReachedHorizontal = true;
        }
        this.scrolled.emit({
            posVerticle: event.target.scrollTop,
            endReachedVerticle: endReachedVerticle,
            posHorizontal: event.target.scrollLeft,
            endReachedHorizontal: endReachedHorizontal
        });
    };
    elemntscrollTracker.decorators = [
        { type: Directive, args: [{
                    selector: '[elemntscrollTracker]',
                },] }
    ];
    elemntscrollTracker.propDecorators = {
        scrolled: [{ type: Output }],
        onScroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
    };
    return elemntscrollTracker;
}());
if (false) {
    /** @type {?} */
    elemntscrollTracker.prototype.scrolled;
}
var htmlbodyscrollTracker = /** @class */ (function () {
    function htmlbodyscrollTracker() {
        this.bodyscrolled = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    htmlbodyscrollTracker.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var verticalOffset = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0;
        /** @type {?} */
        var HorizontalOffset = window.pageXOffset
            || document.documentElement.scrollLeft
            || document.body.scrollLeft || 0;
        this.bodyscrolled.emit({
            verticalOffset: verticalOffset,
            HorizontalOffset: HorizontalOffset,
        });
    };
    htmlbodyscrollTracker.decorators = [
        { type: Directive, args: [{
                    selector: '[htmlbodyscrollTracker]',
                },] }
    ];
    htmlbodyscrollTracker.propDecorators = {
        bodyscrolled: [{ type: Output }],
        onScroll: [{ type: HostListener, args: ['window:scroll', ['$event'],] }]
    };
    return htmlbodyscrollTracker;
}());
if (false) {
    /** @type {?} */
    htmlbodyscrollTracker.prototype.bodyscrolled;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll-detector.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgScrollDetectorModule = /** @class */ (function () {
    function NgScrollDetectorModule() {
    }
    NgScrollDetectorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgScrollDetectorComponent, elemntscrollTracker, htmlbodyscrollTracker],
                    imports: [
                        CommonModule, BrowserModule
                    ],
                    exports: [NgScrollDetectorComponent, elemntscrollTracker, htmlbodyscrollTracker]
                },] }
    ];
    return NgScrollDetectorModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-scroll-detector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgScrollDetectorComponent, NgScrollDetectorModule, NgScrollDetectorService, elemntscrollTracker, htmlbodyscrollTracker };
//# sourceMappingURL=ng-scroll-detector.js.map
