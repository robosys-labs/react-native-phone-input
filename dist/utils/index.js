"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDialCode = exports.normalize = void 0;
const dialCodes_1 = __importDefault(require("../assets/dialCodes"));
function normalize(phoneNumber) {
    phoneNumber = phoneNumber.replace(/[()]/g, '').trim(); // removes "(" and ")" and spaces
    if (phoneNumber.length >= 2) {
        const number = phoneNumber.replace(/^00/, '+');
        const dialCode = findDialCode(number);
        if (dialCode) {
            let x = number.replace(dialCode.dialCode, '').replace(/^0+/, '');
            phoneNumber = dialCode.dialCode + x;
        }
    }
    return phoneNumber;
}
exports.normalize = normalize;
function findDialCode(phoneNumber) {
    let dialCode = null;
    for (let i = 5; i >= 2; i--) {
        dialCode = dialCodes_1.default.find(dc => dc.dialCode === phoneNumber.substr(0, i));
        if (dialCode)
            break;
    }
    return dialCode;
}
exports.findDialCode = findDialCode;
