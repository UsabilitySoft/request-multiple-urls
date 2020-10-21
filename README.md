# request-multiple-urls NPM Package
This package contains a single function that returns the contents of multiple urls given as an array in a single JSON response.

___
## To install


`npm install git+https://github.com/UsabilitySoft/request-multiple-urls.git`

Or install via folder containing the unarchived contents of this package e.g.

`npm install "file:../request-multiple-urls"`
___
## Usage Example

*Note the import statement differs from what has been requested due to an issue I had with TypeScript and default exports.*

```javascript
import { requestMultipleUrls } from 'request-multiple-urls';

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json', 
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json', 
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

requestMultipleUrls(urls).then(urlContent => { 
  ...
});
```
___
## To test

There are tests to check main function works correctly:

`npm run test`


