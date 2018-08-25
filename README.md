# BlackListed Words

replace all the instances of your blacklisted words with asterisks

## Example

```shell
$ npm install sensitive-words --save
```

```javascript
const {sensitiveWords} = require('sensitive-words');

//ES2015 modules
import {sensitiveWords} from 'sensitive-words';

const filtered = sensitiveWords(
	'The shinigami Kenpachi Zaraki does not know the name of his Zanpakutō.',
	['shinigami', 'Zanpakutō']
);

console.log(filtered);
//The ***** Kenpachi Zaraki does not know the name of his *****.
```
