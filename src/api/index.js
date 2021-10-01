/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

var module = {
    getTriggerSystemSelect(id) {
        var body = JSON.stringify({
            orgId: id,
        });
        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/select/system",
            headers: {
                "Content-Type": "application/json",
            },
            data: body,
        };

        var data = axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        return data;
    },

    async getConfigSelect() {
        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/select/config",
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

    async getConfigManage(id) {
        const body = JSON.stringify({
            configId: id,
        });

        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/config/manageById",
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

    async generateKey() {
        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/apikey/generate",
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

    async updateConfig(id, item) {
        var body = JSON.stringify({
            configId: id,
            name: item.name,
            configDesc: item.desc,
            triggerSystem: item.triggerSystem,
            url: item.systemUrl,
            returnUrl: item.returnUrl,
            callbackUrl: item.callbackUrl,
            exchangeId: item.exchangeId,
            sellerId: item.sellerId,
            apiKey: item.apiKey,
        });
        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/config/update",
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

    async updateStatus(id, value) {
        const body = JSON.stringify({
            configId: id,
            configStats: value,
        });
        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/config/updateStats",
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

    async removeConfig(id) {
        const body = JSON.stringify({
            configId: id,
        });
        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/config/remove",
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
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/config/list",
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

    async addConfig(item) {
        var body = JSON.stringify({
            apiKey: item.apiKey,
            callbackUrl: item.callbackUrl,
            configDesc: item.configDesc,
            exchangeId: item.exchangeId,
            name: item.name,
            returnUrl: item.returnUrl,
            sellerId: item.sellerId,
            triggerSystem: item.triggerSystem,
            url: item.url,
        });
        var config = {
            method: "post",
            url: "https://kg6r1esoya.execute-api.ap-southeast-1.amazonaws.com/dev/config/add",
            header: {
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
};

export default module;
