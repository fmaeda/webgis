export enum TipoDado {
  AUTORIZACOES = 'AUTORIZACOES',
  EMPREENDIMENTOS = 'EMPREENDIMENTOS',
  ARVORES = 'ARVORES',
}

export const tipoDadoLabels: { [key in TipoDado]: string } = {
  [TipoDado.AUTORIZACOES]: 'Autorizações',
  [TipoDado.EMPREENDIMENTOS]: 'Empreendimentos',
  [TipoDado.ARVORES]: 'Árvores',
};
