// cube(`Cube2`, {
//   sql: `SELECT * FROM public.cube2`,

//   joins: {

//   },

//   measures: {
//     count: {
//       type: `count`,
//       drillMembers: [fullNames, jobTitle, country]
//     },
//     // number: {
//     //   type: `number`,
//     //   format: `percent`
//     // }
//   },

//   dimensions: {
//     fullNames: {
//       sql: `full_names`,
//       type: `string`
//     },

//     jobTitle: {
//       sql: `job_title`,
//       type: `string`
//     },

//     region: {
//       sql: `region`,
//       type: `string`
//     },

//     sex: {
//       sql: `sex`,
//       type: `string`
//     },

//     uic: {
//       sql: `uic`,
//       type: `string`
//     },

//     age: {
//       sql: `age`,
//       type: `string`
//     },

//     organisation: {
//       sql: `organisation`,
//       type: `string`
//     },

//     country: {
//       sql: `country`,
//       type: `string`
//     },

//     typeOfOrganisation: {
//       sql: `type_of_organisation`,
//       type: `string`
//     }
//   }
// });
