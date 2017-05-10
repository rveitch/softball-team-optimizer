# CoSchedule Softball Team Optimizer
(description)

## Local Setup
- `$ git clone https://github.com/rveitch/docraptor-logs.git`
- `$ npm install`
- Copy `template.env.txt` and rename it to `.env`
- Add your local environment variable keys to the `.env` file and save it.
- Run `$ npm start` or `$ node app` to initialize the app.
- Visit http://localhost:3000 in your browser.

### Realm - Basic Property Types
Realm supports the following basic types: `bool`, `int`, `float`, `double`, `string`, `data`, and `date`.
- `bool` properties map to JavaScript Boolean objects
- `int`, `float`, and `double` properties map to JavaScript Number objects. Internally ‘int’ and ‘double’ are stored as 64 bits while float is stored with 32 bits.
- `string` properties map to String
- `data` properties map to ArrayBuffer
- `date` properties map to Date

#### Reference
- https://realm.io/docs/javascript/latest/
- https://realm.io/docs/javascript/latest/api/
- https://realm.io/docs/data-model/
