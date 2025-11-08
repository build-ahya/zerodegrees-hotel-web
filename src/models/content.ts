import { Section } from "@/types";

export interface Bank {
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankCode?: string;
}

export default interface Content {
  home: {
    section1: Section;
    section2: Section;
    section3: Section;
    section4: Section;
    section5: Section;
    section6: Section;
    section7: Section;
  };
  about: {
    section1: Section;
    section2: Section;
    section3: Section;
    section4: Section;
  };
  search: {
    section1: Section;
    section2: Section;
  };
  restaurant: {
    section1: Section;
    section2: Section;
  };
  blog: {
    section1: Section;
  };
  contact: {
    section1: Section;
    section2: Section;
  };
  privacyPolicy: {
    section1: Section;
    section2: Section;
  };
  terms: {
    section1: Section;
    section2: Section;
  };
  refundPolicy: {
    section1: Section;
    section2: Section;
  };
  settings: {
    currency: string;
    rate: number;
    bankAccounts: Bank[]
  }
}
