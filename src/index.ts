import fetch from 'node-fetch';
import IResponse from './response.interface';

/**
* @Method: Makes a fetch request from a given URL and returns the response in JSON format.
* @Param {string} Any URL
* @Return {Object[]} JSON response from single endpoint
*/
const requestSingleUrlAndMutate = async (url:string) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const item:IResponse = { url: url, response: json };
    return item;
    
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
* @Method: Returns the contents of multiple URL endpoints in a JSON object given an array of URLs.
* @Param {string[]} An array of URL endpoints 
* @Return {Object[]} JSON response with the contents of multiple URL endpoints along with their respective URL
*/
export async function requestMultipleUrls(urls: string[]){ 
  return Promise.all(urls.map(url => requestSingleUrlAndMutate(url)))
};