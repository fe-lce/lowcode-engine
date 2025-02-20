import { isValidElement, ReactNode, createElement, cloneElement } from 'react';
import { Icon } from '@alifd/next';
import { IPublicTypeIconConfig, IPublicTypeIconType } from '@felce/lowcode-types';
import { isReactComponent } from './is-react';
import { isESModule } from './is-es-module';

const URL_RE = /^(https?:)\/\//i;

export function createIcon(
  icon?: IPublicTypeIconType | null,
  props?: Record<string, unknown>,
): ReactNode {
  if (!icon) {
    return null;
  }
  if (isESModule(icon)) {
    icon = icon.default;
  }
  if (typeof icon === 'string') {
    if (URL_RE.test(icon)) {
      return createElement('img', {
        src: icon,
        className: props?.className,
        ...props,
      });
    }
    return <Icon type={icon} {...props} />;
  }
  if (isValidElement(icon)) {
    return cloneElement(icon, { ...props });
  }
  if (isReactComponent(icon)) {
    return createElement(icon, {
      className: props?.className,
      ...props,
    });
  }

  return <Icon {...(icon as IPublicTypeIconConfig)} {...props} />;
}
