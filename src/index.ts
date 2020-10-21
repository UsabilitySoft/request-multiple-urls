import fetch from 'node-fetch';
import IResponse from './response.interface';

/**
* @Method: Makes a fetch request from a given URL and returns the response in JSON format.
* @Param {string} Any URL
* @Return {Object[]} JSON response from single endpoint
*/
const requestSingleUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
    
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
* @Method: Returns the contents of multiple URL endpoints in a JSON object given an array of URLs.
* @Param {string[]} An array of URL endpoints 
* @Return {Object[]} JSON response with the contents of multiple URL endpoints
*/
export const requestMultipleUrls = async (urls: string[]) => { 
  let json:IResponse[] = new Array;
  urls.map(async url => {
    let response = await requestSingleUrl(url);
    let responseItem = { url: url, response: response };
    json.push(responseItem);
  })
  return json;
};