<img src="assets/uikit-md-banner.png" alt="Solis UI Kit ngx">

<center>
El kit de interfaz basado en componentes para Angular provee una librería de componentes ya preparados para su uso.
</center>

## Importando
Para comenzar a usar el kit, debe instalarlo como dependencia:

	npm i @solis/uikit

Posteriormente deberá realizar la importación en su ```app.module```:

```TypeScript
import { UikitModule } from '@solis/uikit';

@NgModule([
    ...
    imports: [
        UikitModule
    ],
    ...
])
```