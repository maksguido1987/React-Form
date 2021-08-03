export interface ICardData {
  name: string;
  lastName: string;
  date?: string;
  contry?: string;
  skills?: [react: string, angular: string, vue: string];
}

export interface IAddCardData {
  addCardData: (data: ICardData) => void;
}

export interface IAppState {
  cardData: ICardData[];
}

export interface IPropsName {
  name: string;
  lastName: string;
  onAddNameForm: (value: string) => void;
}
