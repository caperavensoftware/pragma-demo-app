export const template = {
    "type": "tabsheet",
    "items": [
        {
            "type": "tab",
            "title": "Details",
            "items": [
                {
                    "type": "container",
                    "layout": "horizontal",
                    "items": [
                        {
                            "type": "collection",
                            "id": "workorders",
                            "display-type": "list",
                            "datasource": "datasource",
                            "selected-target": "selected",
                            "template": "<div>${item.code}</div><div>${item.description}</div>",
                            "selectable": true,
                            "filter-fields": "code,description"
                        },
                        {
                            "type": "container",
                            "items": [
                                {
                                    "type": "edit",
                                    "label": "Code",
                                    "field": "code",
                                    "datasource": "selected"
                                },
                                {
                                    "type": "edit",
                                    "label": "Description",
                                    "field": "description",
                                    "datasource": "selected"
                                },
                                {
                                    "type": "edit",
                                    "label": "Site",
                                    "field": "siteCode",
                                    "datasource": "selected"
                                },
                                {
                                    "type": "edit",
                                    "label": "Location",
                                    "field": "locationCode",
                                    "datasource": "selected"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "tab",
            "title": "Work",
            "items": [
                {
                    "type": "edit",
                    "label": "Work Required",
                    "field": "workRequired",
                    "display-type": "memo",
                    "datasource": "selected"
                },
                {
                    "type": "edit",
                    "label": "Work Performed",
                    "field": "workPerformed",
                    "display-type": "memo",
                    "datasource": "selected"
                }
            ]
        },
        {
            "type": "tab",
            "title": "Notes",
            "items": [
                {
                    "type": "edit",
                    "label": "Notes",
                    "field": "notes",
                    "display-type": "memo",
                    "datasource": "selected"
                }
            ]
        }
    ]
};