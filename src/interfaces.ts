export interface ICardData {
  name: string;
  lastName: string;
  date: string;
  country: string;
  skills: Array<string>;
}

export interface ICardDataArray {
  appState: ICardData[];
}

export interface IAddCardData {
  addCardData: (data: ICardData) => void;
}

export interface IAppState {
  cardData: ICardData[];
}

export interface IPropsName {
  name?: string;
  lastName?: string;
  onAddNameForm: (value: string) => void;
  onAddLastNameForm: (value: string) => void;
}

export interface IStateName {
  name: string;
  lastName: string;
}

export interface IPropsDate {
  date?: string;
  onAddDateForm: (date: string) => void;
}

export interface IPropsCountry {
  country?: string;
  onAddContryForm: (country: string) => void;
}

export interface IStateCountry {
  country: string;
}

export interface IPropsSwitcher {
  check?: string[];
  onCheckSkill: (value: string[]) => void;
}

export interface IStateSwitcher {
  skills: Array<string>;
}
