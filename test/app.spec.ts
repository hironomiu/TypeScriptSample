import * as supertest from "supertest";
import { app } from "../src/app";

describe("Express server", () => {
    it("should response the GET method / ",async (done) => {
        supertest(app)
        .get("/")
        .then((response) => {
            expect(response.status).toBe(200);
            expect(response.text).toEqual("こんにちは！世界！");
            done();
        });
        
    });
    it("should response the GET method /hoge ",async (done) => {
        supertest(app)
        .get("/users")
        .then((response) => {
            expect(response.status).toBe(200);
            expect(response.text).toBe('[{"category":"Private","name":"太郎","done":false}]');
            done();
        });
    });
    it("should response the POST method /hoge ",async (done) => {
        const user = {
            category:"Private",
            name:"太郎",
            done:false,
        };
        supertest(app)
        .post("/users")
        .send(user)
        .then((response) => {
            expect(response.status).toBe(200);
            expect(response.text).toBe("user added");
            done();
        });
    });
});