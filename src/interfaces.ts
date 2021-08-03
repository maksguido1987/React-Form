export interface ICardData {
  name?: string;
  lastName?: string;
  date?: string;
  contry?: string;
  skills?: [react: string, angular: string, vue: string];
}

export interface ICardDataState {
  cardData: ICardData[];
}

export interface IPropsName {
  name: string;
  lastName: string;
}
