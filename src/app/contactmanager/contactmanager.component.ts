import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatGridAvatarCssMatStyler } from '@angular/material/grid-list';

@Component({
  selector: 'app-contactmanager',
  template: '<app-sidenav></app-sidenav>',
  styles: []
})
export class ContactmanagerComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
   }

  ngOnInit(): void {
  }

}
