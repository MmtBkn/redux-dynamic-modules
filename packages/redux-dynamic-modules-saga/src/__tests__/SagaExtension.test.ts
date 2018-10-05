import { configureStore } from "redux-dynamic-modules";
import { getSagaExtension } from "../index";
import { ISagaModule } from "../Contracts";
import { SagaIterator } from "redux-saga";
describe("Saga extension tests", () => {
    it("Saga extension registers module and starts saga", () => {
        const testContext = {};
        called = false;
        configureStore({}, [getSagaExtension(testContext)], getTestModule());
        expect(called);

        expect(testContext["moduleManager"]).toBeTruthy();
    });
});

function getTestModule(): ISagaModule<{ a: string }> {
    return {
        id: "test-module",
        sagas: [testSaga]
    }
}

let called = false;
function* testSaga(): SagaIterator {
    called = true;
}
