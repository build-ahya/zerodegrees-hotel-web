import Device from "./device";
import KYC from "./kyc";

interface ReloadInfo {
  createdAt: string;
  disabled: boolean;
  lastLoginAt: string;
  lastRefreshAt: string;
  passwordUpdatedAt: string;
}

export enum Role {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}
export default interface User {
  id: string;
  uid: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  emailAddress: string;
  phoneNumber: string;
  displayName: string;
  photoUrl: string;
  devices?: Device[];
  admin?: boolean | undefined;
  role: Role;
  gender?: string;
  kyc: KYC;
  referral?: string;
  referralCode?: string;
  providerId: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
  active?: boolean;
  reloadUserInfo?: ReloadInfo;
  createdAt?: number;
  updatedAt?: number;
}
