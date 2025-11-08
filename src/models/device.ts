export default interface Device {
    os: string;
    id?: string;
    model?: string;
    browser?: string;
    osVersion?: number;
    deviceToken: string;
    browserVersion?: number;
  }
  