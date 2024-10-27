import { IPublicTypeNodeSchema, IPublicTypeRootSchema } from '@felce/lowcode-types';
import { Node } from '@felce/lowcode-designer';
import { Component, ComponentPublicInstance, PropType, VNodeProps } from 'vue';
import { BlockScope, I18nMessages, RuntimeScope } from '../utils';

export const rendererProps = {
  __scope: {
    type: Object as PropType<BlockScope>,
    default: undefined,
  },
  __schema: {
    type: Object as PropType<IPublicTypeRootSchema>,
    required: true,
  },
  __designMode: {
    type: String as PropType<'live' | 'design'>,
    default: 'live',
  },
  __components: {
    type: Object as PropType<Record<string, Component>>,
    required: true,
  },
  __locale: {
    type: String,
    default: undefined,
  },
  __messages: {
    type: Object as PropType<I18nMessages>,
    default: () => ({}),
  },
  __getNode: {
    type: Function as PropType<(id: string) => Node<IPublicTypeNodeSchema> | null>,
    required: true,
  },
  __triggerCompGetCtx: {
    type: Function as PropType<
      (schema: IPublicTypeNodeSchema, ref: ComponentPublicInstance) => void
    >,
    required: true,
  },
} as const;

export interface RendererProps {
  __scope?: BlockScope;
  __locale?: string;
  __messages?: I18nMessages;
  __designMode?: 'live' | 'design';
  __schema: IPublicTypeRootSchema;
  __components: Record<string, Component>;
  __getNode: (id: string) => Node<IPublicTypeNodeSchema> | null;
  __triggerCompGetCtx: (schema: IPublicTypeNodeSchema, ref: ComponentPublicInstance) => void;
}

export const baseRendererPropKeys = Object.keys(rendererProps) as (keyof RendererProps)[];

export type RendererComponent = {
  new (...args: any[]): {
    $props: VNodeProps & RendererProps;
  };
};

export const leafProps = {
  comp: {
    type: Object as PropType<Component | null>,
    default: undefined,
  },
  scope: {
    type: Object as PropType<RuntimeScope>,
    default: () => ({}),
  },
  schema: {
    type: Object as PropType<IPublicTypeNodeSchema>,
    default: () => ({}),
  },
} as const;

export interface LeafProps {
  comp?: Component | null;
  scope: RuntimeScope;
  schema: IPublicTypeNodeSchema;
}

export const leafPropKeys = Object.keys(rendererProps) as (keyof LeafProps)[];

export type LeafComponent = {
  new (...args: any[]): {
    $props: VNodeProps & LeafProps;
  };
};
