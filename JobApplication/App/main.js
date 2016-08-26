"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var AppStart_component_1 = require('./Comman/AppStart.component');
var http_1 = require('@angular/http');
var app_route_1 = require('./app.route');
platform_browser_dynamic_1.bootstrap(AppStart_component_1.EndUserStart, [http_1.HTTP_PROVIDERS, app_route_1.appRouterProviders]);
//# sourceMappingURL=main.js.map