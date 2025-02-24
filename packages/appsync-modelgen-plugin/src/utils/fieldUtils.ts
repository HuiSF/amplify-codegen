import { CodeGenDirective, CodeGenField, CodeGenModel } from '../visitors/appsync-visitor';

export function addFieldToModel(model: CodeGenModel, field: CodeGenField): void {
  const existingField = model.fields.find(f => f.name === field.name);
  if (!existingField) {
    model.fields.push(field);
  }
}

export function removeFieldFromModel(model: CodeGenModel, fieldName: string): void {
  model.fields = model.fields.filter(field => field.name !== fieldName);
}

export const getDirective = (fieldOrModel: CodeGenField | CodeGenModel) => (directiveName: string): CodeGenDirective | undefined =>
  fieldOrModel.directives.find(d => d.name === directiveName);
