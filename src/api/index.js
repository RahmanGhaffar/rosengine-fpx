/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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

    // get select option based on organisation id
    async getConfigSelect(id) {
        var param = JSON.stringify({
            orgId: id,
        });
        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/select/system",
            headers: {
                "Content-Type": "application/json",
            },
            data: param,
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
        var body = JSON.stringify({
            exchangeId: id,
        });

        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/select/seller",
            headers: {
                "Content-Type": "application/json",
            },
            data: body,
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
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/select/exchange",
            headers: {
                "Content-Type": "application/json",
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
