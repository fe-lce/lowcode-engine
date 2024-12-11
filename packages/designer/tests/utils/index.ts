import { IPublicTypeNodeSchema } from '@felce/lowcode-types';

/**
 * 返回给定 schema 结构中所有的 nodeId
 * @param schema
 * @param ids
 */
export function getIdsFromSchema(schema: IPublicTypeNodeSchema, ids: any) {
    if (ids === void 0) {
      ids = [];
    }
  
    if (!schema) return ids;
    var componentName = schema.componentName,
        id = schema.id,
        children = schema.children;
  
    if (componentName) {
      ids.push(id);
    }
  
    if (Array.isArray(children) && children.length > 0) {
      children.forEach(function (node: any) {
        return getIdsFromSchema(node, ids);
      });
    }
  
    return ids;
  }
  /**
   * 根据给定的 nodeId 返回 node json 结构
   * @param schema
   * @param _id
   */
  
  export function getNodeFromSchemaById(schema: IPublicTypeNodeSchema, _id: string) {
    if (!schema) return null;
    var id = schema.id,
        children = schema.children;
    var retNode = null;
    if (_id === id) return schema;
  
    if (Array.isArray(children) && children.length > 0) {
      children.some(function (node: any) {
        retNode = getNodeFromSchemaById(node, _id);
  
        if (retNode) {
          return true;
        }
  
        return false;
      });
    }
  
    return retNode;
  }
export {
    
}
export * from './bom';
export * from './event';
export * from './renderer';
export * from './misc';
