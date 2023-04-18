import assert from 'node:assert';
import test from 'node:test';
import  { requestWithQueryParametersCode }  from "./api-Requests.js";
import  { requestWithoutQueryParametersCode }  from "./api-Requests.js";

let dataArr = [
    {
        request: requestWithQueryParametersCode,
        expectedResult: 200,
        actualResult: (requestResult) => {
            return requestResult.status
        }
    },
    {
        request: requestWithoutQueryParametersCode,
        expectedResult: 422,
        actualResult: (requestResult) => {
            return requestResult.status
        }
    }
]

for (let i = 0; i < dataArr.length; i++){ 
        const request = async() =>  dataArr[i].request();
        const requestResult = await request();

        test ('Request search code with Query Parameters', function () {
            assert.equal(dataArr[i].actualResult(requestResult), dataArr[i].expectedResult);
        });


        test ('Request search code without Query Parameters', function () {
            assert.equal(dataArr[i].actualResult(requestResult), dataArr[i].expectedResult);
        });
}