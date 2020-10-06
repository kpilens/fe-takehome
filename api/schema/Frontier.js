cube(`Advocacy_Database`, {
    sql: `SELECT * FROM public.cube22`,

    joins: {

    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [country, fullNames, jobTitle]
        }
    },

    dimensions: {
        organisation: {
            sql: `organisation`,
            type: `string`
        },

        country: {
            sql: `country`,
            type: `string`
        },

        typeOfOrganisation: {
            sql: `type_of_organisation`,
            type: `string`
        },

        fullNames: {
            sql: `full_names`,
            type: `string`
        },

        jobTitle: {
            sql: `job_title`,
            type: `string`
        },

        sex: {
            sql: `sex`,
            type: `string`
        },

        region: {
            sql: `region`,
            type: `string`
        },

        age: {
            sql: `age`,
            type: `string`
        },

        uic: {
            sql: `uic`,
            type: `string`
        }
    }
});
