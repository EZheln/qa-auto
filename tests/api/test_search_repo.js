import assert from 'node:assert';
import test from 'node:test';
import  { requestWithExistRepo }  from "./api-Requests.js";
import  { requestWithoutExistRepo }  from "./api-Requests.js";

let dataArr = [
    {
        condition: true,
        request: requestWithExistRepo,
        expectedResult: 200
    },
    {
        condition: false,
        request: requestWithoutExistRepo,
        expectedResult: 200
    }
]

for (let i = 0; i < dataArr.length; i++){ 
        const request = async() =>  dataArr[i].request();
        const requestResult = await request();
        const statusResponce = requestResult.status;
        const dataSearch = requestResult.data.total_count;

        test ('Reponse is as expected', function () {
            assert.equal(statusResponce, dataArr[i].expectedResult);
        });
        
        if (dataArr[i].condition) {
            test ('Repos can be found', function () {
                assert.equal(dataSearch > 0, true);
            });
        }   
        else {
            test ('Non existing repo cannot be found', function () {
                assert.equal(dataSearch == 0, true);
            });
        }            
}

















// import assert from 'node:assert';
// import test from 'node:test';
// import  requestWithQueryParameters  from "./api-Requests.js";

// const fetc = async() =>  requestWithQueryParameters()
// const data = await fetc();
// console.log(data.status)
// test ('Repo can be found', function () {
//     // const actualResult = config.get("BASE_URL_API");
//     // const expectedResult = (config.target === "dev") ? "DEV_EXAMPLE_API" : "QA_EXAMPLE_API";
//     // assert.equal(actualResult, expectedResult);
// });

// test ('Non existing repo cannot be found', function () {
//     // const actualResult = config.get("BASE_URL_UI");
//     // const expectedResult = (config.target === "dev") ? "DEV_EXAMPLE_UI" : "QA_EXAMPLE_UI";
//     // assert.equal(actualResult, expectedResult);
// });