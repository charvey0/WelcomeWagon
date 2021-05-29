const Employee = require("../../models/Employee");

// Defining methods for the employeeController
module.exports = {

    getCurrent: function (req, res) {
        Employee
            .find({ }, '-_id')
            .sort({ name.last: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

// TODO: 
    insertCurrent: function (req, res) {
// construct current employee with hire date of now
var employee;
//  insert employee
    Employee
        .create(employee)
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
//         Enqueued
//         .find({ userId: req.params.user }, '-_id')
//         .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//         //  TODO: create object with req.body data and userId then insert it (done?)
//         createCompleted: function (req, res) {
//           const newBook = {
//         //  --waiting to access currentUser
//         userId: req.params.user,
// //              title: req.body.volumeInfo.title,    // CHECK: see if others are using these fields -- these are inside volumeInfo
// //              pageCount: req.body.volumeInfo.pageCount,
//               id: req.body.id,
//               volumeInfo: req.body.volumeInfo
//           }  
//         Completed
//             .create(newBook)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => console.log(err));
    },

// TODO    
    insertNew: function (req, res) {
// construct new employee with hire date of now
    var newEmployee;
//  insert employee
    Employee
        .create(newEmployee)
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    
    //     //  TODO: add userId to search criteria (done?)
    //     Completed
    //         .findOne({ 
    //             id: req.params.id,
    //     //  --waiting to access currentUser
    //     userId: req.params.user
    //         })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    },



//  TODO:
        getNew: function (req, res) {
// set a date to check against            
            Employee
// find only employees hired in the last two weeks?            
              .find({ }, '-_id')  
// sort by most recent to longest time ago              
              .sort({ name.last: 1 })
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
//             const newBook = {
//         //  --waiting to access currentUser
//         userId:  req.params.user,
//   //              title: req.body.volumeInfo.title,    // CHECK: see if others are using these fields -- these are inside volumeInfo
//   //              pageCount: req.body.volumeInfo.pageCount,
//                 id: req.body.id,
//                 volumeInfo: req.body.volumeInfo
//             }  
//           Enqueued
//             .create(newBook)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => console.log(err));
    },


//  TODO: add userId to search criteria (done?)
        getBirthday: function (req, res) {
// set a date to check against
            Employee
// find only people who have an upcoming birthday
              .find({ }, '-_id')
// sort by closest date to farthest data 
              .sort({ name.last: 1 })
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
        //   Enqueued
        //     .findOne({ 
        //         id: req.params.id,
        // //  --waiting to access currentUser
        // userId: req.params.user 
        //      })
        //     .then(dbModel => dbModel.remove())
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    }
    
    //     getCompletedLimit: function (req, res) {
    //     //  TODO: add userId to search criteria (done?)
    //     Completed
    //     //  --waiting to access currentUser
    //         .find({ userId: req.params.user }, '-_id')
    //         .sort({ createdAt: -1 })
    //         .limit(5)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
};