import fs from 'fs'

interface IResponse {
  url: string;
  response: any[];
}

// export const requestMultipleUrls = async (urls: string[]) => {
export const requestMultipleUrls = (urls:string[]) => new Promise((resolve, reject) => {
  
  const url = urls[0]
  
  // Get file name from first instance of supplied urls
  const lastSlash = url.lastIndexOf('/')
  const fileName = url.substring(lastSlash + 1)
  
  // Load JSON data from mock data file
  fs.readFile(`./src/__mockData__/${fileName}`, 'utf8', (err, data) => {
    if (err) reject(err)
    
    // Parse the data as JSON and put response in the correct data structure
    let json:IResponse[] = [{ url: url, response: JSON.parse(data) }];

    resolve(json)
  })
});

export function sum(a: number, b: number) {
  return a + b;
};
