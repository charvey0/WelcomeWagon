const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  gender: { type: String, required: true },
  name: {
      title: { type: String, required: true },
      first: { type: String, required: true},
      last: { type: String, required: true}
  },
  location: {
    street: {
        number: { type: Number, required: true },
        name: { type: String, required: true }
    }, 
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postcode: { type: Number, required: true },
    coordinates:{
        latitude: { type: String, required: true },
        longitude: { type: String, required: true }
    },
    timezone:{
        offset: { type: String, required: true },
        description: { type: String, required: true }
    }
  },
  email: { type: String, required: true },
  dob:{
      date: { type: String, required: true },
      age: { type: Number, required: true }
  },
  registered:{
      date: { type: String, required: true },
      age: { type: Number, required: true }
  },
  phone: { type: String, required: true },
  cell: { type: String, required: true },
  id:{
      name: { type: String, required: true },
      value: { type: String, required: true }
  },
  picture:{
      large: { type: String, required: true },
      medium: { type: String, required: true },
      thumbnail:{ type: String, required: true }
  }


});

//                   DATA MODEL
// {
//     "gender":"male",
//     "name":{
//         "title":"Mr",
//         "first":"Louis",
//         "last":"Barnett"
//     },
//     "location":{
//         "street":{
//             "number":1979,
//             "name":"Blossom Hill Rd"
//         }, 
//         "city":"Salem",
//         "state":"Texas",
//         "country":"United States",
//         "postcode":64759,
//         "coordinates":{
//             "latitude":"39.8609",
//             "longitude":"-177.8755"
//         },
//         "timezone":{
//             "offset":"-1:00",
//             "description":"Azores, Cape Verde Islands"
//         }
//     },
//     "email":"louis.barnett@example.com",
//     "dob":{
//         "date":"1987-03-17T12:17:44.216Z",
//         "age":34
//     },
//     "registered":{
//         "date":"2018-03-19T17:36:09.128Z",
//         "age":3
//     },
//     "phone":"(309)-174-5284",
//     "cell":"(418)-229-6472",
//     "id":{
//         "name":"SSN",
//         "value":"040-79-4587"
//     },
//     "picture":{
//         "large":"https://randomuser.me/api/portraits/men/44.jpg",
//         "medium":"https://randomuser.me/api/portraits/med/men/44.jpg",
//         "thumbnail":"https://randomuser.me/api/portraits/thumb/men/44.jpg"
//     }
// }

const Enqueued = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
