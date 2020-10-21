// import requestMultipleUrls from '.'; // GETS BUG TypeError: _1.default is not a function
import { requestMultipleUrls } from '.';

jest.mock('./')

const mockUrls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json', 
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json', 
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
  ];

describe('requestMultipleUrls() using Promise', () => {
  it('Should load API response data', () => {
    return requestMultipleUrls(mockUrls)
    .then((data:any) => {
      console.log(data[0].url)
      expect(data).toBeDefined()
      expect(data[0].url).toEqual(mockUrls[0])
    })
  })
});

describe('requestMultipleUrls() using async/await', () => {
  it('Should load API response data', async () => {
    const data = await requestMultipleUrls(mockUrls)
    expect(data).toBeDefined()
    expect(data[0].url).toEqual(mockUrls[0])
  })
});


