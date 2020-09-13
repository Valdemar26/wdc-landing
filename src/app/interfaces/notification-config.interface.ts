import { Subject } from 'rxjs';

export interface NotificationConfigInterface {
  label: string;
  color: string;
  timeout: number;
  component?: any;
  componentData?: any;
  panelClass?: string;
  forbidBackdropClose?: boolean;
  close?: Subject<any>;
  width?: string;
  height?: string;
}
