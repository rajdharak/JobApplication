import { bootstrap }    from '@angular/platform-browser-dynamic';
import {EndUserStart} from './Comman/AppStart.component';
import { HTTP_PROVIDERS } from '@angular/http';
import {appRouterProviders}from './app.route';
bootstrap(EndUserStart, [HTTP_PROVIDERS, appRouterProviders]);

