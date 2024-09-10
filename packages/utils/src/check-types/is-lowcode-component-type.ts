import { isProCodeComponentType } from './is-procode-component-type';
import { IPublicTypeComponentMap, IPublicTypeLowCodeComponent } from '@lce/lowcode-types';

export function isLowCodeComponentType(
  desc: IPublicTypeComponentMap,
): desc is IPublicTypeLowCodeComponent {
  return !isProCodeComponentType(desc);
}
