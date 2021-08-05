export interface ICardData {
  name: string;
  lastName: string;
  date: string;
  country: string;
  skills: Array<string>;
  nameError: boolean;
  lastNameError: boolean;
  dateError: boolean;
  isAgree: boolean;
}

export interface ICardDataArray {
  appState: ICardData[];
}

export interface IAddCardData {
  addCardData: (data: ICardData) => void;
  // checkFormValid: (data: IUnDisableBtn) => void;
}

export interface IStateApp {
  cardData: ICardData[];
}

export interface IPropsName {
  name?: string;
  lastName?: string;
  onAddNameForm: (value: string) => void;
  onAddLastNameForm: (value: string) => void;
  checkValidName: (nameError: boolean) => void;
  checkValidLastName: (lastNameError: boolean) => void;
}

export interface IStateName {
  name: string;
  lastName: string;
  checkFocusName: boolean;
  checkFocusLastName: boolean;
  nameError: boolean;
  lastNameError: boolean;
}

export interface IPropsDate {
  date?: string;
  onAddDateForm: (date: string) => void;
  checkValidDate: (dateError: boolean) => void;
}

export interface IStateDate {
  date: string;
  checkFocusDate: boolean;
  dateError: boolean;
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

export interface IPropsRadio {
  checkValidAgree: (isAgree: boolean) => void;
}

export interface IStateRadio {
  isAgree: boolean;
}

export interface IStateSubmit {
  stateButton: boolean;
}

export interface IPropsSubmit {
  onCheckValid: {};
}
