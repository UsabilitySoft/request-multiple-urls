import IResponse from './response.interface';
/**
* @Method: Returns the contents of multiple URL endpoints in a JSON object given an array of URLs.
* @Param {string[]} An array of URL endpoints
* @Return {Object[]} JSON response with the contents of multiple URL endpoints
*/
export declare const requestMultipleUrls: (urls: string[]) => Promise<IResponse[]>;
