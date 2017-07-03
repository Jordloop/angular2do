//This file is responsible for instructing Angular's SystemsJS tool exacly how to assemble our application when we launch it.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
