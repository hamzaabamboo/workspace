export interface Participant {
  initial: string;
  fnamet: string;
  lnamet: string;
  fnamee?: string;
  lnamee?: string;
  nickname?: string;
  birthday: {
    day: string;
    month: string;
    year: string;
  };
  chulaid?: string;
  faculty: string;
  parts: string[];
  position?: string[];
  yearInChula?: string;
  yearInBand?: string;
  mobile: string;
  homeAddress?: Address;
  homePhone?: string;
  homeFax?: string;
  office?: string;
  officeAddress?: Address;
  officePhone?: string;
  officeFax?: string;
  email?: string;
}

export interface Address {
  line1: string;
  line2?: string;
  line3?: string;
  postcode: string;
}
