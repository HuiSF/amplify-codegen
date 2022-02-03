export const LOADER_CLASS_NAME = 'ModelProvider';
export const FLUTTER_DATASTORE_PLUGIN_INTERFACE_IMPORT = 'package:amplify_datastore_plugin_interface/amplify_datastore_plugin_interface';
export const FLUTTER_AMPLIFY_CORE_IMPORT = 'package:amplify_core/amplify_core';
export const BASE_IMPORT_PACKAGES = ['package:flutter/foundation.dart'];
export const COLLECTION_PACKAGE = 'package:collection/collection.dart';

export const CUSTOM_LINTS_MESSAGE = `// NOTE: This file is generated and may not follow lint rules defined in your app
// Generated files can be excluded from analysis in analysis_options.yaml
// For more info, see: https://dart.dev/guides/language/analysis-options#excluding-code-from-analysis`;

export const IGNORE_FOR_FILE =
  '// ignore_for_file: public_member_api_docs, file_names, unnecessary_new, prefer_if_null_operators, prefer_const_constructors, slash_for_doc_comments, annotate_overrides, non_constant_identifier_names, unnecessary_string_interpolations, prefer_adjacent_string_concatenation, unnecessary_const, dead_code';

export const typeToEnumMap: Record<string, string> = {
  String: '.string',
  Int: '.int',
  Float: '.double',
  Boolean: '.bool',
  AWSDate: '.date',
  AWSDateTime: '.dateTime',
  AWSTime: '.time',
  AWSTimestamp: '.timestamp',
  AWSEmail: '.string',
  AWSJSON: '.string',
  AWSURL: '.string',
  AWSPhone: '.string',
  AWSIPAddress: '.string',
};

export const DART_RESERVED_KEYWORDS = [
  'abstract',
  'as',
  'assert',
  'async',
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'covariant',
  'default',
  'deferred',
  'do',
  'dynamic',
  'else',
  'enum',
  'export',
  'extends',
  'extension',
  'external',
  'factory',
  'false',
  'final',
  'finally',
  'for',
  'Function',
  'get',
  'hide',
  'if',
  'implements',
  'import',
  'in',
  'interface',
  'is',
  'library',
  'mixin',
  'new',
  'null',
  'on',
  'operator',
  'part',
  'rethrow',
  'return',
  'set',
  'show',
  'static',
  'super',
  'switch',
  'sync',
  'this',
  'throw',
  'true',
  'try',
  'typedef',
  'var',
  'void',
  'while',
  'with',
  'yield',
];
