import IParseMailTemplatesDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplatesDTO): Promise<string>;
}
