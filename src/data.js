export const  data1 = [{
    "id": 1,
    "name": "Hello Kitty",
    "items": [{
        "id": 2,
        "name": "Kitty Muu Muu"
    }, {
        "id": 3,
        "name": "Kitty smack"
    }]
}, {
    "id": 4,
    "name": "Hello Pussy",
    "items": [{
        "id": 5,
        "name": "World",
        "items": [{
            "id": 6,
            "name": "Hello Pussy world"
        }]
    }]
}];


export const  data2 = [{
    "CustomerID": "234",
    "BranchID": "1",
    "LocationID": "26",
    "FirstName": "Lakshmi "
}, {
    "CustomerID": "235",
    "BranchID": "1",
    "LocationID": "6",
    "FirstName": "Arora "
}, {
    "CustomerID": "236",
    "BranchID": "1",
    "LocationID": "68",
    "FirstName": "S.K.Raman "
}, {
    "CustomerID": "237",
    "BranchID": "1",
    "LocationID": "38",
    "FirstName": "Vidya Rao "
}, {
    "CustomerID": "238",
    "BranchID": "1",
    "LocationID": "18",
    "FirstName": "Raju "
}, {
    "CustomerID": "239",
    "BranchID": "1",
    "LocationID": "49",
    "FirstName": "K.B.Hebbar "
}]

var headings = [];

export const data3 = {
    "data": [{
            "1": ["2", "3"]
        }, {
            "foo": "bar"
        },
        {
            "top-level-variant": [1, "abc", {
                "variant": 3.25
            }]
        },
        {
            "foo1": {
                "foo2": "phoey",
                "foo3": "buz"
            }
        },
        {
            "foo2-1": {
                "foo4": {
                    "foo4-1": "phoey",
                    "foo4-2": "buz"
                }
            }
        },
        {
            "nested": {
                "nested-arr": [{
                        "simple": "object"
                    },
                    {
                        "another-simple": "object"
                    },
                    {
                        "crazy": ["1", 2, true, {
                            "object": "3"
                        }]
                    }
                ]
            }
        },
        {
            "attr0": "val0",
            "attr1": [{
                "key-0": "foo",
                "key-1": "bar"
            }],
            "attr2": ["mem-0", "mem-1"]
        }
    ],
    "data2": [{
            "foo": "bar"
        }, {
            "nested": {
                "nested-arr": [{
                    "simple": "object"
                }, {
                    "another-simple": "object"
                }, {
                    "arr": ["1", 2, {
                        "variant": "3"
                    }]
                }]
            }
        },
        {
            "attr0": 6789,
            "attr1": [{
                "key-0": "foo",
                "key-1": "bar"
            }],
            "attr2": ["mem-0", "mem-1"]
        }
    ],
    "data3": {
        "plain": {
            "object": 1
        }
    },
    "data4": "Just a string",
    "data5": true
}

/*
const foo = data2.reduce((table, obj, index) => (
    table + (
        !index ? (
            Object.keys(obj).reduce((header, key) => `${header}<th>${key}`, '<tr>')
        ) : ''
    ) + $.map(obj, v => v).reduce((row, value) => `${row}<td>${value}`, '<tr>')
), '<table class="table table-hover">') + '</table>';
*/