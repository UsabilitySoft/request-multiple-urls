/**
* @Method: Returns the contents of multiple URL endpoints in a JSON object given an array of URLs.
* @Param {string[]} An array of URL endpoints
* @Return {Object[]} JSON response with the contents of multiple URL endpoints along with their respective URL
*/
export declare function requestMultipleUrls(urls: string[]): Promise<any[]>;
