import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private logger: NGXLogger) {
    this.logger.trace('TRACE level');
    this.logger.debug('DEBUG level');
    this.logger.info('INFO level');
    this.logger.warn('WARN level');
    this.logger.error('ERROR level');
    this.logger.fatal('FATAL level');
  }

}
