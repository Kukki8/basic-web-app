import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"14-10611"
    	));
    });
	
    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"Yerimar"
    	));
    });

    test('should return a number', () => {
        const query = "What is 49 plus 80?";

        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"129"
    	));
    });

    test('should return a number', () => {
        const query = "What is 40 minus 20?";

        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"20"
    	));
    });

    test('should return a number', () => {
        const query = "What is 2 multiplied by 6?";

        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"12"
    	));
    });
});
