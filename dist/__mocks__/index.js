"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.requestMultipleUrls = void 0;
var fs_1 = __importDefault(require("fs"));
// export const requestMultipleUrls = async (urls: string[]) => {
exports.requestMultipleUrls = function (urls) { return new Promise(function (resolve, reject) {
    var url = urls[0];
    // Get file name from first instance of supplied urls
    var lastSlash = url.lastIndexOf('/');
    var fileName = url.substring(lastSlash + 1);
    // Load JSON data from mock data file
    fs_1.default.readFile("./src/__mockData__/" + fileName, 'utf8', function (err, data) {
        if (err)
            reject(err);
        // Parse the data as JSON and put response in the correct data structure
        var json = [{ url: url, response: JSON.parse(data) }];
        resolve(json);
    });
}); };
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
;
