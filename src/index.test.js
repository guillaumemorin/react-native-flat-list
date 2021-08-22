const index = require("./index")
// @ponicode
describe("componentWillReceiveProps", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillReceiveProps()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("refresh", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.refresh()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setKey", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.setKey("dummyName", ["a", "b", "043", "holasenior"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setKey("dummyName123", ["a", "b", "043", "holasenior"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setKey("$dummy_name", ["a", "b", "043", "holasenior"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.setKey("$dummy_name", [10, -45.9, 103.5, 0.955674])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.setKey("dummy_name", [10, -45.9, 103.5, 0.955674])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.setKey(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderRowContent", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.renderRowContent("dummyname", "project_secret_", "project_secret_")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.renderRowContent("dummy_name", "bc23a9d531064583ace8f67dad60f6bb", 2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.renderRowContent("$dummy_name", "proj_", "project_secret_")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.renderRowContent("/dummy_name", 2, "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.renderRowContent("DUMMYNAME", "fake_project", "fake_project")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.renderRowContent(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderItemContent", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.renderItemContent("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.renderItemContent(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
