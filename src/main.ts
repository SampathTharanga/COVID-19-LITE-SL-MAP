// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐ \\
// │ Powerd by : Sampath Tharanga                                                                          │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Email     : sampaththaranga13@gmail.com                                                               │ \\
// │ Website   : http://www.athaebula.com/                                                                 │ \\ 
// │ Facebook  : https://www.facebook.com/sampath.tharanga.50                                              │ \\
// │ Twitter   : https://twitter.com/sampath13331                                                          │ \\
// │ Linkdin   : https://www.linkedin.com/in/sampath-tharanga-b842b869/                                    │ \\
// │ Github    : https://github.com/SampathTharanga                                                        │ \\
// │                                                                                                       │ \\
// │ Project   : COVID - 19 SL LITE MAP                                                                    │ \\
// │ Version   : 1.0.0.0                                                                                   │ \\
// │ Release   : 2020.04.27                                                                                │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ SAMPATH THARANGA | SRMST SAMARADIWAKARA                                            Copyright © 2020   │ \\
// └───────────────────────────────────────────────────────────────────────────────────────────────────────┘ \\



import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

