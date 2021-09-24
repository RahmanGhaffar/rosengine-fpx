import axios from "axios";

var module = {
    async getTriggerSystemSelect(organisationId) {
        var config = {
            method: "get",
            mode: "cors",
            url:
                "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getsystemselect?organisationId=" +
                encodeURIComponent(organisationId),
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    async getConfigSelect(id) {
        var config = {
            method: "get",
            mode: "cors",
            url:
                "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getconfigselect?configId=" +
                encodeURIComponent(id),
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    async getConfigManage(id) {
        var config = {
            method: "get",
            mode: "cors",
            url:
                "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getconfigmanagedetail?configId=" +
                encodeURIComponent(id),
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    async generateKey() {
        var config = {
            method: "get",
            mode: "cors",
            url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/generatekey",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    async updateConfig(item) {
        var config = {
            method: "post",
            mode: "no-cors",
            url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/updateconfig",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            data: item,
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return data;
    },

    async deleteConfig(item) {
        var config = {
            method: "post",
            mode: "no-cors",
            url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/deleteconfig",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            data: item,
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return data;
    },

    async getTransactionReport(item) {
        var config = {
            method: "post",
            mode: "no-cors",
            url: "https://qi2ooq8sec.execute-api.ap-southeast-1.amazonaws.com/dev/searchreport",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            data: item,
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return data;
    },

    async getReportDetail(id) {
        var config = {
            method: "get",
            mode: "cors",
            url:
                "https://qi2ooq8sec.execute-api.ap-southeast-1.amazonaws.com/dev/getreport?reportId=" +
                encodeURIComponent(id),
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    async getConfigList() {
        var config = {
            method: "get",
            mode: "cors",
            url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getconfiglist",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    async getSellerKeySelect(id) {
        var config = {
            method: "get",
            mode: "cors",
            url:
                "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/getsellerkeyselect?exchangeId=" +
                encodeURIComponent(id),
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    async getExchangeSelect() {
        var config = {
            method: "get",
            mode: "cors",
            url: "https://lhx2u32rm6.execute-api.ap-southeast-1.amazonaws.com/dev/getexchangekeyselect",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    async postExample(item) {
        var config = {
            method: "post",
            mode: "no-cors",
            url: "",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            data: item,
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return data;
    },

    async searchApiLog(item) {
        var config = {
            method: "post",
            mode: "no-cors",
            url: "https://9hure84vta.execute-api.ap-southeast-1.amazonaws.com/dev/getapilog",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            data: item,
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return data;
    },

    async postConfig(item) {
        var config = {
            method: "post",
            mode: "no-cors",
            url: "https://0cmdwaivl2.execute-api.ap-southeast-1.amazonaws.com/dev/postconfig",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            data: item,
        };

        var data = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return data;
    },
};

export default module;
