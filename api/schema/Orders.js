// cube(`Orders`, {
//   sql: `SELECT * FROM public.orders`,

//   joins: {

//   },

//   measures: {
//     count: {
//       type: `count`,
//       drillMembers: [id, createdAt]
//     },

//     number: {
//       sql: `number`,
//       type: `sum`
//     }
//   },

//   dimensions: {
//     status: {
//       sql: `status`,
//       type: `string`
//     },

//     id: {
//       sql: `id`,
//       type: `number`,
//       primaryKey: true
//     },

//     createdAt: {
//       sql: `created_at`,
//       type: `time`
//     },

//     completedAt: {
//       sql: `completed_at`,
//       type: `time`
//     }
//   }
// });
