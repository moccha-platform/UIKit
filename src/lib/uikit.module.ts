/**
 * Solis UI Kit 0.0.1
 * Component UI Kit for Angular.
 * @author Marcos Rodríguez<marcosylrg@gmail.com>
 */
console.log('%c Solis UI Kit 0.0.1 ', 'color: white; background: black; border-right: 5px solid #0080FF; padding: 5px; font-size: 9pt; border-radius: 5px;')

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ExplanationMsgComponent } from './components/explanation-msg/explanation-msg.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';

@NgModule({
  declarations: [
    ExplanationMsgComponent,
    ListItemComponent,
    MessageBoxComponent,
    SidebarComponent,
    SpinnerComponent,
    SwitchComponent,
    TitleBarComponent
  ],
  imports: [ BrowserModule, CommonModule ],
  exports: [
    ExplanationMsgComponent,
    ListItemComponent,
    MessageBoxComponent,
    SidebarComponent,
    SpinnerComponent,
    SwitchComponent,
    TitleBarComponent
  ]
})

export class UikitModule { }