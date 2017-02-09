export const workOrderPrototype = {
    id: null,
    code: null,
    description: null,
    siteCode: null,
    locationCode: null,
    workRequired: null,
    workPerformed: null,
    notes: null
};

export function createTestWorkOrders() {
    return [
        {
            id: 1,
            code: "R00100",
            description: "Do some work",
            siteCode: "Site 1",
            locationCode: "Location 1",
            workRequired: "Go do some work",
            workPerformed: "Some work has been dome",
            notes: ""
        },
        {
            id: 2,
            code: "R00102",
            description: "Do some work 2",
            siteCode: "Site 2",
            locationCode: "Location 2",
            workRequired: "Go do some work",
            workPerformed: "Some work has been dome",
            notes: ""
        },
        {
            id: 3,
            code: "R00103",
            description: "Do some work 3",
            siteCode: "Site 3",
            locationCode: "Location 3",
            workRequired: "Go do some work",
            workPerformed: "Some work has been dome",
            notes: ""
        },
        {
            id: 4,
            code: "R00104",
            description: "Do some work 4",
            siteCode: "Site 4",
            locationCode: "Location 4",
            workRequired: "Go do some work",
            workPerformed: "Some work has been dome",
            notes: ""
        }
    ];
};