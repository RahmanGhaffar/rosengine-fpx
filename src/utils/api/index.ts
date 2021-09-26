/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const module = {
    // async getTriggerSystemSelect(organisationId: string): Promise<any> {
    //     const config = {
    //         mode: "cors",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET",
    //         },
    //     };

    //     const data = await axios
    //         .get(
    //             "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getsystemselect?organisationId=" +
    //                 encodeURIComponent(organisationId),
    //             config
    //         )
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     return data;
    // },

    async getUserByEmail(email: string): Promise<any> {
        const config = {
            mode: "cors",
            url:
                "https://3wn6xdrpoi.execute-api.ap-southeast-1.amazonaws.com/dev/getuser?email=" +
                email,
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        };

        const data = await axios(config)
            .then(function (response) {
                return response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    // async getConfigSelect(id) {
    //     const config = {
    //         method: "get",
    //         mode: "cors",
    //         url:
    //             "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getconfigselect?configId=" +
    //             encodeURIComponent(id),
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET",
    //         },
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     return data;
    // },

    // async getConfigManage(id) {
    //     const config = {
    //         method: "get",
    //         mode: "cors",
    //         url:
    //             "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getconfigmanagedetail?configId=" +
    //             encodeURIComponent(id),
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET",
    //         },
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     return data;
    // },

    // async generateKey() {
    //     const config = {
    //         method: "get",
    //         mode: "cors",
    //         url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/generatekey",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET",
    //         },
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     return data;
    // },

    // async updateConfig(item) {
    //     const config = {
    //         method: "post",
    //         mode: "no-cors",
    //         url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/updateconfig",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "POST",
    //         },
    //         data: item,
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     return data;
    // },

    // async deleteConfig(item) {
    //     const config = {
    //         method: "post",
    //         mode: "no-cors",
    //         url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/deleteconfig",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "POST",
    //         },
    //         data: item,
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     return data;
    // },

    // async getTransactionReport(item) {
    //     const config = {
    //         method: "post",
    //         mode: "no-cors",
    //         url: "https://qi2ooq8sec.execute-api.ap-southeast-1.amazonaws.com/dev/searchreport",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "POST",
    //         },
    //         data: item,
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     return data;
    // },

    // async getReportDetail(id) {
    //     const config = {
    //         method: "get",
    //         mode: "cors",
    //         url:
    //             "https://qi2ooq8sec.execute-api.ap-southeast-1.amazonaws.com/dev/getreport?reportId=" +
    //             encodeURIComponent(id),
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET",
    //         },
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     return data;
    // },

    // async getConfigList() {
    //     const config = {
    //         method: "get",
    //         mode: "cors",
    //         url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getconfiglist",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET",
    //         },
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     return data;
    // },

    // async getSellerKeySelect(id) {
    //     const config = {
    //         method: "get",
    //         mode: "cors",
    //         url:
    //             "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getsellerkeyselect?exchangeId=" +
    //             encodeURIComponent(id),
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET",
    //         },
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     return data;
    // },

    // async getExchangeSelect() {
    //     const config = {
    //         method: "get",
    //         mode: "cors",
    //         url: "https://lhx2u32rm6.execute-api.ap-southeast-1.amazonaws.com/dev/getexchangekeyselect",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET",
    //         },
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //     return data;
    // },

    // async postExample(item) {
    //     const config = {
    //         method: "post",
    //         mode: "no-cors",
    //         url: "",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "POST",
    //         },
    //         data: item,
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     return data;
    // },

    // async searchApiLog(item) {
    //     const config = {
    //         method: "post",
    //         mode: "no-cors",
    //         url: "https://9hure84vta.execute-api.ap-southeast-1.amazonaws.com/dev/getapilog",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "POST",
    //         },
    //         data: item,
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     return data;
    // },

    // async postConfig(item) {
    //     const config = {
    //         method: "post",
    //         mode: "no-cors",
    //         url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/postconfig",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "POST",
    //         },
    //         data: item,
    //     };

    //     const data = await axios(config)
    //         .then(function (response) {
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     return data;
    // },
};

export default module;
