angular.module("app")
    .factory("apifactory", ["$resource", function ($resource) {
        return {
            getIssues: $resource("https://api.github.com/repos/:username/:repo/issues", {
                state: "open"
            },
                {
                    query: {
                        method: "GET",
                        isArray: true
                    }
                })
        }
    }]);