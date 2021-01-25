import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import * as mongoose from "mongoose";

if (environment.production) {
  enableProdMode();
}

// console.log('lol');

// async function s() {
//   try {
//     await mongoose.connect(environment.MONGODB_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useFindAndModify: false
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
//
// s();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
