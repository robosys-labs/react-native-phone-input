export interface DialCode {
    name: string;
    dialCode: string;
    countryCode: string;
    icon?: any;
    latitude: number;
    longitude: number;
}
declare const dialCodes: {
    countryCode: string;
    dialCode: string;
    icon: any;
    latitude: number;
    longitude: number;
    name: string;
}[];
export default dialCodes;
