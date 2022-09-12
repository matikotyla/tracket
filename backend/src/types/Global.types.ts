/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./Server.types"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Color: "Blue" | "Green" | "Red" | "Yellow"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Payload: { // root type
    token: string; // String!
  }
  Project: { // root type
    color: string; // String!
    id: string; // String!
    name: string; // String!
  }
  Query: {};
  Task: { // root type
    completed: boolean; // Boolean!
    content: string; // String!
    description: string; // String!
    id: string; // String!
  }
  User: { // root type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    name: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createProject: NexusGenRootTypes['Project']; // Project!
    createTask: NexusGenRootTypes['Task']; // Task!
    deleteProject: NexusGenRootTypes['Project']; // Project!
    deleteTask: NexusGenRootTypes['Task']; // Task!
    loginUser: NexusGenRootTypes['Payload']; // Payload!
    registerUser: NexusGenRootTypes['User']; // User!
    updateProject: NexusGenRootTypes['Project']; // Project!
    updateTask: NexusGenRootTypes['Task']; // Task!
  }
  Payload: { // field return type
    token: string; // String!
  }
  Project: { // field return type
    color: string; // String!
    id: string; // String!
    name: string; // String!
    tasks: Array<NexusGenRootTypes['Task'] | null> | null; // [Task]
    user: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    project: NexusGenRootTypes['Project']; // Project!
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
    task: NexusGenRootTypes['Task']; // Task!
    tasks: NexusGenRootTypes['Task'][]; // [Task!]!
    user: NexusGenRootTypes['User']; // User!
  }
  Task: { // field return type
    completed: boolean; // Boolean!
    content: string; // String!
    description: string; // String!
    id: string; // String!
    project: NexusGenRootTypes['Project'] | null; // Project
  }
  User: { // field return type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    name: string; // String!
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createProject: 'Project'
    createTask: 'Task'
    deleteProject: 'Project'
    deleteTask: 'Task'
    loginUser: 'Payload'
    registerUser: 'User'
    updateProject: 'Project'
    updateTask: 'Task'
  }
  Payload: { // field return type name
    token: 'String'
  }
  Project: { // field return type name
    color: 'String'
    id: 'String'
    name: 'String'
    tasks: 'Task'
    user: 'User'
  }
  Query: { // field return type name
    project: 'Project'
    projects: 'Project'
    task: 'Task'
    tasks: 'Task'
    user: 'User'
  }
  Task: { // field return type name
    completed: 'Boolean'
    content: 'String'
    description: 'String'
    id: 'String'
    project: 'Project'
  }
  User: { // field return type name
    email: 'String'
    firstName: 'String'
    id: 'String'
    lastName: 'String'
    name: 'String'
    projects: 'Project'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createProject: { // args
      color: NexusGenEnums['Color']; // Color!
      name: string; // String!
    }
    createTask: { // args
      content: string; // String!
      description: string; // String!
      projectId: string; // String!
    }
    deleteProject: { // args
      id: string; // String!
    }
    deleteTask: { // args
      id: string; // String!
    }
    loginUser: { // args
      email: string; // String!
      password: string; // String!
    }
    registerUser: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      name: string; // String!
      password: string; // String!
    }
    updateProject: { // args
      color?: NexusGenEnums['Color'] | null; // Color
      id: string; // String!
      name?: string | null; // String
    }
    updateTask: { // args
      completed?: boolean | null; // Boolean
      content?: string | null; // String
      description?: string | null; // String
      id: string; // String!
    }
  }
  Query: {
    project: { // args
      id: string; // String!
    }
    task: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}