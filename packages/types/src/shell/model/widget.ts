import { ReactNode } from 'react';
import { IPublicTypeWidgetBaseConfig } from '../type';
import { IPublicApiSkeleton } from '../api';

export interface IPublicModelWidget {
  readonly name: string;
  readonly content: ReactNode;
  readonly align?: string;
  readonly isWidget: true;
  readonly visible: boolean;
  readonly disabled?: boolean;
  readonly body: ReactNode;
  readonly skeleton: IPublicApiSkeleton;
  readonly config: IPublicTypeWidgetBaseConfig;

  getName(): string;
  getContent(): any;
  show(): void;
  hide(): void;
  toggle(): void;
  enable?(): void;
  disable?(): void;
}
