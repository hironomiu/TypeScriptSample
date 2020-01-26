module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions:["ts","js"],
    transform:{
        "^.+\\.(ts)$":"ts-jest"
    },
    globals:{
        "ts-jest":{
            tsConfig:"tsconfig.json"
        }
    },
    testMatch:["**/*.spec.ts"]
};