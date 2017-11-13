! function(window) {
    "use strict";

    function registerModule(moduleName, dependencies) {
        angular.module(moduleName, dependencies || []), angular.module(applicationModuleName).requires.push(moduleName)
    }
    var applicationModuleName = "mean",
        service = {
            applicationEnvironment: window.env,
            applicationModuleName: applicationModuleName,
            applicationModuleVendorDependencies: ["ngResource", "ngAnimate", "ngMessages", "ui.router", "ui.bootstrap", "ngFileUpload", "ui-notification", "ngMaterial", "material.svgAssetsCache", "ngAria", "chart.js", "ngD3tree", "lfNgMdFileInput", "duScroll", "md-buttons-toggle", "ngInputModified", "angular-spinkit", "ngSanitize", "highcharts-ng", "oitozero.ngSweetAlert", "angAccordion", "sc.twemoji", "nzTour", "sc.twemoji", "ngCookies"],
            registerModule: registerModule
        };
    window.ApplicationConfiguration = service, angular.module("ui-notification").config(["NotificationProvider", function(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 2e3,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: "right",
            positionY: "bottom"
        })
    }])
}(window);
! function(app) {
    "use strict";

    function bootstrapConfig($compileProvider, $locationProvider, $httpProvider, $logProvider) {
        $locationProvider.html5Mode({
            enabled: !0,
            requireBase: !1
        }).hashPrefix("!"), $httpProvider.interceptors.push("authInterceptor"), $compileProvider.debugInfoEnabled("production" !== app.applicationEnvironment), $logProvider.debugEnabled("production" !== app.applicationEnvironment)
    }

    function init() {
        if (window.location.hash && "#_=_" === window.location.hash)
            if (window.history && history.pushState) window.history.pushState("", document.title, window.location.pathname);
            else {
                var scroll = {
                    top: document.body.scrollTop,
                    left: document.body.scrollLeft
                };
                window.location.hash = "", document.body.scrollTop = scroll.top, document.body.scrollLeft = scroll.left
            }
        angular.bootstrap(document, [app.applicationModuleName])
    }
    angular.module(app.applicationModuleName, app.applicationModuleVendorDependencies), angular.module(app.applicationModuleName).config(bootstrapConfig), bootstrapConfig.$inject = ["$compileProvider", "$locationProvider", "$httpProvider", "$logProvider"], angular.element(document).ready(init)
}(ApplicationConfiguration);
! function(app) {
    "use strict";
    app.registerModule("articles", ["core"]), app.registerModule("articles.admin", ["core.admin"]), app.registerModule("articles.admin.routes", ["core.admin.routes"]), app.registerModule("articles.services"), app.registerModule("articles.routes", ["ui.router", "core.routes", "articles.services"])
}(ApplicationConfiguration);
"use strict";
ApplicationConfiguration.registerModule("chat", ["ngMaterial", "duScroll", "ngSanitize", "ngMessages", "ngAria", "sc.twemoji", "ngCookies"]);
! function(app) {
    "use strict";
    app.registerModule("grid"), angular.module("grid").config(["$mdThemingProvider", function($mdThemingProvider) {
        $mdThemingProvider.theme("blue").primaryPalette("blue", {
            default: "200",
            "hue-1": "100",
            "hue-2": "600",
            "hue-3": "A100"
        }), $mdThemingProvider.theme("red").primaryPalette("red", {
            default: "300",
            "hue-1": "100",
            "hue-2": "600",
            "hue-3": "A100"
        }), $mdThemingProvider.theme("pink").primaryPalette("pink", {
            default: "200",
            "hue-1": "100",
            "hue-2": "600",
            "hue-3": "A100"
        }), $mdThemingProvider.theme("min").primaryPalette("purple").accentPalette("blue"), $mdThemingProvider.theme("mid").primaryPalette("indigo").accentPalette("indigo"), $mdThemingProvider.theme("max").primaryPalette("lime").accentPalette("deep-purple").warnPalette("blue"), $mdThemingProvider.alwaysWatchTheme(!0)
    }])
}(ApplicationConfiguration);
! function(app) {
    "use strict";
    app.registerModule("core"), app.registerModule("core.routes", ["ui.router"]), app.registerModule("core.admin", ["core"]), app.registerModule("core.admin.routes", ["ui.router"])
}(ApplicationConfiguration);
! function(app) {
    "use strict";
    app.registerModule("users"), app.registerModule("users.admin"), app.registerModule("users.admin.routes", ["ui.router", "core.routes", "users.admin.services"]), app.registerModule("users.admin.services"), app.registerModule("users.routes", ["ui.router", "core.routes"]), app.registerModule("users.services")
}(ApplicationConfiguration);
! function() {
    "use strict";

    function menuConfig(Menus) {
        Menus.addSubMenuItem("topbar", "admin", {
            title: "Manage Articles",
            state: "admin.articles.list"
        })
    }
    angular.module("articles.admin").run(menuConfig), menuConfig.$inject = ["menuService"]
}();
! function() {
    "use strict";

    function routeConfig($stateProvider) {
        $stateProvider.state("admin.articles", {
            abstract: !0,
            url: "/articles",
            template: "<ui-view/>"
        }).state("admin.articles.list", {
            url: "",
            templateUrl: "/modules/articles/client/views/admin/list-articles.client.view.html",
            controller: "ArticlesAdminListController",
            controllerAs: "vm",
            data: {
                roles: ["admin"]
            }
        }).state("admin.articles.create", {
            url: "/create",
            templateUrl: "/modules/articles/client/views/admin/form-article.client.view.html",
            controller: "ArticlesAdminController",
            controllerAs: "vm",
            data: {
                roles: ["admin"]
            },
            resolve: {
                articleResolve: newArticle
            }
        }).state("admin.articles.edit", {
            url: "/:articleId/edit",
            templateUrl: "/modules/articles/client/views/admin/form-article.client.view.html",
            controller: "ArticlesAdminController",
            controllerAs: "vm",
            data: {
                roles: ["admin"]
            },
            resolve: {
                articleResolve: getArticle
            }
        })
    }

    function getArticle($stateParams, ArticlesService) {
        return ArticlesService.get({
            articleId: $stateParams.articleId
        }).$promise
    }

    function newArticle(ArticlesService) {
        return new ArticlesService
    }
    angular.module("articles.admin.routes").config(routeConfig), routeConfig.$inject = ["$stateProvider"], getArticle.$inject = ["$stateParams", "ArticlesService"], newArticle.$inject = ["ArticlesService"]
}();
! function() {
    "use strict";

    function menuConfig(menuService) {
        menuService.addMenuItem("topbar", {
            title: "Articles",
            state: "articles",
            type: "dropdown",
            roles: ["*"]
        }), menuService.addSubMenuItem("topbar", "articles", {
            title: "List Articles",
            state: "articles.list",
            roles: ["*"]
        })
    }
    angular.module("articles").run(menuConfig), menuConfig.$inject = ["menuService"]
}();
! function() {
    "use strict";

    function routeConfig($stateProvider) {
        $stateProvider.state("articles", {
            abstract: !0,
            url: "/articles",
            template: "<ui-view/>"
        }).state("articles.list", {
            url: "",
            templateUrl: "/modules/articles/client/views/list-articles.client.view.html",
            controller: "ArticlesListController",
            controllerAs: "vm",
            data: {
                pageTitle: "Articles List"
            }
        }).state("articles.view", {
            url: "/:articleId",
            templateUrl: "/modules/articles/client/views/view-article.client.view.html",
            controller: "ArticlesController",
            controllerAs: "vm",
            resolve: {
                articleResolve: getArticle
            },
            data: {
                pageTitle: "Article {{ articleResolve.title }}"
            }
        })
    }

    function getArticle($stateParams, ArticlesService) {
        return ArticlesService.get({
            articleId: $stateParams.articleId
        }).$promise
    }
    angular.module("articles.routes").config(routeConfig), routeConfig.$inject = ["$stateProvider"], getArticle.$inject = ["$stateParams", "ArticlesService"]
}();
! function() {
    "use strict";

    function ArticlesService($resource, $log) {
        function createOrUpdate(article) {
            function onSuccess(article) {}

            function onError(errorResponse) {
                var error = errorResponse.data;
                handleError(error)
            }
            return article._id ? article.$update(onSuccess, onError) : article.$save(onSuccess, onError)
        }

        function handleError(error) {
            $log.error(error)
        }
        var Article = $resource("/api/articles/:articleId", {
            articleId: "@_id"
        }, {
            update: {
                method: "PUT"
            }
        });
        return angular.extend(Article.prototype, {
            createOrUpdate: function() {
                var article = this;
                return createOrUpdate(article)
            }
        }), Article
    }
    angular.module("articles.services").factory("ArticlesService", ArticlesService), ArticlesService.$inject = ["$resource", "$log"]
}();
! function() {
    "use strict";

    function ArticlesController($scope, article, Authentication) {
        var vm = this;
        vm.article = article, vm.authentication = Authentication
    }
    angular.module("articles").controller("ArticlesController", ArticlesController), ArticlesController.$inject = ["$scope", "articleResolve", "Authentication"]
}();
! function() {
    "use strict";

    function ArticlesListController(ArticlesService) {
        var vm = this;
        vm.articles = ArticlesService.query()
    }
    angular.module("articles").controller("ArticlesListController", ArticlesListController), ArticlesListController.$inject = ["ArticlesService"]
}();
"use strict";
angular.module("chat").run([function() {}]);
"use strict";
angular.module("chat").config(["$stateProvider", function($stateProvider) {
    $stateProvider.state("bot", {
        url: "/bot",
        templateUrl: "modules/chat/client/views/bot.client.view.html",
        data: {}
    })
}]);
"use strict";
angular.module("chat").controller("BotController", ["$scope", "$location", "Authentication", "Socket", "$filter", "$timeout", "$sce", "$document", "$anchorScroll", "$sanitize", "$cookies", "$q", function($scope, $location, Authentication, Socket, $filter, $timeout, $sce, $document, $anchorScroll, $sanitize, $cookies, $q) {
    function querySearch(query) {
        var results = query ? $scope.questions.filter(createFilterFor(query)) : $scope.questions,
            deferred = $q.defer();
        return $timeout(function() {
            deferred.resolve(results)
        }, 100 * Math.random(), !1), deferred.promise
    }

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function(question) {
            return question.value.indexOf(lowercaseQuery) > -1
        }
    }
    Authentication.user && Authentication.user.roles && ($scope.allowInput = Authentication.user.roles.indexOf("admin") !== -1), $scope.getAnswerTitle = function(index) {
        return "RÃ©ponse " + (index + 1)
    }, $scope.isAnswerOpen = function(index) {
        return 0 == index
    }, $scope.load = function() {
        twemoji.size = "svg", twemoji.ext = ".svg", twemoji.parse(document.body)
    }, $scope.opcoes = {}, $scope.triggers = null, $scope.messages = [], $scope.socket = io.connect(), $scope.iniciado = !1, $scope.nome = "", $scope.email = "", $scope.message = {}, $scope.select = {}, $scope.end, $scope.loaded = !1;
    var minCompanyLength = 3;
    $scope.iframeHeight = $(window).height();
    var offset = $scope.iframeHeight / 2,
        duration = 500;
    $scope.showScrollPrompt = !0, $scope.debug = {
        switch: !1,
        animations: !0,
        show: !1
    }, $timeout(function() {
        $scope.loaded = !0
    }, 1e3);
    var isCompanyValid = function(message) {
        return message && message.length >= minCompanyLength
    };
    $scope.initialize = function() {
        function generateRandomId() {
            for (var text = "", limit = 7, possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < limit; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text
        }

        function acceptTrigger(item) {
            return !item[0].startsWith("holder")
        }
        $scope.iniciado = !0, $scope.currentMessageId = 0, $scope.messageLoading = [], $scope.email = generateRandomId(), $scope.nome = generateRandomId();
        var visitedBefore = "true" == $cookies.get("visitedBefore");
        visitedBefore || $cookies.put("visitedBefore", "true"), visitedBefore ? $scope.socket.emit("send", {
            message: "back",
            who: $scope.email
        }) : (console.log("emitting hello"), $scope.socket.emit("send", {
            message: "hello",
            who: $scope.email
        })), $scope.socket.on("message", function(data) {
            if ($scope.showTrigger = !1, data.message) {
                var messageLines = data.message.split("<br>"),
                    tmp = [];
                messageLines.forEach(function(line) {
                    line = line.trim(), line > "" && tmp.push(line)
                }), messageLines = tmp, console.log("messageLines: " + JSON.stringify(messageLines));
                var i = 0;
                messageLines.forEach(function(line) {
                    line = line.trim(), $scope.triggerType = "choices";
                    var botMessage = {
                        who: "bot",
                        status: "hidden"
                    };
                    if (line.startsWith("_json:")) {
                        var jsonString = line.substring(6),
                            parsedJson = JSON.parse(jsonString);
                        switch (parsedJson.type) {
                            case "image":
                                botMessage.src = parsedJson.src, botMessage.type = "image";
                                break;
                            case "video":
                                botMessage.src = $sce.trustAsHtml(parsedJson.src), botMessage.type = "video";
                                break;
                            case "article":
                                botMessage.src = $sce.trustAsHtml(parsedJson.src), botMessage.type = "article";
                                break;
                            case "company":
                                botMessage.message = parsedJson.content, $scope.triggerType = "company", botMessage.type = "text";
                                break;
                            case "question":
                                botMessage.message = parsedJson.content, $scope.triggerType = "question", botMessage.type = "text";
                                break;
                            case "quote":
                                botMessage.pribot_answers = [parsedJson.content, parsedJson.content1, parsedJson.content2], botMessage.type = "quote"
                        }
                    } else line.startsWith("_ending:") ? (console.log("ending"), $scope.end = !0, botMessage.message = line.substring(9), botMessage.type = "text") : (botMessage.message = line, botMessage.type = "text");
                    if ($scope.messages.push(botMessage), 0 == i && ($scope.messages[$scope.currentMessageId].status = "blinking"), $scope.debug.animations) var delay = 800 + 300 * Math.min(data.message.length, 500) / 100 * (i + 1);
                    else delay = 100 + 5 * data.message.length / 100 * (i + 1);
                    $timeout(function(p) {
                        $scope.messages[p.currentId].status = "shown", p.currentLine < messageLines.length - 1 ? $scope.messages[p.currentId + 1].status = "blinking" : $timeout(function() {
                            $scope.showTrigger = !0
                        }, 500);
                        var someElement = angular.element(document.getElementById("item_" + p.currentId));
                        $document.scrollToElementAnimated(someElement, offset, duration);
                        var freeTextTopics = ["sorry", "question"];
                        data.uservars && data.uservars.topic && freeTextTopics.indexOf(data.uservars.topic) > -1 && ($scope.triggerType = "question"), $scope.triggers = [], "choices" == $scope.triggerType && data.triggers.forEach(function(item) {
                            item[0].indexOf("|") != -1 ? item[0].split("|").forEach(function(itemsplit) {
                                itemsplit = itemsplit.replace(")", "").replace("(", "");
                                var novoitem = [itemsplit, item[1]];
                                acceptTrigger(novoitem) && $scope.triggers.push(novoitem)
                            }) : acceptTrigger(item) && $scope.triggers.push(item)
                        })
                    }, delay, !0, {
                        currentId: $scope.currentMessageId,
                        currentLine: i
                    }), $scope.currentMessageId++, i++
                }), data.uservars && Object.keys(data.uservars).forEach(function(item) {
                    item.startsWith("_") || ($scope.opcoes[item] = data.uservars[item])
                }), $scope.opcoes.end && ($scope.end = $scope.opcoes.end), $scope.$apply()
            } else console.log("There is a problem:", data)
        })
    }, $scope.initialize();
    var isQuestionValid = function(question) {
        return !!$scope.allowInput || $scope.questionsList.indexOf(question) >= 0
    };
    $scope.send = function(type, text) {
        $scope.showScrollPrompt = !1;
        var message;
        switch (type) {
            case "question":
                message = $scope.message.content;
                var valid = isQuestionValid($scope.message.content);
                if (!valid) return;
                break;
            case "trigger":
                message = $filter("capitalize")(text);
                break;
            case "company":
                if (message = $scope.message.content, valid = isCompanyValid($scope.message.content), !valid) return
        }
        $scope.messages.push({
            type: type,
            who: "me",
            message: message
        }), $scope.currentMessageId++, $scope.socket.emit("send", {
            type: type,
            message: message,
            who: $scope.email
        }), $scope.message.content = "", $scope.triggerType = ""
    }, $scope.questionsList = ["Faire l'amour a 15ans ?"], $scope.questions = $scope.questionsList.map(function(question) {
        return {
            value: question,
            display: question
        }
    }), $scope.querySearch = querySearch
}]);
angular.module("chat").filter("capitalize", function() {
    return function(input) {
        if (null !== input) return input.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
    }
}), angular.module("chat").filter("makereplacements", function() {
    return function(input) {
        if (null !== input) return input.replace("0q0", "?").replace("0e0", "!")
    }
}), angular.module("chat").directive("ngEnter", function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            13 === event.which && (scope.$apply(function() {
                scope.$eval(attrs.ngEnter)
            }), event.preventDefault())
        })
    }
});
angular.module("chat");
! function() {
    "use strict";

    function routeConfig($stateProvider) {
        $stateProvider.state("emotion", {
            url: "/emotion",
            templateUrl: "modules/grid/client/views/emotion.client.view.html",
            controller: "EmotionController",
            controllerAs: "vm"
        }).state("filter-image", {
            url: "/filter-image",
            templateUrl: "modules/grid/client/views/filter-image.client.view.html",
            controller: "FilterImageController",
            controllerAs: "vm"
        }).state("filter-text", {
            url: "/filter-text",
            templateUrl: "modules/grid/client/views/filter-text.client.view.html",
            controller: "FilterTextController",
            controllerAs: "vm"
        }).state("image", {
            url: "/image",
            templateUrl: "modules/grid/client/views/image.client.view.html",
            controller: "ImageController",
            controllerAs: "vm"
        }).state("violence", {
            url: "/violence",
            templateUrl: "modules/grid/client/views/image.client.view.html",
            controller: "ImageController",
            controllerAs: "vm"
        }).state("faceEmotion", {
            url: "/faceEmotion",
            templateUrl: "modules/grid/client/views/image.client.view.html",
            controller: "ImageController",
            controllerAs: "vm"
        }).state("hate", {
            url: "/hate",
            templateUrl: "modules/grid/client/views/hate.client.view.html",
            controller: "HateController",
            controllerAs: "vm"
        }).state("neighbors", {
            url: "/neighbors",
            templateUrl: "modules/grid/client/views/neighbors.client.view.html",
            controller: "HateController",
            controllerAs: "vm"
        }).state("textEmotions", {
            url: "/textEmotions",
            templateUrl: "modules/grid/client/views/text.emotion.client.view.html",
            controller: "HateController",
            controllerAs: "vm"
        }).state("grid-main", {
            url: "/main",
            templateUrl: "modules/grid/client/views/grid-main.client.view.html",
            controller: "GridController",
            controllerAs: "vm"
        })
    }
    angular.module("grid").config(routeConfig), routeConfig.$inject = ["$stateProvider"]
}();
! function() {
    "use strict";

    function EmotionController($scope, $mdToast, EmotionService, $interval, $http, Upload, $timeout, $document, SweetAlert, Authentication, $window) {
        function validateURL(textval) {
            var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
            return urlregex.test(textval)
        }
        Authentication.user && Authentication.user.roles && ($scope.allowInput = Authentication.user.roles.indexOf("admin") !== -1), $scope.resultsAvailable = !1, $scope.input = {
            text: "",
            url: ""
        }, $scope.files = [];
        var getDifference = function(a, b) {
            for (var i = 0, j = 0, result = ""; j < b.length;) a[i] != b[j] || i == a.length ? result += b[j] : i++, j++;
            return result.trim()
        };
        $scope.previousText = "", $scope.previousTime = (new Date).getTime() / 1e3, $scope.forms = {}, $scope.dirty = !1, $interval(function() {
            var diff1 = getDifference($scope.previousText, $scope.input.text),
                diff2 = getDifference($scope.input.text, $scope.previousText);
            (diff1.length > 0 || diff2.length > 0) && ($scope.dirty = !0, $scope.previousText = $scope.input.text);
            var currentSeconds = (new Date).getTime() / 1e3;
            0 == diff1.length && 0 == diff2.length && $scope.dirty && currentSeconds - $scope.previousTime > 1.5 && ($scope.dirty = !1, $scope.previousTime = currentSeconds, console.log("text updated, submitting data"), $scope.submitImage())
        }, 1e3);
        var getColor = function(emotion) {
                var mapping = {
                    amusement: "#aeea00",
                    anger: "#d50000",
                    awe: "#00bfa5",
                    contentment: "#ffd600",
                    disgust: "#aa00ff",
                    excitement: "#ff6d00",
                    fear: "#00b8d4",
                    sadness: "#2962ff"
                };
                return mapping[emotion]
            },
            categories = ["amusement", "anger", "awe", "contentment", "disgust", "excitement", "fear", "sadness"],
            formatResponse = function(data) {
                for (var output = [], i = 0; i < categories.length; i++) output.push({
                    name: categories[i],
                    y: 100 * data[categories[i]],
                    color: getColor(categories[i])
                });
                return output
            },
            formatPrediciton = function(data) {
                var pred = Object.keys(data).reduce(function(a, b) {
                    return data[a] > data[b] ? a : b
                });
                return {
                    name: pred,
                    value: data[pred]
                }
            },
            defaultPrediction = function() {
                return {
                    model: null,
                    name: null
                }
            },
            defaultData = function() {
                for (var output = [], i = 0; i < categories.length; i++) output.push({
                    name: categories[i],
                    y: 0,
                    color: getColor(categories[i])
                });
                return output
            },
            initChart = function() {
                $scope.chartData = {
                    Image: defaultData(),
                    Text: defaultData(),
                    "Fusion Model": defaultData()
                }, $scope.predictions = {
                    Image: defaultPrediction(),
                    Text: defaultPrediction(),
                    "Fusion Model": defaultPrediction()
                }
            };
        initChart();
        var displayFigure = function(response, animation) {
            return console.log("response" + JSON.stringify(response)), response && 1 != !response.length ? (response = response[0], response.image_found || ($scope.input.url ? SweetAlert.swal("Problem retrieving the url", "Try uploading the image instead. If it doesn't work, please try another image.", "warning") : $scope.files.length > 0 && SweetAlert.swal("Problem processing the image", "Try another image instead.", "warning")), response.image_found ? ($scope.chartData.Image = formatResponse(response.results.image_only), $scope.predictions.Image = formatPrediciton(response.results.image_only)) : ($scope.chartData.Image = defaultData(), $scope.predictions.Image = defaultPrediction()), response.text_found ? ($scope.chartData.Text = formatResponse(response.results.text_only), $scope.predictions.Text = formatPrediciton(response.results.text_only)) : ($scope.chartData.Text = defaultData(), $scope.predictions.Text = defaultPrediction()), $scope.chartData["Fusion Model"] = formatResponse(response.results.image_text_fusion), $scope.predictions["Fusion Model"] = formatPrediciton(response.results.image_text_fusion), updateChart(), void($scope.resultsAvailable = !0)) : (console.log("invalid response"), $scope.resultsPending = !1, void SweetAlert.swal("Problem processing the input", "Try with another image and/or text.\nIf you are using an image url, try uploading the image instead.", "warning"))
        };
        $scope.uploadFiles = function(file, errFiles) {
            if ($scope.uploadedFile = file, $scope.errFile = errFiles && errFiles[0], file) {
                animate();
                file.upload = Upload.upload({
                    url: "/api/emotion/classify",
                    data: {
                        uploadedFile: file,
                        text: $scope.input.text
                    }
                }).then(function(response) {
                    console.log("File is successfully uploaded"), displayFigure(response.data.response)
                }, function(response) {}, function(evt) {
                    file.progress = Math.min(100, parseInt(100 * evt.loaded / evt.total))
                })
            }
        }, $scope.submitUrl = function() {
            $scope.addRemoteFilesApi.removeAll(), $scope.addRemoteFilesApi.addRemoteFile($scope.input.url, "", "image"), $scope.files.length > 1 && ($scope.files = [$scope.files[$scope.files.length - 1]])
        }, $scope.$watch("input.url", function(newVal, oldVal) {
            if (console.log("new url" + $scope.input.url), validateURL($scope.input.url)) $scope.submitUrl();
            else {
                var tmpUrl = "http://" + $scope.input.url;
                validateURL(tmpUrl) ? ($scope.input.url = tmpUrl, $scope.submitUrl()) : $scope.addRemoteFilesApi && $scope.addRemoteFilesApi.removeAll()
            }
        }), $scope.$watchCollection("files", function(newVal, oldVal) {
            console.log($scope.files), $scope.previousTime = (new Date).getTime() / 1e3, $scope.dirty = !1, $scope.previousText = $scope.input.text, $scope.submitImage()
        }), $scope.randomExamplesList = [{
            id: 14362397619,
            emotion: "amusement",
            url: "http://farm3.staticflickr.com/2917/14362397619_48824fee7d_z.jpg",
            title: "High Ride!",
            description: "Riders on an attraction at  PowerPark, Alah&#228;rm&#228;."
        }, {
            id: 6348518273,
            emotion: "anger",
            url: "http://farm7.staticflickr.com/6052/6348518273_4c6bf4bf87_z.jpg",
            title: "Amy Smash",
            description: "Test shots for Hulk photo shoot"
        }, {
            id: 6529629327,
            emotion: "anger",
            url: "http://farm8.staticflickr.com/7002/6529629327_fe9bb7c54c_z.jpg",
            title: "NYC - Metropolitan Museum of Art - Paul Cadmus - The Seven Deadly Sins: Anger",
            description: ""
        }, {
            id: 8389746931,
            emotion: "anger",
            url: "http://farm9.staticflickr.com/8216/8389746931_0b01417cda_z.jpg",
            title: "thoughtful",
            description: "This little girl lives in a desolate place on a salt farm in India. Miles away from any civilisation. With nothing more than a tent and salt."
        }, {
            id: 3136367056,
            emotion: "sadness",
            url: "http://farm4.staticflickr.com/3118/3136367056_7b2cd91b3f_z.jpg",
            title: "Emotion Series - Sadness",
            description: "Though this is a rather strange choice for upload during Christmas Day, this photo really affected me when reviewing some older images. So much so, that it has inspired a new series, the Emotion Series. This is the first in the series, entitled &quot;Sadness&quot;."
        }, {
            id: 7841555212,
            emotion: "fear",
            url: "http://farm8.staticflickr.com/7274/7841555212_1e3be0689a_z.jpg",
            title: "image of a tarantula",
            description: 'image of a tarantula - Tarantula isolated on turquoise background. To Download this image without watermarks for Free, visit: <a href="http://www.sourcepics.com/free-stock-photography/24735683-image-of-a-tarantula.shtml" rel="nofollow">www.sourcepics.com/free-stock-photography/24735683-image-...</a>'
        }, {
            id: 5387316639,
            emotion: "disgust",
            url: "http://farm6.staticflickr.com/5220/5387316639_52822f3581_z.jpg",
            title: "Disgusting Money",
            description: "Here is a very striking photograph of money melting around my lips. It is a developmental result of the idea that money isn't all that nice. I also wanted to represent the link between money and our society which consume so much."
        }, {
            id: 7596336920,
            emotion: "amusement",
            url: "http://farm8.staticflickr.com/7252/7596336920_2bd86843c5_z.jpg",
            title: "SWINGS",
            description: "One of many amusement rides along the boardwalk at Coney Island"
        }, {
            id: 10787810044,
            emotion: "amusement",
            url: "http://farm4.staticflickr.com/3724/10787810044_62e22b32ec_z.jpg",
            title: "Boardwalk Flight",
            description: "08/10/2013 The Boardwalk Flight ride at Coney Island Luna Park. Kodak Ektar 100. Contax G1. Carl Zeiss Planar 45mm 1:2.0."
        }, {
            id: 5351293906,
            emotion: "anger",
            url: "http://farm6.staticflickr.com/5001/5351293906_b5f7cbbd0e_z.jpg",
            title: "Wrath",
            description: "Wrath, also known as anger or &quot;rage&quot;, may be described as inordinate and uncontrolled feelings of hatred and anger."
        }, {
            id: 4799617366,
            emotion: "anger",
            url: "http://farm5.staticflickr.com/4080/4799617366_5a10ff0839_z.jpg",
            title: "Angered by iPhone 4 Complaints, Steve Jobs Transforms into Hulk",
            description: '<a href="http://posterous.com" rel="nofollow">Posted via email</a>  from <a href="http://fibnews.com/angered-by-iphone-4-complaints-steve-jobs-tra" rel="nofollow">Fibnews</a>'
        }, {
            id: 3112421899,
            emotion: "sadness",
            url: "http://farm4.staticflickr.com/3213/3112421899_cfa27734d0_z.jpg",
            title: "***personal Pierrot - colours***",
            description: "Please don't use this image on websites, blogs or other media without my explicit permission. Â© All rights reserved"
        }, {
            id: 8506999030,
            emotion: "sadness",
            url: "http://farm9.staticflickr.com/8522/8506999030_d82d01d81b_z.jpg",
            title: "Sadness - moody portrait of a beautiful young redhead girl.",
            description: "Sadness - moody portrait of a beautiful young redhead girl."
        }, {
            id: 10104580426,
            emotion: "fear",
            url: "http://farm4.staticflickr.com/3787/10104580426_d0cba69a91_z.jpg",
            title: "Blasze nobody's perfect #blasze#blaszeart#art#street#streetart#modernart#contemporary#popart#gulf#dubai#emarat#france#fashion#deutchland#mode#fear#handsome#graffiti#love#face#berlin#shave#asian#eyes#me#blood",
            description: ""
        }, {
            id: 3636462725,
            emotion: "disgust",
            url: "http://farm3.staticflickr.com/2458/3636462725_e5f51094f6_z.jpg",
            title: "For Keartona who put in the request",
            description: ""
        }], $scope.indexCount = 0, $scope.getRandomImage = function() {
            var randomExample = $scope.randomExamplesList[$scope.indexCount % $scope.randomExamplesList.length];
            $scope.indexCount++, $scope.input.url = randomExample.url, $scope.input.text = randomExample.title, $scope.submitUrl()
        }, $scope.capitalizeFirstLetter = function(string) {
            return string && string.length > 0 ? string.charAt(0).toUpperCase() + string.slice(1) : string
        };
        var scrollToResults = function() {
                var offset = $scope.iframeHeight / 2,
                    duration = 500,
                    someElement = angular.element(document.getElementById("text_container"));
                $document.scrollToElementAnimated(someElement, offset, duration)
            },
            animate = function() {
                $scope.resultsPending = !0, scrollToResults(), console.log("scrolling")
            };
        $scope.submitImage = function() {
            if (!$scope.resultsPending) {
                var file = $scope.files[0];
                if (file && !file.isRemote) $scope.uploadFiles($scope.files[0]);
                else {
                    if ($scope.input.url) var url = $scope.input.url;
                    if (!url && !$scope.input.text.trim()) return console.log("nothing to send"), initChart(), void($scope.showResults = !1);
                    var animation = animate();
                    EmotionService.Emotion.classify({
                        input: [{
                            image: url,
                            text: $scope.input.text
                        }]
                    }).$promise.then(function(response) {
                        response = response.response, console.log(JSON.stringify(response)), displayFigure(response, animation)
                    })
                }
            }
        };
        var emojiMap = {
            amusement: "bigsmile.gif",
            anger: "angry.gif",
            awe: "surprised.gif",
            contentment: "nod.gif",
            disgust: "puking.gif",
            excitement: "clapping.gif",
            fear: "worried.gif",
            sadness: "crying.gif"
        };
        $scope.getOpacity = function(model) {
            if (model in $scope.predictions) return $scope.predictions[model].name ? $scope.predictions[model].value / 1 : 0
        }, $scope.getEmoji = function(model) {
            return null != $scope.predictions[model].name ? "/modules/grid/client/img/gifs/" + emojiMap[$scope.predictions[model].name] : ""
        }, $scope.chartConfig = {}, $scope.models = ["Text", "Image", "Fusion Model"];
        var categories_labels = ["sadness", "amusement", "anger", "awe", "contentment", "disgust", "excitement", "fear"],
            updateChart = function() {
                $scope.chartConfig = {}, $scope.models.forEach(function(model) {
                    $scope.chartConfig[model] = {
                        chart: {
                            marginLeft: 60,
                            marginRight: 60,
                            polar: !0,
                            spacingBottom: 40,
                            spacingTop: 0,
                            spacingLeft: 5,
                            spacingRight: 5,
                            animation: {
                                duration: 1500
                            },
                            width: 370,
                            height: 370
                        },
                        title: {
                            text: model,
                            align: "center",
                            verticalAlign: "bottom",
                            margin: 50,
                            floating: !0,
                            y: 30
                        },
                        legend: {
                            enabled: !1
                        },
                        xAxis: {
                            tickInterval: 1,
                            min: 0,
                            max: 8,
                            categories: categories_labels
                        },
                        tooltip: {
                            formatter: function() {
                                return "<b>" + categories[Highcharts.numberFormat(this.x, 0) - 1] + "</b><br/>value: " + this.y
                            }
                        },
                        yAxis: {
                            min: 0,
                            tickInterval: 10,
                            tickPositions: [0, 20, 40, 60, 80, 100],
                            minorTickInterval: 0
                        },
                        plotOptions: {
                            series: {
                                pointStart: .5,
                                pointInterval: 1
                            },
                            column: {
                                pointPadding: 0,
                                groupPadding: 0,
                                colorByPoint: !0
                            }
                        },
                        series: [{
                            pointPlacement: "between",
                            type: "column",
                            name: "test data",
                            data: $scope.chartData[model]
                        }]
                    }
                }), $scope.resultsPending = !1
            },
            tmpResponse = [{
                image: "http://farm3.staticflickr.com/2917/14362397619_48824fee7d_z.jpg",
                results: {
                    image_fusion: {
                        amusement: 1,
                        anger: 6.423958137413238e-31,
                        awe: 1.0339893871669226e-11,
                        contentment: 2.7924165777815184e-18,
                        disgust: 6.000247227927449e-24,
                        excitement: 9.333539591037003e-18,
                        fear: 4.8523934347254546e-29,
                        sadness: 1.6641190230452576e-31
                    },
                    image_only: {
                        amusement: .10896142572164536,
                        anger: .1048605889081955,
                        awe: .25764167308807373,
                        contentment: .10512422770261765,
                        disgust: .10503346472978592,
                        excitement: .10471838712692261,
                        fear: .10852264612913132,
                        sadness: .10513758659362793
                    },
                    image_text_fusion: {
                        amusement: 1,
                        anger: 1.1316540375886883e-22,
                        awe: 7.234858299898089e-18,
                        contentment: 4.4751492997980984e-21,
                        disgust: 1.707472666056644e-24,
                        excitement: 5.3778962077859205e-14,
                        fear: 1.848766598200389e-27,
                        sadness: 1.0351732391759294e-30
                    },
                    text_fusion: {
                        amusement: 1,
                        anger: 9.904003110746459e-21,
                        awe: 2.2544623630164537e-16,
                        contentment: 4.963474518157597e-19,
                        disgust: 1.2625393398716108e-20,
                        excitement: 1.0892898758831874e-14,
                        fear: 1.5867807932547423e-24,
                        sadness: 2.1030150427649623e-26
                    },
                    text_only: {
                        amusement: 1,
                        anger: 4.57527442810802e-25,
                        awe: 8.512233180071274e-26,
                        contentment: 6.435863724754299e-28,
                        disgust: 1.123930462182155e-24,
                        excitement: 1.5143497282435296e-14,
                        fear: 2.1315114350228102e-24,
                        sadness: 2.3796519558950257e-31
                    }
                },
                text: "High Ride!"
            }];
        displayFigure(tmpResponse), $scope.resultsAvailable = !1, $window.scrollTo(0, 0)
    }
    angular.module("grid").controller("EmotionController", EmotionController), EmotionController.$inject = ["$scope", "$mdToast", "EmotionService", "$interval", "$http", "Upload", "$timeout", "$document", "SweetAlert", "Authentication", "$window"]
}();
! function() {
    "use strict";

    function FilterImageController($scope, ImageService, $sanitize, TourService, nzTour, $window) {
        $scope.load = function() {
            twemoji.ext = ".svg", twemoji.size = "svg", twemoji.parse(document.body)
        };
        var tour = window.tour = {
            config: TourService.config,
            steps: [{
                target: "#classifier",
                content: "Here you can select the class of incidents you want to measure."
            }, {
                target: "#slider",
                content: "Move the slider to the right to have more confidence in the considered class."
            }, {
                target: "#results",
                content: "These image are the ones which are classified as belonging to the class with a minimum probability selected by the slider."
            }]
        };
        $scope.takeTour = function() {
            nzTour.start(tour)
        }, $scope.slider = 10, $scope.input = {
            selectedClassifier: "Beach"
        }, $scope.classifiers = ["Beach", "Family", "Provocative", "Person", "Bikini", "Closeup", "Gore"], $scope.nameMap = {
            Beach: "beach",
            Family: "family",
            Provocative: "sexy_selfie",
            Person: "person",
            Bikini: "bikini",
            Closeup: "selfie",
            Gore: "gore"
        }, $scope.matchesRange = function(item) {
            return 100 * item[$scope.nameMap[$scope.input.selectedClassifier]] >= $scope.slider
        }, $scope.classifierEmoji = {
            Beach: "ðŸ–",
            Family: "ðŸ‘ª",
            Provocative: "ðŸ”¥",
            Bikini: "ðŸ‘™",
            Person: "ðŸ‘«",
            Closeup: "ðŸ¤³",
            Gore: "ðŸ”ª"
        }, $scope.displayedClassifierName = {};
        for (var item in $scope.classifierEmoji) $scope.displayedClassifierName[item] = item + " " + $scope.classifierEmoji[item];
        $scope.rawimages = ["http://i.dailymail.co.uk/i/pix/2013/05/12/article-2323401-19BC844D000005DC-301_964x643.jpg", "https://www.pebblebeach.com/content/uploads/bandtclub-e1477957766814.jpg", "http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2013/02/15/98/best-beach-awards-sexiest.rend.tccom.616.462.jpeg", "https://media-cdn.tripadvisor.com/media/photo-s/0a/43/27/bb/north-myrtle-beach-features.jpg", "http://www.visitcatalinaisland.com/sites/default/files/descanso-7.png", "http://www.teara.govt.nz/files/hero-31603-new.jpg", "http://www.hamiltonisland.com.au/HamiltonIsland/media/Originals/Family/Baby-s-First-Holiday/family-time-hp-2.jpg?width=1024&height=437&mode=crop&center=0.108027006751688,0.5645", "https://s-media-cache-ak0.pinimg.com/736x/40/04/6f/40046f73c5be70b02160901c0dcb6045.jpg", "https://www.patrickhenry.org/wp-content/uploads/2016/01/family_history2.jpg", "https://images.ttcdn.co/media/products/86008-5a1a28ef6799477d9d24906ddd7c8c90/s/lovetemptation/provocative-acariciame-corset-pr4470-0.jpeg", "https://whatshotn.files.wordpress.com/2014/04/provocative-woman.jpg", "http://cdn.caughtoffside.com/wp-content/uploads/2014/09/Carla-Howe.jpg", "https://s-media-cache-ak0.pinimg.com/564x/75/11/49/751149b4dc3dba0bc01b88b397a1921d.jpg", "https://s-media-cache-ak0.pinimg.com/736x/94/62/0e/94620e601e734fa126c80a303130bde6.jpg", "http://www.billboard.com/files/styles/900_wide/public/media/lady-gaga-bikini-june-2015-billbard-450.jpg", "http://www.billboard.com/files/styles/900_wide/public/media/rihanna-bikini-beach-2015-billboard-450.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/0a/6a/e4/1a/super-models-on-the-beach.jpg", "https://cdn.londonandpartners.com/assets/competitions/82274-640x360-towerbridge-selfie.jpg", "https://cnet1.cbsistatic.com/img/eOpz5ALA-94CFHrFVMumEL6CxIU=/fit-in/970x0/2015/09/30/32f3279c-9d71-4f10-b7cc-2825a6f65449/selfie-indoors-low-light-iphone-6s-plus-rotated.jpg", "http://hbz.h-cdn.co/assets/cm/15/03/54bc0b3d23f26_-_hbz-selfie-03-angle-down-lg.jpg", "https://s-media-cache-ak0.pinimg.com/564x/99/95/f6/9995f691d9f93f37fbda39ea4668bbde.jpg", "https://thehorrorfiend.files.wordpress.com/2010/04/cropped-dsc03920.jpg", "https://s-media-cache-ak0.pinimg.com/736x/70/b5/0e/70b50e215fb3afd59c5e33be7f927a6c--humanoid-mua.jpg", "https://s-media-cache-ak0.pinimg.com/564x/fd/b2/0c/fdb20c3f94d9d4c15e9a878c12e5dbcc.jpg"], $scope.imageList = [{
            sexy_selfie: .96386784315109,
            found: !0,
            beach: .98134803771973,
            image: "http://i.dailymail.co.uk/i/pix/2013/05/12/article-2323401-19BC844D000005DC-301_964x643.jpg",
            family: .09275683760643,
            person: .90210777521133,
            selfie: .6672351360321,
            bikini: .89552903175354,
            gore: .0023622270673513
        }, {
            sexy_selfie: .97359663248062,
            found: !0,
            beach: .99961149692535,
            image: "http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2013/02/15/98/best-beach-awards-sexiest.rend.tccom.616.462.jpeg",
            family: .55447924137115,
            person: .92034816741943,
            selfie: .89688122272491,
            bikini: .93090903759003,
            gore: .023865452036262
        }, {
            sexy_selfie: .16229136288166,
            found: !0,
            beach: .99959051609039,
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/43/27/bb/north-myrtle-beach-features.jpg",
            family: .99909448623657,
            person: .99986374378204,
            selfie: .62792176008224,
            bikini: .0037062526680529,
            gore: .037372294813395
        }, {
            sexy_selfie: .13451448082924,
            found: !0,
            beach: .89310210943222,
            image: "http://www.visitcatalinaisland.com/sites/default/files/descanso-7.png",
            family: .044148597866297,
            person: .009727455675602,
            selfie: .0033999243751168,
            bikini: .0080305468291044,
            gore: 82895392552018e-18
        }, {
            sexy_selfie: .025634445250034,
            found: !0,
            beach: .99813902378082,
            image: "http://www.teara.govt.nz/files/hero-31603-new.jpg",
            family: .99937117099762,
            person: .99998068809509,
            selfie: .057423323392868,
            bikini: .0020835278555751,
            gore: .00022230652393773
        }, {
            sexy_selfie: .87933593988419,
            found: !0,
            beach: .98721343278885,
            image: "http://www.hamiltonisland.com.au/HamiltonIsland/media/Originals/Family/Baby-s-First-Holiday/family-time-hp-2.jpg?width=1024&height=437&mode=crop&center=0.108027006751688,0.5645",
            family: .67631208896637,
            person: .99994260072708,
            selfie: .21122795343399,
            bikini: .15908566117287,
            gore: .056074734777212
        }, {
            sexy_selfie: .0012324495473877,
            found: !0,
            beach: .13452869653702,
            image: "https://s-media-cache-ak0.pinimg.com/736x/40/04/6f/40046f73c5be70b02160901c0dcb6045.jpg",
            family: .99880349636078,
            person: 1,
            selfie: .89221167564392,
            bikini: .00041592353954911,
            gore: .0012988348025829
        }, {
            sexy_selfie: .023964136838913,
            found: !0,
            beach: .86423188447952,
            image: "https://www.patrickhenry.org/wp-content/uploads/2016/01/family_history2.jpg",
            family: .999944627285,
            person: 1,
            selfie: .29752773046494,
            bikini: .00032623045262881,
            gore: .0079023176804185
        }, {
            sexy_selfie: .97448098659515,
            found: !0,
            beach: .92022770643234,
            image: "https://images.ttcdn.co/media/products/86008-5a1a28ef6799477d9d24906ddd7c8c90/s/lovetemptation/provocative-acariciame-corset-pr4470-0.jpeg",
            family: .061332643032074,
            person: .99781966209412,
            selfie: .92944294214249,
            bikini: .74486100673676,
            gore: .019581971690059
        }, {
            sexy_selfie: .97448098659515,
            found: !0,
            beach: .92022770643234,
            image: "https://whatshotn.files.wordpress.com/2014/04/provocative-woman.jpg",
            family: .061332643032074,
            person: .99781966209412,
            selfie: .92944294214249,
            bikini: .74486100673676,
            gore: .019581971690059
        }, {
            sexy_selfie: .98796552419662,
            found: !0,
            beach: .2678237259388,
            image: "http://cdn.caughtoffside.com/wp-content/uploads/2014/09/Carla-Howe.jpg",
            family: .00032779737375677,
            person: .99956738948822,
            selfie: .99825030565262,
            bikini: .96588516235352,
            gore: .073200412094593
        }, {
            sexy_selfie: .99061816930771,
            found: !0,
            beach: .076288715004921,
            image: "https://s-media-cache-ak0.pinimg.com/564x/75/11/49/751149b4dc3dba0bc01b88b397a1921d.jpg",
            family: .032610055059195,
            person: .99980270862579,
            selfie: .99857062101364,
            bikini: .074448987841606,
            gore: 5572149893851e-17
        }, {
            sexy_selfie: .99970769882202,
            found: !0,
            beach: .17494323849678,
            image: "https://s-media-cache-ak0.pinimg.com/736x/94/62/0e/94620e601e734fa126c80a303130bde6.jpg",
            family: .00010099087376148,
            person: .99990803003311,
            selfie: .99995273351669,
            bikini: .85505717992783,
            gore: .00032334215939045
        }, {
            sexy_selfie: .9932826757431,
            found: !0,
            beach: .99986565113068,
            image: "http://www.billboard.com/files/styles/900_wide/public/media/lady-gaga-bikini-june-2015-billbard-450.jpg",
            family: .021052196621895,
            person: .99973732233047,
            selfie: .89258241653442,
            bikini: .99959546327591,
            gore: .036162968724966
        }, {
            sexy_selfie: .98675286769867,
            found: !0,
            beach: .99651998281479,
            image: "http://www.billboard.com/files/styles/900_wide/public/media/rihanna-bikini-beach-2015-billboard-450.jpg",
            family: .052492685616016,
            person: .99967837333679,
            selfie: .97104030847549,
            bikini: .97999572753906,
            gore: .00474075647071
        }, {
            sexy_selfie: .96344482898712,
            found: !0,
            beach: .99999284744263,
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/6a/e4/1a/super-models-on-the-beach.jpg",
            family: .81439238786697,
            person: .98209434747696,
            selfie: .99072790145874,
            bikini: .99249571561813,
            gore: .2265282869339
        }, {
            sexy_selfie: .00045491353375837,
            found: !0,
            beach: .029612474143505,
            image: "https://cdn.londonandpartners.com/assets/competitions/82274-640x360-towerbridge-selfie.jpg",
            family: .11377996951342,
            person: .9999892115593,
            selfie: .21304869651794,
            bikini: .0093904649838805,
            gore: 56614208006067e-19
        }, {
            sexy_selfie: .00069836975308135,
            found: !0,
            beach: 2730078449531e-17,
            image: "https://cnet1.cbsistatic.com/img/eOpz5ALA-94CFHrFVMumEL6CxIU=/fit-in/970x0/2015/09/30/32f3279c-9d71-4f10-b7cc-2825a6f65449/selfie-indoors-low-light-iphone-6s-plus-rotated.jpg",
            family: 335415097652e-17,
            person: .99979972839355,
            selfie: .99907052516937,
            bikini: .025523522868752,
            gore: 9619116463e-14
        }, {
            sexy_selfie: .0040088822133839,
            found: !0,
            beach: 15752399121993e-18,
            image: "http://hbz.h-cdn.co/assets/cm/15/03/54bc0b3d23f26_-_hbz-selfie-03-angle-down-lg.jpg",
            family: .0018271879525855,
            person: .99992316961288,
            selfie: .9929438829422,
            bikini: .086335211992264,
            gore: .00012205535313115
        }, {
            sexy_selfie: .014802574180067,
            found: !0,
            beach: .029825376346707,
            image: "https://s-media-cache-ak0.pinimg.com/564x/99/95/f6/9995f691d9f93f37fbda39ea4668bbde.jpg",
            family: 8239542512456e-17,
            person: .909807741642,
            selfie: .9991574883461,
            bikini: .10072497278452,
            gore: .99993985891342
        }, {
            sexy_selfie: .014802574180067,
            found: !0,
            beach: .029825376346707,
            image: "https://thehorrorfiend.files.wordpress.com/2010/04/cropped-dsc03920.jpg",
            family: 8239542512456e-17,
            person: .909807741642,
            selfie: .9991574883461,
            bikini: .10072497278452,
            gore: .99993985891342
        }, {
            sexy_selfie: .24036015570164,
            found: !0,
            beach: .014582667499781,
            image: "https://s-media-cache-ak0.pinimg.com/736x/70/b5/0e/70b50e215fb3afd59c5e33be7f927a6c--humanoid-mua.jpg",
            family: .0012163589708507,
            person: .51535755395889,
            selfie: .53598433732986,
            bikini: .037402741611004,
            gore: .99901020526886
        }, {
            sexy_selfie: .12566688656807,
            found: !0,
            beach: .065190970897675,
            image: "https://s-media-cache-ak0.pinimg.com/564x/fd/b2/0c/fdb20c3f94d9d4c15e9a878c12e5dbcc.jpg",
            family: .055556930601597,
            person: .087277047336102,
            selfie: .20400965213776,
            bikini: .048173379153013,
            gore: .93595153093338
        }], $window.scrollTo(0, 0)
    }
    angular.module("grid").controller("FilterImageController", FilterImageController), FilterImageController.$inject = ["$scope", "ImageService", "$sanitize", "TourService", "nzTour", "$window"]
}();
! function() {
    "use strict";

    function FilterTextController($scope, $sanitize, TourService, nzTour, $window) {
        $scope.slider = 50, $scope.switch = {
            keepClean: !1
        }, $scope.showSwitch = !1, $scope.load = function() {
            twemoji.size = "svg", twemoji.ext = ".svg", twemoji.parse(document.body)
        };
        var tour = window.tour = {
            config: TourService.config,
            steps: [{
                target: "#classifier",
                content: "Here you can select the classifier that you want to use to detect hate speech."
            }, {
                target: "#slider",
                content: "Move the slider to the right to keep tweets that are more likely to be labeled as hate-speech."
            }, {
                target: "#results",
                content: "These tweets are the ones which are classified as being hate speech with a minimum probability selected by the slider."
            }]
        };
        $scope.takeTour = function() {
            nzTour.start(tour)
        }, $scope.data = [{
            fasttext_hate: {
                prob: .999658465385437
            },
            fasttext_toxicity: {
                prob: .0005640387535095215
            },
            glove_hate: {
                prob: .999970555305481
            },
            keyword_hate: {
                keyword: ["dick", "ass", "faggot"],
                prob: 1
            },
            query: "Well I thought you knew actually RT @KingHorseDick: Man why y'all didn't tell me I was a dick riding ass faggot? Y'all not real &#128557;&#128557;&#128557;&#128557;&#128557;&#128557;"
        }, {
            fasttext_hate: {
                prob: .9999264478683472
            },
            fasttext_toxicity: {
                prob: .820260226726532
            },
            glove_hate: {
                prob: .999884843826294
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "RT @MustBeCharm: &#128557;&#128557;&#128557;&#128557;&#128557; RT @WORIDSTARHlPHOP: How side bitches be when you pick them up in daylight hours https://t.co/57tBcQ4vsO"
        }, {
            fasttext_hate: {
                prob: .9574989676475525
            },
            fasttext_toxicity: {
                prob: .7196548581123352
            },
            glove_hate: {
                prob: .9998807907104492
            },
            keyword_hate: {
                keyword: ["pussy"],
                prob: 1
            },
            query: "Can I hit that pussy way I wanna while this record playing &#128525;&#128525;&#128129;&#128175;&#128107;&#128584;&#128586;&#128076;&#128076;&#128076;&#128139;&#128139;"
        }, {
            fasttext_hate: {
                prob: .018020272254943848
            },
            fasttext_toxicity: {
                prob: .8959590196609497
            },
            glove_hate: {
                prob: .34045708179473877
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "Checking out 'Female Killer In Las Vegas Shouted ÐƒÐšâ€°Ð«Ð£â€°Ð«_Allahu AkbarÐƒÐšâ€°Ð«Ð£ÐœÑ† As She Ran Ove' on America Conservative 2 Conservat: https://t.co/bnWLjt5FaX"
        }, {
            fasttext_hate: {
                prob: .20058804750442505
            },
            fasttext_toxicity: {
                prob: .9975146055221558
            },
            glove_hate: {
                prob: .45953118801116943
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "RT @BitchPlsComedy: apparently &#8220;bae&#8221; means &#8220;before anyone else&#8221; i always thought it was a ghetto word for &#8220;babe&#8221;"
        }, {
            fasttext_hate: {
                prob: .07885891199111938
            },
            fasttext_toxicity: {
                prob: .9821679592132568
            },
            glove_hate: {
                prob: .047730445861816406
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "RT @kelter1: The fact that Kim Kardashian's app may make $200 million makes me wish we can speed up the process of having the apes take ove&#8230;"
        }, {
            fasttext_hate: {
                prob: .9999392032623291
            },
            fasttext_toxicity: {
                prob: .5231544375419617
            },
            glove_hate: {
                prob: .9995328187942505
            },
            keyword_hate: {
                keyword: ["pussy"],
                prob: 1
            },
            query: "RT @HBCUfessions: You females overlook us geeks. When I take these glasses off, I'm no longer Clark Kent. I go superman in that pussy. - FA&#8230;"
        }, {
            fasttext_hate: {
                prob: .9997454285621643
            },
            fasttext_toxicity: {
                prob: .9982581734657288
            },
            glove_hate: {
                prob: .9991456270217896
            },
            keyword_hate: {
                keyword: ["pussy"],
                prob: 1
            },
            query: "RT @JoeBudden: Young, attractive, successful, supportive, faithful man w his own everything..u think bringing solely pussy to the table is &#8230;"
        }, {
            fasttext_hate: {
                prob: .012688636779785156
            },
            fasttext_toxicity: {
                prob: .43063730001449585
            },
            glove_hate: {
                prob: .17017394304275513
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "France says they 'neutralized' a number of al-Mourabitoun fighters near Mâ€°Ð«Ð„ÐµÂ©naka, Al Akbar said they were Platforme: https://t.co/RwF0sfovQu"
        }, {
            fasttext_hate: {
                prob: .9998732805252075
            },
            fasttext_toxicity: {
                prob: .9311869740486145
            },
            glove_hate: {
                prob: .9988511800765991
            },
            keyword_hate: {
                keyword: ["fucking", "shit", "faggot"],
                prob: 1
            },
            query: "@elaynay your a dirty terrorist and your religion is a fucking joke, you go around screaming Allah akbar doing terrorist shit. Dirty faggot."
        }, {
            fasttext_hate: {
                prob: .10546648502349854
            },
            fasttext_toxicity: {
                prob: .002038717269897461
            },
            glove_hate: {
                prob: .3774038553237915
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "MUSLIM IMMIGRANT Chanted ÐƒÐšâ€°Ð«Ð£â€°Ð«ÐŸAllahu AkbarÐƒÐšâ€°Ð«Ð£ÐµÑœ While Raping Gas Station AttendentÐƒÐšâ€°Ð«Ð£_Refuses To Appear In... https://t.co/QyLqFM60Dj"
        }, {
            fasttext_hate: {
                prob: .09637701511383057
            },
            fasttext_toxicity: {
                prob: .15315771102905273
            },
            glove_hate: {
                prob: .08205068111419678
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "Eyewitness claims Las Vegas vehicle attack carried out by Muslim  screaming 'Allahu Akbar'... media blackout.. https://t.co/6HnWmkIo8d #tcot"
        }, {
            fasttext_hate: {
                prob: .01684659719467163
            },
            fasttext_toxicity: {
                prob: .07282936573028564
            },
            glove_hate: {
                prob: .2581036686897278
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@LeeLee0474 Awww, that's cute! My niece's guinea pig crawled up her dad's pants &amp; well I don't think I need to finish this sentence.lol"
        }, {
            fasttext_hate: {
                prob: .9995869994163513
            },
            fasttext_toxicity: {
                prob: .0016279816627502441
            },
            glove_hate: {
                prob: .9998130202293396
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "@KristyT @aliciafiasco @luciouskitty 'you know I don't know karate bitch' loooool how am I just finding out about this now, this is amazing"
        }, {
            fasttext_hate: {
                prob: .9999499320983887
            },
            fasttext_toxicity: {
                prob: .9881971478462219
            },
            glove_hate: {
                prob: .9995786547660828
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "All I ask for is love n loyalty. . nothing else. No arguing over other bitches/niggas , no he say she say , no social media bs... Just love"
        }, {
            fasttext_hate: {
                prob: .13638544082641602
            },
            fasttext_toxicity: {
                prob: .8220539689064026
            },
            glove_hate: {
                prob: .19479656219482422
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "Sister @SanaSaeed the Islamic argument for Hijab Akbar is if you don't wear it you get what u desrve rape. Sister do u know? @imraansiddiqi"
        }, {
            fasttext_hate: {
                prob: .9992092847824097
            },
            fasttext_toxicity: {
                prob: .00407564640045166
            },
            glove_hate: {
                prob: .9989221096038818
            },
            keyword_hate: {
                keyword: ["cunt"],
                prob: 1
            },
            query: "RT @KayciMalynn: I just can't help but to hate you. Even though you never intentionally did anything to me you're still a cunt. #girllogic"
        }, {
            fasttext_hate: {
                prob: .07294481992721558
            },
            fasttext_toxicity: {
                prob: .09039551019668579
            },
            glove_hate: {
                prob: .29050177335739136
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "Brother @imraansiddiqi  makes a living off accusing people of #Islamophobia. but does not know what #Islamphobia means. Allahou Akbar! :)"
        }, {
            fasttext_hate: {
                prob: .012048900127410889
            },
            fasttext_toxicity: {
                prob: .963144063949585
            },
            glove_hate: {
                prob: .07350724935531616
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "I remember Draft prom night, my dress wouldn't zip up and I was bawling my eyes out and screaming I didn't want to go... So funny. Haha."
        }, {
            fasttext_hate: {
                prob: .9997177720069885
            },
            fasttext_toxicity: {
                prob: .006327271461486816
            },
            glove_hate: {
                prob: .999777615070343
            },
            keyword_hate: {
                keyword: ["faggot", "ass", "fuck", "fuck"],
                prob: 1
            },
            query: "#VoteBlue2014 Yeah. CUZ 8 million people in faggot ass #newyork are #chickenshit JEWS&gt; FUCK THEM right? Fuck Bibi Netanyahu. RIGHT?"
        }, {
            fasttext_hate: {
                prob: .04165571928024292
            },
            fasttext_toxicity: {
                prob: .0007516741752624512
            },
            glove_hate: {
                prob: .023179173469543457
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@RiotSupport so I was suspended for a day because of a random lag spikes that force me to close the client and relog and suspended. GG"
        }, {
            fasttext_hate: {
                prob: .13826584815979004
            },
            fasttext_toxicity: {
                prob: .024035513401031494
            },
            glove_hate: {
                prob: .1989215612411499
            },
            keyword_hate: {
                keyword: ["damn"],
                prob: 1
            },
            query: "Damn Eli. That's just ruff. I'm not even gonna trash talk that one. Get your game together Eli. You're a good QB. Stop with the TO's"
        }, {
            fasttext_hate: {
                prob: .9998713731765747
            },
            fasttext_toxicity: {
                prob: .9624502062797546
            },
            glove_hate: {
                prob: .9998927116394043
            },
            keyword_hate: {
                keyword: ["nigga", "bitch"],
                prob: 1
            },
            query: "I'm never gonna be ok with my nigga around alot of bitches while with his boys. Cause I was once that female your boys put you on !!"
        }, {
            fasttext_hate: {
                prob: .9998005032539368
            },
            fasttext_toxicity: {
                prob: .9941311478614807
            },
            glove_hate: {
                prob: .9985784292221069
            },
            keyword_hate: {
                keyword: ["cracker", "fuck"],
                prob: 1
            },
            query: "RT @HoodBibIe: Niggas with face tats are the same ones that stole your animal crackers in elementary smh they just dont give a fuck"
        }, {
            fasttext_hate: {
                prob: .055631816387176514
            },
            fasttext_toxicity: {
                prob: .542516827583313
            },
            glove_hate: {
                prob: .3072403073310852
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "Female Killer In Vegas ÐƒÐšâ€°Ð«Ð£â€°Ð«_AllegedlyÐƒÐšâ€°Ð«Ð£ÐœÑ† Shouted ÐƒÐšâ€°Ð«Ð£â€°Ð«_Allahu AkbarÐƒÐšâ€°Ð«Ð£ÐœÑ† As She Ran Over People https://t.co/TRiUbREQyK"
        }, {
            fasttext_hate: {
                prob: .9878130555152893
            },
            fasttext_toxicity: {
                prob: .9307689070701599
            },
            glove_hate: {
                prob: .9821449518203735
            },
            keyword_hate: {
                keyword: ["nigger"],
                prob: 1
            },
            query: "They used to tie both ends of a niggers legs to 2 different horses and beat him as the horses spread until his legs break ... Smh"
        }, {
            fasttext_hate: {
                prob: .03631621599197388
            },
            fasttext_toxicity: {
                prob: .5274149775505066
            },
            glove_hate: {
                prob: .07523232698440552
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@ExpSelf A friend suggested I dress as a Fairy for a Halloween party we're attending...I'm thinking more Wizardess of course. :)"
        }, {
            fasttext_hate: {
                prob: .9999887943267822
            },
            fasttext_toxicity: {
                prob: .9961129426956177
            },
            glove_hate: {
                prob: .9999027252197266
            },
            keyword_hate: {
                keyword: ["ass", "nigga", "bitch", "ass", "ass"],
                prob: 1
            },
            query: "I cant stand no crybaby ass nigga. If you gonna act like a bitch I will leave yo ass after I instavideo yo stupid lookin ass"
        }, {
            fasttext_hate: {
                prob: .9921369552612305
            },
            fasttext_toxicity: {
                prob: .5960271954536438
            },
            glove_hate: {
                prob: .9951583743095398
            },
            keyword_hate: {
                keyword: ["nigger"],
                prob: 1
            },
            query: "@OxbloodStomper @PalePixie88 @SlaveCatcher88 what's your problem? Don't u know Jews control niggers? Read a book or two."
        }, {
            fasttext_hate: {
                prob: .9999990463256836
            },
            fasttext_toxicity: {
                prob: .995590090751648
            },
            glove_hate: {
                prob: .9999916553497314
            },
            keyword_hate: {
                keyword: ["fuck", "ass", "bitch", "nigga"],
                prob: 1
            },
            query: "RT @opticzodiac: @JerKzTheGreaT @Erupts @BajaOrBust_ @Xfinii shut the fuck up ugly ass bitch nigga i stole your setup"
        }, {
            fasttext_hate: {
                prob: .0064656734466552734
            },
            fasttext_toxicity: {
                prob: .9876882433891296
            },
            glove_hate: {
                prob: .2017909288406372
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "The Witness who Reported the Woman who MOWED DOWN 35 people shouted ALAHU AKBAR: https://t.co/Mu1u93b5gB via @YouTube"
        }, {
            fasttext_hate: {
                prob: .9999531507492065
            },
            fasttext_toxicity: {
                prob: .009657144546508789
            },
            glove_hate: {
                prob: .9997939467430115
            },
            keyword_hate: {
                keyword: ["hoe"],
                prob: 1
            },
            query: "RT @AC_Hussle: I'm not giving these hoes free meals so they can go lay up with the dude they can't get over. Nope."
        }, {
            fasttext_hate: {
                prob: .9909220337867737
            },
            fasttext_toxicity: {
                prob: .9984655380249023
            },
            glove_hate: {
                prob: .9736777544021606
            },
            keyword_hate: {
                keyword: ["fag", "fag", "fag"],
                prob: 1
            },
            query: "Good night fags and fagettes (that's the female version of fags like fag-ettes to make it female) I hate you all."
        }, {
            fasttext_hate: {
                prob: .999052107334137
            },
            fasttext_toxicity: {
                prob: .02164560556411743
            },
            glove_hate: {
                prob: .9976747632026672
            },
            keyword_hate: {
                keyword: ["faggot"],
                prob: 1
            },
            query: "@sizzurp__ @ILIKECATS74 @yoPapi_chulo @brandonernandez @bootyacid at least i dont look like jefree starr faggot"
        }, {
            fasttext_hate: {
                prob: .9998453855514526
            },
            fasttext_toxicity: {
                prob: .9990766048431396
            },
            glove_hate: {
                prob: .9998939037322998
            },
            keyword_hate: {
                keyword: ["ass", "fag", "ass"],
                prob: 1
            },
            query: "I'm tired of people saying I look like my brother &amp; calling me Deondre' like serious Succ My Ass fag asses"
        }, {
            fasttext_hate: {
                prob: .02723914384841919
            },
            fasttext_toxicity: {
                prob: .008092522621154785
            },
            glove_hate: {
                prob: .03177458047866821
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "#Flyers w/ some moxy! Big comeback again!!! Major penalty killed the Caps.Great game. 5 cases of #tastycakes"
        }, {
            fasttext_hate: {
                prob: .4906134009361267
            },
            fasttext_toxicity: {
                prob: .10966253280639648
            },
            glove_hate: {
                prob: .36584460735321045
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "I want to go to a haunted house maybe get possesed y'know just to see if ghosts are real &#128561;&#128128;"
        }, {
            fasttext_hate: {
                prob: .9999643564224243
            },
            fasttext_toxicity: {
                prob: .006255924701690674
            },
            glove_hate: {
                prob: .9999862909317017
            },
            keyword_hate: {
                keyword: ["fuck", "nigger"],
                prob: 1
            },
            query: "@Oprah @3LWTV Fuck you nigger sheboon. Hope you r strung up like all niggers should be. WHITEPOWER. #1488"
        }, {
            fasttext_hate: {
                prob: .9997172951698303
            },
            fasttext_toxicity: {
                prob: .9881382584571838
            },
            glove_hate: {
                prob: .9994004964828491
            },
            keyword_hate: {
                keyword: ["nigger", "whore"],
                prob: 1
            },
            query: "@MoriTaheripour shut up nigger whore! Hope u get raped by one of those animals. Might change your tune."
        }, {
            fasttext_hate: {
                prob: .9999810457229614
            },
            fasttext_toxicity: {
                prob: .15722525119781494
            },
            glove_hate: {
                prob: .9999741315841675
            },
            keyword_hate: {
                keyword: ["bitch", "bitch", "ass", "nigga"],
                prob: 1
            },
            query: "@Zhugstubble You heard me bitch but any way I'm back th texas so wtf u talking about bitch ass nigga"
        }, {
            fasttext_hate: {
                prob: .19080960750579834
            },
            fasttext_toxicity: {
                prob: .3546755909919739
            },
            glove_hate: {
                prob: .32687824964523315
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "&#8220;@fhairhead: Only in Vermont is it big news that our govern got a buck #vermontproblems&#8221;"
        }, {
            fasttext_hate: {
                prob: .040707170963287354
            },
            fasttext_toxicity: {
                prob: .967399001121521
            },
            glove_hate: {
                prob: .16690212488174438
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "#YouWillNotBeTakenSeriouslyIf you wear shorty shorts and fuzzy boots in negative degree weather."
        }, {
            fasttext_hate: {
                prob: .010575652122497559
            },
            fasttext_toxicity: {
                prob: .004500687122344971
            },
            glove_hate: {
                prob: .019614338874816895
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "RT @YepillPosts: If I had a dollar for every time I died on flappy bird http://t.co/pj8QSBTe2L"
        }, {
            fasttext_hate: {
                prob: .9996857643127441
            },
            fasttext_toxicity: {
                prob: .7681639790534973
            },
            glove_hate: {
                prob: .9999098777770996
            },
            keyword_hate: {
                keyword: ["ass", "bitch"],
                prob: 1
            },
            query: "RT @skythedon: Huge ass, small waist &amp; okay face &amp; bitches really think they famous"
        }, {
            fasttext_hate: {
                prob: .10773575305938721
            },
            fasttext_toxicity: {
                prob: .9919884204864502
            },
            glove_hate: {
                prob: .18094247579574585
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "Just smashing a akbar with @TyroneLarkham @LarkhamWilliam @1jamesmitchell @philmaguire3"
        }, {
            fasttext_hate: {
                prob: .02483522891998291
            },
            fasttext_toxicity: {
                prob: .4275050163269043
            },
            glove_hate: {
                prob: .028743088245391846
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "RT @Fact: Some species of birds have been known to hold funerals for their deceased."
        }, {
            fasttext_hate: {
                prob: .9969692826271057
            },
            fasttext_toxicity: {
                prob: .9064064025878906
            },
            glove_hate: {
                prob: .9981196522712708
            },
            keyword_hate: {
                keyword: ["fag"],
                prob: 1
            },
            query: "'@jayswaggkillah: '@JacklynAnnn: @jayswaggkillah Is a fag' jackie jealous' Neeeee"
        }, {
            fasttext_hate: {
                prob: .9998047947883606
            },
            fasttext_toxicity: {
                prob: .008956670761108398
            },
            glove_hate: {
                prob: .9996979236602783
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "Emma Watson slays every single Harry Potter movie. Each film becomes her bitch."
        }, {
            fasttext_hate: {
                prob: .08837008476257324
            },
            fasttext_toxicity: {
                prob: .020113348960876465
            },
            glove_hate: {
                prob: .15385979413986206
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@Lawln @Akbar_Knows why would I hashtag my Twitter name if it was really me lol"
        }, {
            fasttext_hate: {
                prob: .6433103680610657
            },
            fasttext_toxicity: {
                prob: .029217422008514404
            },
            glove_hate: {
                prob: .5196243524551392
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "Sitting alone watching White Chicks, no pants, fuzzy blankets, tea || turn up"
        }, {
            fasttext_hate: {
                prob: .9998738765716553
            },
            fasttext_toxicity: {
                prob: .8415060639381409
            },
            glove_hate: {
                prob: .9993170499801636
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "I was with a bitch with a mustash for a year and a half? Wtf is wrong itch me"
        }, {
            fasttext_hate: {
                prob: .19709843397140503
            },
            fasttext_toxicity: {
                prob: .9910189509391785
            },
            glove_hate: {
                prob: .25178980827331543
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "&#8220;The Hun is either at your throat or at your feet.&#8221; - Churchill'"
        }, {
            fasttext_hate: {
                prob: .9999977350234985
            },
            fasttext_toxicity: {
                prob: .3509000539779663
            },
            glove_hate: {
                prob: .9998249411582947
            },
            keyword_hate: {
                keyword: ["nigga", "fuckin", "hoe"],
                prob: 1
            },
            query: "RT @lawnmoney_duke: I respect any nigga that getting money and fuckin hoes"
        }, {
            fasttext_hate: {
                prob: .077983558177948
            },
            fasttext_toxicity: {
                prob: .009366154670715332
            },
            glove_hate: {
                prob: .08864301443099976
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "one person followed me // automatically checked by https://t.co/TdhwPByXmF"
        }, {
            fasttext_hate: {
                prob: .99967360496521
            },
            fasttext_toxicity: {
                prob: .7346060276031494
            },
            glove_hate: {
                prob: .999272882938385
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "Can I get some soy sauce for this bitch? @pusd http://t.co/ladnDPsCVt"
        }, {
            fasttext_hate: {
                prob: .0394519567489624
            },
            fasttext_toxicity: {
                prob: .07352721691131592
            },
            glove_hate: {
                prob: .15396368503570557
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "https://t.co/7XhbRSMA7Y via @MailOnline News from English papers.'"
        }, {
            fasttext_hate: {
                prob: .9997251629829407
            },
            fasttext_toxicity: {
                prob: .9981364011764526
            },
            glove_hate: {
                prob: .9998875856399536
            },
            keyword_hate: {
                keyword: ["faggot"],
                prob: 1
            },
            query: "@AndreBerto word is you use roids, stupid hypocrite lying faggot."
        }, {
            fasttext_hate: {
                prob: .07933568954467773
            },
            fasttext_toxicity: {
                prob: .9565628170967102
            },
            glove_hate: {
                prob: .17657196521759033
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "'Was Trump right? Officers say pockets of Muslims celebrated 9/11"
        }, {
            fasttext_hate: {
                prob: .024253904819488525
            },
            fasttext_toxicity: {
                prob: .9914013743400574
            },
            glove_hate: {
                prob: .17341792583465576
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "Then gave the ole uncle Charlie to mr Ortiz #nyy @DBetances50"
        }, {
            fasttext_hate: {
                prob: .1429663896560669
            },
            fasttext_toxicity: {
                prob: .059543490409851074
            },
            glove_hate: {
                prob: .2113170027732849
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "I play for keeps you play wit me its gon be yellow tape! #200"
        }, {
            fasttext_hate: {
                prob: .6631353497505188
            },
            fasttext_toxicity: {
                prob: .008736610412597656
            },
            glove_hate: {
                prob: .0529211163520813
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "$10 bucks the Browns get Johnny ! &#128527;&#128588;&#128175;"
        }, {
            fasttext_hate: {
                prob: .9999852180480957
            },
            fasttext_toxicity: {
                prob: .24702352285385132
            },
            glove_hate: {
                prob: .999971866607666
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "I know these bitches did not leave me, AGAIN. #FuckEverybody"
        }, {
            fasttext_hate: {
                prob: .09305316209793091
            },
            fasttext_toxicity: {
                prob: .9723950624465942
            },
            glove_hate: {
                prob: .12721353769302368
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@marwaeljabo I'd love it if my girl smoked with me _â€°Ð³Ñžâ€°Ð«_Ðœ_"
        }, {
            fasttext_hate: {
                prob: .25662416219711304
            },
            fasttext_toxicity: {
                prob: .9069658517837524
            },
            glove_hate: {
                prob: .3428986072540283
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@Lawln @Akbar_Knows Carlos already told me it was yours lmao"
        }, {
            fasttext_hate: {
                prob: .8488739728927612
            },
            fasttext_toxicity: {
                prob: .9727045297622681
            },
            glove_hate: {
                prob: .9581390619277954
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@LastProtestants @stomponato @delschilling You're an idiot."
        }, {
            fasttext_hate: {
                prob: .9999648332595825
            },
            fasttext_toxicity: {
                prob: .9557777643203735
            },
            glove_hate: {
                prob: .9999353885650635
            },
            keyword_hate: {
                keyword: ["bitch", "fuck"],
                prob: 1
            },
            query: "@ChristyMack I love bad bitches that my fucking problem...."
        }, {
            fasttext_hate: {
                prob: .9998713731765747
            },
            fasttext_toxicity: {
                prob: .149236261844635
            },
            glove_hate: {
                prob: .9998475313186646
            },
            keyword_hate: {
                keyword: ["fuck", "nigger"],
                prob: 1
            },
            query: "I fucking hate you niggers bruh... http://t.co/OeTK4f94BO"
        }, {
            fasttext_hate: {
                prob: .9992781281471252
            },
            fasttext_toxicity: {
                prob: .09367889165878296
            },
            glove_hate: {
                prob: .9985874891281128
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "I'm arrogant and my bitch conceited &#128520;&#128526;"
        }, {
            fasttext_hate: {
                prob: .9989266991615295
            },
            fasttext_toxicity: {
                prob: .9559191465377808
            },
            glove_hate: {
                prob: .9989209175109863
            },
            keyword_hate: {
                keyword: ["faggot"],
                prob: 1
            },
            query: "RT @ivanrabago_: @_WhitePonyJr_ looking like faggots?"
        }, {
            fasttext_hate: {
                prob: .05184447765350342
            },
            fasttext_toxicity: {
                prob: .007990121841430664
            },
            glove_hate: {
                prob: .05753272771835327
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "A mock up of my wedding photos http://t.co/qgPtAmfjPA"
        }, {
            fasttext_hate: {
                prob: .10378462076187134
            },
            fasttext_toxicity: {
                prob: .0016747117042541504
            },
            glove_hate: {
                prob: .16624480485916138
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "There's always something going on in a Tesco car park"
        }, {
            fasttext_hate: {
                prob: .042933881282806396
            },
            fasttext_toxicity: {
                prob: .9965957999229431
            },
            glove_hate: {
                prob: .24731093645095825
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@akbar_hh need more people like you _â€°Ð³Ñžâ€°Ð«___â€°Ð³Ñžâ€°Ð«__"
        }, {
            fasttext_hate: {
                prob: .9996310472488403
            },
            fasttext_toxicity: {
                prob: .008764386177062988
            },
            glove_hate: {
                prob: .9998681545257568
            },
            keyword_hate: {
                keyword: ["fuck", "faggot"],
                prob: 1
            },
            query: "'I'll fuck you til you love me faggot' - Mike Tyson"
        }, {
            fasttext_hate: {
                prob: .9998160004615784
            },
            fasttext_toxicity: {
                prob: .3957146406173706
            },
            glove_hate: {
                prob: .9998711347579956
            },
            keyword_hate: {
                keyword: ["nigger"],
                prob: 1
            },
            query: "RT @nerdkiller669: @ShinSnipes no you're a nigger"
        }, {
            fasttext_hate: {
                prob: .06919872760772705
            },
            fasttext_toxicity: {
                prob: .9857608675956726
            },
            glove_hate: {
                prob: .15588372945785522
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@marwaeljabo same goes for you _â€°Ð³Ñžâ€°Ð«Ñž__â€°Ð³ÑžÐµÐ_"
        }, {
            fasttext_hate: {
                prob: .9990441203117371
            },
            fasttext_toxicity: {
                prob: .13066864013671875
            },
            glove_hate: {
                prob: .9995924830436707
            },
            keyword_hate: {
                keyword: ["hoe"],
                prob: 1
            },
            query: "RT @macktology101: 'Sunday funday' hoe quotes"
        }, {
            fasttext_hate: {
                prob: .9999507665634155
            },
            fasttext_toxicity: {
                prob: .004197061061859131
            },
            glove_hate: {
                prob: .9999423027038574
            },
            keyword_hate: {
                keyword: ["bitch", "bitch"],
                prob: 1
            },
            query: "Bitch killa gone be dacing in that bitch cdfu"
        }, {
            fasttext_hate: {
                prob: .9995825886726379
            },
            fasttext_toxicity: {
                prob: .01069653034210205
            },
            glove_hate: {
                prob: .9962286949157715
            },
            keyword_hate: {
                keyword: ["faggot"],
                prob: 1
            },
            query: "Warning: penny boards will make you a faggot"
        }, {
            fasttext_hate: {
                prob: .998474657535553
            },
            fasttext_toxicity: {
                prob: .0018184185028076172
            },
            glove_hate: {
                prob: .9996473789215088
            },
            keyword_hate: {
                keyword: ["faggot"],
                prob: 1
            },
            query: "@Stonisnipezz I know. It was a joke, faggot."
        }, {
            fasttext_hate: {
                prob: .15054625272750854
            },
            fasttext_toxicity: {
                prob: .9983899593353271
            },
            glove_hate: {
                prob: .22099411487579346
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "@RobotZo @Akbar_Knows I'm not even in this"
        }, {
            fasttext_hate: {
                prob: .1504703164100647
            },
            fasttext_toxicity: {
                prob: .830286979675293
            },
            glove_hate: {
                prob: .04914200305938721
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "'Also, Happy Armistice Day, anachronists!"
        }, {
            fasttext_hate: {
                prob: .9990153312683105
            },
            fasttext_toxicity: {
                prob: .00361478328704834
            },
            glove_hate: {
                prob: .997093677520752
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "why is this niggah still tweetn tf !!!!"
        }, {
            fasttext_hate: {
                prob: .9999287128448486
            },
            fasttext_toxicity: {
                prob: .8091347813606262
            },
            glove_hate: {
                prob: .9997716546058655
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "Where the bad bitches at? Lol @Vbomb20"
        }, {
            fasttext_hate: {
                prob: .033649981021881104
            },
            fasttext_toxicity: {
                prob: .9927748441696167
            },
            glove_hate: {
                prob: .3198396563529968
            },
            keyword_hate: {
                keyword: [],
                prob: 0
            },
            query: "pollo&#128523;&#128523;&#128523;"
        }, {
            fasttext_hate: {
                prob: .9999061822891235
            },
            fasttext_toxicity: {
                prob: .06408894062042236
            },
            glove_hate: {
                prob: .9996815919876099
            },
            keyword_hate: {
                keyword: ["bitch"],
                prob: 1
            },
            query: "Bobby flay in this bitch"
        }, {
            fasttext_hate: {
                prob: .9991812109947205
            },
            fasttext_toxicity: {
                prob: .9514733552932739
            },
            glove_hate: {
                prob: .9995817542076111
            },
            keyword_hate: {
                keyword: ["faggot"],
                prob: 1
            },
            query: "I hate faggots like you"
        }, {
            fasttext_hate: {
                prob: .9991323351860046
            },
            fasttext_toxicity: {
                prob: .9880714416503906
            },
            glove_hate: {
                prob: .9960964322090149
            },
            keyword_hate: {
                keyword: ["fuck", "dyke"],
                prob: 1
            },
            query: "Fuck dykes"
        }], $scope.nameMap = {
            Keyword: "keyword_hate",
            "Oyoty Hate": "fasttext_hate",
            "Oyoty Toxicity": "fasttext_toxicity"
        }, $scope.classifiers = Object.keys($scope.nameMap), $scope.input = {
            selectedClassifier: "Oyoty Hate"
        }, $scope.matchesRange = function(item) {
            var hateScore = getScore(item);
            return $scope.switch.keepClean ? hateScore <= $scope.slider : hateScore >= $scope.slider
        };
        var getScore = function(item) {
            var current_classifier = $scope.nameMap[$scope.input.selectedClassifier];
            return 100 * item[current_classifier].prob
        };
        $scope.setColor = function(item) {
            var hateScore = getScore(item);
            return hateScore > 70 ? {
                color: "#673AB7"
            } : hateScore > 30 ? {
                color: "#3F51B5"
            } : {
                color: "#2196F3"
            }
        }, $scope.$watch("slider", function(newVal, oldVal) {
            newVal >= 70 ? $scope.theme = "max" : newVal >= 30 ? $scope.theme = "mid" : $scope.theme = "min"
        }), $scope.hateEmoji = "ðŸ˜¡", $window.scrollTo(0, 0)
    }
    angular.module("grid").controller("FilterTextController", FilterTextController), FilterTextController.$inject = ["$scope", "$sanitize", "TourService", "nzTour", "$window"]
}();
! function() {
    "use strict";

    function GridController($scope, $state, $mdBottomSheet, $mdSidenav, $mdDialog, TourService, nzTour, $window, SweetAlert, $cookies) {
        function newState(state) {
            alert("Sorry! You'll need to create a Constitution for " + state + " first!")
        }

        function querySearch(query) {
            var deferred, results = query ? self.states.filter(createFilterFor(query)) : self.states;
            return self.simulateQuery ? (deferred = $q.defer(), $timeout(function() {
                deferred.resolve(results)
            }, 1e3 * Math.random(), !1), deferred.promise) : results
        }

        function searchTextChange(text) {
            console.log("Text changed to " + text)
        }

        function selectedItemChange(item) {
            console.log("Item changed to " + JSON.stringify(item))
        }

        function loadAll() {
            var allStates = "Hate Speech Classifier";
            return allStates.split(/, +/g).map(function(state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                }
            })
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function(state) {
                return 0 === state.value.indexOf(lowercaseQuery)
            }
        }

        function init() {}
        var self = this,
            tour = window.tour = {
                config: TourService.config,
                steps: [{
                    target: "#model_list",
                    content: "This is the list of demos we have prepared to showcase the different technologies we have developed."
                }, {
                    target: "#model_0",
                    content: "For each model, you can check its description. There is a specific tour inside to guide your through."
                }]
            };
        $scope.takeTour = function() {
            nzTour.start(tour)
        }, self.simulateQuery = !1, self.isDisabled = !1, self.states = loadAll(), self.querySearch = querySearch, self.selectedItemChange = selectedItemChange, self.searchTextChange = searchTextChange, self.newState = newState, $scope.sections = [{
            name: "Hate/Swear Analysis",
            models: [{
                name: "Hate Speech Classifier",
                description: "Allows checking if the input text contains toxic or obscene content. We compare our approach against that of a keyword-based classifier and two classifiers provided by Google's Persepctive API.",
                image: "modules/grid/client/img/hate.jpg",
                state: "hate"
            }, {
                name: "Hate Comments Filter",
                description: "Filter the comments with different levels of hate speech",
                image: "modules/grid/client/img/filter.png",
                state: "filter-text"
            }, {
                name: "Swear Terms Visualizer",
                description: "Shows the capabilities of our embeddings model to detect variants of the swear terms. Our models were trained on ~ 29 Billion words coming from ~ 2.3 Billion tweets.",
                image: "modules/grid/client/img/embeddings.png",
                href: "https://modemos.epfl.ch/embeddings/#embeddings"
            }, {
                name: "Terms Nearby!",
                description: "Get the closest terms to any word you input. Be creative in inventing words! You will see how our embeddings compare to GloVe Embeddings",
                image: "modules/grid/client/img/word_circle.jpg",
                state: "neighbors"
            }]
        }, {
            name: "Image Analysis",
            models: [{
                name: "Safe Images Classifier",
                description: "Allows detecting incidents in images with a hierarchy of neural-network classifiers",
                image: "modules/grid/client/img/safe.jpeg",
                state: "image"
            }, {
                name: "War-Violence Images Classifier",
                description: "Allows detecting violent incidents in images in the context of war",
                image: "modules/grid/client/img/violent.jpg",
                state: "violence"
            }, {
                name: "Image Filter",
                description: "Allows filtering images by the significance of a certain incident in them",
                image: "modules/grid/client/img/filter-image.png",
                state: "filter-image"
            }]
        }, {
            name: "Emotions",
            models: [{
                name: "Multimodal Emotion Classifier",
                description: "Showcases the power of classifying images and text jointly with fused models on complex problems.",
                image: "modules/grid/client/img/emotions.png",
                state: "emotion"
            }, {
                name: "Text Emotion Classifier",
                description: "Allows getting the emotion expressed from text content.",
                image: "modules/grid/client/img/text_emotion.png",
                state: "textEmotions"
            }, {
                name: "Faces Emotion Classifier",
                description: "Analyzes the faces' emotions inside photos",
                image: "modules/grid/client/img/faces_emotions.jpg",
                state: "faceEmotion"
            }]
        }], $scope.goto = function(model) {
            model.state ? $state.go(model.state) : model.href && $window.open(model.href, "_blank")
        }, init();
        var visitedBefore = "true" == $cookies.get("visitedBefore");
        visitedBefore || SweetAlert.swal({
            title: "Disclaimer",
            text: "The demos on this website contain content that is racist, sexist,                        and offensive in many other ways. The images can also be not safe for work and are                        only used for demonstrating the classifiers. Neither the LSIR lab nor Privately SA assumes any                        responsibility or liability for any content presented on this website.",
            showCancelButton: !0,
            confirmButtonColor: "#dd356e",
            confirmButtonText: "OK I'm fine.",
            closeOnConfirm: !0
        }, function(isConfirm) {
            isConfirm ? $cookies.put("visitedBefore", "true") : $window.location.href = "/"
        })
    }
    angular.module("grid").controller("GridController", GridController), GridController.$inject = ["$scope", "$state", "$mdBottomSheet", "$mdSidenav", "$mdDialog", "TourService", "nzTour", "$window", "SweetAlert", "$cookies"]
}();
! function() {
    "use strict";

    function HateController($state, $scope, $mdToast, HateService, $interval, Authentication, $sanitize, nzTour, TourService, Notification, Upload) {
        if ($scope.mobile = {
                activated: !1
            }, $scope.emotionInput = {
                selectedClassifier: "lite_1"
            }, Authentication.user && Authentication.user.roles && ($scope.allowInput = Authentication.user.roles.indexOf("admin") !== -1), !$scope.mobile.activated && Authentication.user && (Authentication.user.email.indexOf("epfl") >= 0 || Authentication.user.username.indexOf("hamza") >= 0) && ($scope.showSentiments = !0), "neighbors" == $state.current.name) var tour = window.tour = {
            config: TourService.config,
            steps: [{
                target: "#tweet_select",
                content: "Try clicking a word to get its neighbors."
            }, {
                target: "#results_area",
                content: "Once you click, the closest words to it will be shown according to our embeddings and to the traditional off-the-shelf embeddings."
            }]
        };
        else tour = window.tour = {
            config: TourService.config,
            steps: [{
                target: "#tweet_select",
                content: "Try clicking a tweet that you want analyzed."
            }, {
                target: "#results_area",
                content: "Once you click, the results of the analysis for the different models will appear in this area."
            }]
        };
        $scope.takeTour = function() {
            nzTour.start(tour)
        }, $scope.resultsAvailable = !1, $scope.input = {
            text: ""
        }, $scope.emotionClassifiers = [{
            codeName: "full_freeze",
            friendlyName: "Full (3GB)"
        }, {
            codeName: "full_tuning",
            friendlyName: "Medium (72MB)"
        }, {
            codeName: "lite_1",
            friendlyName: "Lite (4MB)"
        }, {
            codeName: "lite_2",
            friendlyName: "Lite (1MB)"
        }, {
            codeName: "fasttext_full",
            friendlyName: "fastText (12MB)"
        }, {
            codeName: "fasttext_lite",
            friendlyName: "fastText (2MB)"
        }], $scope.onMobileChanged = function() {
            console.log("mobile changed"), $scope.submitText()
        }, $scope.onEmotionModelChanged = function() {
            console.log("emotion model changed"), console.log($scope.emotionInput.selectedClassifier), $scope.submitText()
        };
        var getCategories = function() {
                if ($scope.mobile.activated) var categories = ["love", "happiness", "fun", "surprise", "relief", "neutral", "hate", "anger", "sadness", "worry"];
                else categories = ["love", "happiness", "fun", "enthusiasm", "surprise", "relief", "neutral", "empty", "hate", "anger", "sadness", "boredom", "worry"];
                return categories
            },
            getColor = function(emotion) {
                var mapping = {
                    hate: "#b71c1c",
                    happiness: "#1b5e20",
                    sadness: "#757575",
                    fun: "#01579b",
                    boredom: "#795548",
                    relief: "#aeea00",
                    enthusiasm: "#ff9100",
                    worry: "#ffea00",
                    empty: "#455a64",
                    love: "#ff4081",
                    surprise: "#00e5ff",
                    anger: "#212121",
                    neutral: "#b0bec5"
                };
                return mapping[emotion]
            };
        $scope.files = [], $scope.$watchCollection("files", function(newVal, oldVal) {
            console.log($scope.files), $scope.files.length > 0 && $scope.uploadAndClassifyFiles($scope.files[0])
        }), $scope.uploadAndClassifyFiles = function(file, errFiles) {
            $scope.uploadedFile = file, $scope.errFile = errFiles && errFiles[0], file && (file.upload = Upload.upload({
                url: "/api/getCSVEmotions",
                data: {
                    uploadedFile: file
                },
                params: {
                    mobile: $scope.mobile.activated,
                    model_name: $scope.emotionInput.selectedClassifier
                }
            }).then(function(response) {
                console.log("File is successfully uploaded"), $scope.resultLink = "/files/" + response.data.file
            }, function(response) {
                response.status > 0 && ($scope.errorMsg = response.status + ": " + response.data)
            }, function(evt) {
                file.progress = Math.min(100, parseInt(100 * evt.loaded / evt.total))
            }))
        }, $scope.submitText = function() {
            return $scope.resultLink = "", $scope.input.text ? void("neighbors" == $state.current.name ? HateService.Neighbors.getNeighbors({
                word: [$scope.input.text.toLowerCase()]
            }).$promise.then(function(output) {
                output && ($scope.neighbors = output, $scope.resultsAvailable = !0)
            }) : "textEmotions" == $state.current.name ? HateService.TextEmotions.getTextEmotions({
                text: [$scope.input.text],
                mobile: $scope.mobile.activated,
                model_name: $scope.emotionInput.selectedClassifier
            }).$promise.then(function(output) {
                if (output) {
                    var data = output.fasttext_emotions;
                    $scope.sentimentData = output.fasttext_sentiments;
                    var maxSentiment = 0;
                    for (var key in $scope.sentimentData) $scope.sentimentData[key] > maxSentiment && (maxSentiment = $scope.sentimentData[key]);
                    for (key in $scope.sentimentData) $scope.sentimentData[key] = $scope.sentimentData[key] / maxSentiment;
                    console.log(JSON.stringify($scope.sentimentData)), console.log("output: " + JSON.stringify(data));
                    for (var result = [], max = 0, i = 0; i < getCategories().length; i++) data[getCategories()[i]] > max && (max = data[getCategories()[i]]);
                    for (i = 0; i < getCategories().length; i++) result.push({
                        name: getCategories()[i],
                        y: Math.round(data[getCategories()[i]] / max * 100),
                        color: getColor(getCategories()[i])
                    });
                    $scope.chartData.Text = result, $scope.resultsAvailable = !0, updateChart()
                }
            }) : (initChart(), HateService.Hate.classify({
                text: [$scope.input.text],
                mobile: $scope.mobile.activated
            }).$promise.then(function(output) {
                initChart(), output = output.results, console.log("output: " + JSON.stringify(output)), output.forEach(function(item) {
                    $scope.labels.push(item.model)
                });
                for (var notified = !1, i = 0; i < 2; i++) $scope.data[i] = [], output.forEach(function(item) {
                    $scope.data[i].push(0 == i ? item.clean : item.hate), 0 != item.clean || 0 != item.hate || 0 != i || notified || (Notification({
                        message: "Perspective API needs needs more training for this language",
                        delay: 3e3
                    }, "warning"), notified = !0)
                });
                $scope.resultsAvailable = !0
            }))) : void($scope.resultsAvailable = !1)
        };
        var getDifference = function(a, b) {
            for (var i = 0, j = 0, result = ""; j < b.length;) a[i] != b[j] || i == a.length ? result += b[j] : i++, j++;
            return result.trim()
        };
        $scope.previousText = "", $scope.previousTime = (new Date).getTime() / 1e3, $scope.forms = {}, $scope.dirty = !1, $interval(function() {
            var diff1 = getDifference($scope.previousText, $scope.input.text),
                diff2 = getDifference($scope.input.text, $scope.previousText);
            (diff1.length > 0 || diff2.length > 0) && ($scope.dirty = !0, $scope.previousText = $scope.input.text);
            var currentSeconds = (new Date).getTime() / 1e3;
            0 == diff1.length && 0 == diff2.length && $scope.dirty && currentSeconds - $scope.previousTime > 1 && ($scope.dirty = !1, $scope.previousTime = currentSeconds, $scope.submitText(), $scope.feedbackDirty = !0)
        }, 1e3);
        var initChart = function() {
            $scope.labels = [], $scope.series = ["Clean", "Hate"]
        };
        $scope.data = [
            [90, 90, 90, 90],
            [10, 10, 10, 10]
        ], $scope.labels = ["Keyword", "Logistic", "Fasttext", "CNN"];
        var cleanColor = "#CDDC39",
            hateColor = "#F44336";
        $scope.datasetOverride = [{
            label: "Clean",
            fill: !0,
            lineTension: .2,
            borderColor: cleanColor,
            backgroundColor: cleanColor
        }, {
            label: "Hate",
            fill: !0,
            lineTension: .2,
            borderColor: hateColor,
            backgroundColor: hateColor
        }];
        var fontSize = 14;
        $scope.options = {
            title: {
                display: !0,
                fontColor: "rgba(255,0,0,0.8)"
            },
            labels: {
                fontSize: fontSize
            },
            legend: {
                display: !0,
                fontSize: fontSize,
                labels: {
                    fontSize: fontSize
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: !0,
                        fontSize: fontSize
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: fontSize
                    }
                }]
            }
        }, $scope.feedback = {
            value: "hate"
        }, $scope.items = [{
            value: "hate",
            label: "Hate?"
        }, {
            value: "clean",
            label: "Clean?"
        }], $scope.feedbackDirty = !0, $scope.submitFeedback = function() {
            $scope.feedbackDirty = !1, console.log("submitted"), $mdToast.show($mdToast.simple().textContent("Feedback saved!").position("bottom right").hideDelay(3e3))
        }, $scope.$watch("feedback.value", function(newVal, oldVal) {
            console.log("newVal: " + newVal), console.log("oldVal: " + oldVal), newVal != oldVal && ($scope.feedbackDirty = !0, console.log($scope.feedbackDirty))
        }), $scope.randomTextList = ["fuck you", "this idea is cool as fuck", "we did it bitches!", "what a bitch are you"], "neighbors" == $state.current.name ? ($scope.selection_data = ["plzplzplzz", "hahahehehe", "playingpingpong", "fuck", "trump", "cantbelieve", "duck", "iloveamerica", "suckit", "weirdoman", "willkillyou", "comeon", "idiott", "looooooollllz", "hahahhaaaah", "okkkkk"], $scope.selection_data = $scope.selection_data.map(function(item) {
            return {
                text: item
            }
        })) : "textEmotions" == $state.current.name ? ($scope.selection_data = ["ummm. no it didnt work so i guess im stuck with this uglyonee", "Gotta TeraByte  of space to store movies", "HAPPY MOTHER'S DAY to ALL MOM'S HERE and to YOUR MOMS too", "Why don't you make me feel like you used to", "Oh fml its probs gunna be at shepards bush  i hate it there", "Its beautiful outside. I wish i was in new york city. But this area is pretty cool. Hip and trendy.", "@kazzababe95 cut yourself a slice of cheese cake.. it makes everything better", "Also, WHERE IS MY TOY STORY 3 TEASER CARMIKE 14? YOU SAID THERE WOULD BE TOY STORY 3!  Movie theater fail", "@TheRankinFiles to be fair, she was asking about mktg cd's, etc, but I suggested more and she never even emailed back.", "Version 2 of our live, interactive Trans-Siberian ticket planner is launched: http://tinyurl.com/c5ljwm - its very cool", "Had a shower. it's 5:55 PM. Triple 5's! Crap, it just turned 5:56", "oh yes, the Cavs win game5, now onto game6. it's still danger, they HAVE to win this one either, it's no shot for the championship", "@tarng Trudy's off Burnet...the one up north that no one goes to", "BTW, hey ppl. lol TGIF. Hopefully ur day is gr8. Mine is aight. Feeling like it kinda sux I got no plans 4 the wknd....", "Yeah it's Friday but I have to work at 5am tomorrow  oh well going shopping afterwork", "I love ridding in this weather", "@opalbonfante Wonderful! Let me know what you think. Not light reading", "no Santa cruz for me  but I do have an interview at jamba tomorrow morning (:", "Eating at Zippys with candace!", "HEY YOU' ALL SUCK;its anybody on there :s im so bored common answear me", "#whorewhore she is", "@DustBuny: being today and all, WE'RE GONNA USE THE FORCE to make it happen!", "wishes I could be the one going to our conference in the Bahamas next week"], $scope.selection_data = $scope.selection_data.map(function(item) {
            return {
                text: item
            }
        })) : $scope.selection_data = [{
            text: "muthufucka you"
        }, {
            text: "They are st.upid and ig.norant with no class"
        }, {
            text: "#whorewhore she is"
        }, {
            text: "thanks for being a bitcg"
        }, {
            text: "ttyl fuckerz"
        }, {
            text: "pakistanis are effing great people"
        }, {
            text: "ill ki** you beytsh"
        }, {
            text: "Lebanon is a country where arabs live."
        }, {
            text: "You're killing it"
        }, {
            text: "Bitchums dropped her phone twice already .. either she doesn't care or she clumsy!"
        }, {
            text: "pussybitches!"
        }, {
            text: "bitchums"
        }, {
            text: "You're killing it"
        }, {
            text: "willkillyoufucker"
        }, {
            text: "How to help poor kids go back to school"
        }, {
            text: "Is Zambia a country where some committed massacres?"
        }, {
            text: "If they voted for Hilary they are not idiots "
        }, {
            text: "If they voted for Hilary they are idiots "
        }, {
            text: "jajajajajaja"
        }, {
            text: "sh**y a**hole"
        }, {
            text: "fuckinzz byitch"
        }, {
            text: "excited as fu**"
        }, {
            text: "you are such a #fuckinidiot"
        }, {
            text: "fu****k you "
        }, {
            text: "you look like shitFromhell"
        }, {
            text: "why don't you water the damn plants, boy. haha!"
        }, {
            text: " we won the damn tournament ðŸ˜ƒ"
        }, {
            text: "Warning: penny boards will make you a faggot",
            convnet_prob: .53363249769386,
            fasttext_prob: .97781863774495,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .98762814154149,
            multiconvnet_prob: .58529538334435,
            toxicity_prob: .68116918264738
        }, {
            text: "Fuck dykes",
            convnet_prob: .99786615489487,
            fasttext_prob: .99999999777235,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .98801817986902,
            multiconvnet_prob: .99896215524129,
            toxicity_prob: .98332445549061
        }, {
            text: "@sizzurp__ @ILIKECATS74 @yoPapi_chulo @brandonernandez @bootyacid at least i dont look like jefree starr faggot",
            convnet_prob: .66522183645192,
            fasttext_prob: .83366982674433,
            toxicity: !1,
            convnet: !0,
            multiconvnet: !1,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .94268125904037,
            multiconvnet_prob: .5462076537795,
            toxicity_prob: .5125869352287
        }, {
            text: "'@jayswaggkillah: '@JacklynAnnn: @jayswaggkillah Is a fag' jackie jealous' Neeeee",
            convnet_prob: .95743869005748,
            fasttext_prob: .69282371725554,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .92480463135565,
            multiconvnet_prob: .99267497175881,
            toxicity_prob: .945054166761
        }, {
            text: "@Zhugstubble You heard me bitch but any way I'm back th texas so wtf u talking about bitch ass nigga",
            convnet_prob: .99931884157362,
            fasttext_prob: .98997510693752,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99995593557785,
            multiconvnet_prob: .99967232980902,
            toxicity_prob: .96863576169796
        }, {
            text: "@elaynay your a dirty terrorist and your religion is a fucking joke, you go around screaming Allah akbar doing terrorist shit. Dirty faggot.",
            convnet_prob: .99623352536648,
            fasttext_prob: .92981654759281,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99968825917828,
            multiconvnet_prob: .99834196726374,
            toxicity_prob: .99926757936108
        }, {
            text: "RT @ivanrabago_: @_WhitePonyJr_ looking like faggots?",
            convnet_prob: .91736774594086,
            fasttext_prob: .94381166988781,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !1,
            logistic_prob: .95591410144763,
            multiconvnet_prob: .95221051597209,
            toxicity_prob: .8255696071606
        }, {
            text: "Well I thought you knew actually RT @KingHorseDick: Man why y'all didn't tell me I was a dick riding ass faggot? Y'all not real &#128557;&#128557;&#128557;&#128557;&#128557;&#128557;",
            convnet_prob: .9993630401191,
            fasttext_prob: .82857312783177,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99933415145355,
            multiconvnet_prob: .99980227764814,
            toxicity_prob: .99796226440724
        }, {
            text: "@Stonisnipezz I know. It was a joke, faggot.",
            convnet_prob: .74302854029333,
            fasttext_prob: .90064838276443,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .97963563166438,
            multiconvnet_prob: .91152229749719,
            toxicity_prob: .79717420193107
        }, {
            text: "I'm tired of people saying I look like my brother &amp; calling me Deondre' like serious Succ My Ass fag asses",
            convnet_prob: .99514506419176,
            fasttext_prob: .79278787151165,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99671816060723,
            multiconvnet_prob: .99433927062362,
            toxicity_prob: .95628060094663
        }, {
            text: "#VoteBlue2014 Yeah. CUZ 8 million people in faggot ass #newyork are #chickenshit JEWS&gt; FUCK THEM right? Fuck Bibi Netanyahu. RIGHT?",
            convnet_prob: .99515926473898,
            fasttext_prob: .92155391840742,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99993299694705,
            multiconvnet_prob: .99878025545661,
            toxicity_prob: .99455658056629
        }, {
            text: "@AndreBerto word is you use roids, stupid hypocrite lying faggot.",
            convnet_prob: .99645986922122,
            fasttext_prob: .9214557725667,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .79521266989611,
            multiconvnet_prob: .99637279383459,
            toxicity_prob: .99816083229692
        }, {
            text: "I hate faggots like you",
            convnet_prob: .99925741396893,
            fasttext_prob: .99798363722376,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99798582653313,
            multiconvnet_prob: .99578449627964,
            toxicity_prob: .99400060261253
        }, {
            text: "@MoriTaheripour shut up nigger whore! Hope u get raped by one of those animals. Might change your tune.",
            convnet_prob: .99827177483182,
            fasttext_prob: .5953359376183,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .98398025129233,
            multiconvnet_prob: .9993063796782,
            toxicity_prob: .99764395768281
        }, {
            text: "@Oprah @3LWTV Fuck you nigger sheboon. Hope you r strung up like all niggers should be. WHITEPOWER. #1488",
            convnet_prob: .99898666891099,
            fasttext_prob: .94294497300945,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99999807731527,
            multiconvnet_prob: .99956078786906,
            toxicity_prob: .99946160607746
        }, {
            text: "They used to tie both ends of a niggers legs to 2 different horses and beat him as the horses spread until his legs break ... Smh",
            convnet_prob: .95020349761492,
            fasttext_prob: .62722595639328,
            toxicity: !1,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .99283027689642,
            multiconvnet_prob: .99251321720898,
            toxicity_prob: .62877540577783
        }, {
            text: "Good night fags and fagettes (that's the female version of fags like fag-ettes to make it female) I hate you all.",
            convnet_prob: .59253025840339,
            fasttext_prob: .68111512476452,
            toxicity: !1,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .96960636484957,
            multiconvnet_prob: .87527043540713,
            toxicity_prob: .59416113245144
        }, {
            text: "I cant stand no crybaby ass nigga. If you gonna act like a bitch I will leave yo ass after I instavideo yo stupid lookin ass",
            convnet_prob: .9998048587381,
            fasttext_prob: .98931007590232,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99999893975302,
            multiconvnet_prob: .99994795818291,
            toxicity_prob: .99813281797164
        }, {
            text: "RT @nerdkiller669: @ShinSnipes no you're a nigger",
            convnet_prob: .89975230548434,
            fasttext_prob: .9910359636386,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99609789295157,
            multiconvnet_prob: .86446368985392,
            toxicity_prob: .80034313689444
        }, {
            text: "'I'll fuck you til you love me faggot' - Mike Tyson",
            convnet_prob: .99232960421762,
            fasttext_prob: .98923720860656,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99989171671632,
            multiconvnet_prob: .99716922615967,
            toxicity_prob: .98927113510062
        }, {
            text: "@OxbloodStomper @PalePixie88 @SlaveCatcher88 what's your problem? Don't u know Jews control niggers? Read a book or two.",
            convnet_prob: .96524941682372,
            fasttext_prob: .5130079695952,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !1,
            keyword: !0,
            logistic_prob: .50965758656032,
            multiconvnet_prob: .99447766370036,
            toxicity_prob: .68764749367576
        }, {
            text: "I fucking hate you niggers bruh... http://t.co/OeTK4f94BO",
            convnet_prob: .99995933490675,
            fasttext_prob: .99825096923296,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99991739412471,
            multiconvnet_prob: .99987744081811,
            toxicity_prob: .99964893309166
        }, {
            text: "RT @Fact: Some species of birds have been known to hold funerals for their deceased.",
            convnet_prob: .88679351371978,
            fasttext_prob: .91994646153729,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .69817713455101,
            multiconvnet_prob: .97153812094592,
            toxicity_prob: .99381281506456
        }, {
            text: "I remember Draft prom night, my dress wouldn't zip up and I was bawling my eyes out and screaming I didn't want to go... So funny. Haha.",
            convnet_prob: .96443437692883,
            fasttext_prob: .79432303838333,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .92308237256396,
            multiconvnet_prob: .93447776230751,
            toxicity_prob: .94014839307732
        }, {
            text: "Damn Eli. That's just ruff. I'm not even gonna trash talk that one. Get your game together Eli. You're a good QB. Stop with the TO's",
            convnet_prob: .5395698685978,
            fasttext_prob: .57222227096382,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !0,
            keyword: !0,
            logistic_prob: .89493589382928,
            multiconvnet_prob: .73349683709218,
            toxicity_prob: .61585671826919
        }, {
            text: "'Also, Happy Armistice Day, anachronists!",
            convnet_prob: .98031513143391,
            fasttext_prob: .86198493141071,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .66582352432007,
            multiconvnet_prob: .98146374765129,
            toxicity_prob: .99342592380819
        }, {
            text: "&#8220;The Hun is either at your throat or at your feet.&#8221; - Churchill'",
            convnet_prob: .86844470121788,
            fasttext_prob: .82004202275575,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .67270863374039,
            multiconvnet_prob: .69914557392272,
            toxicity_prob: .98422413268885
        }, {
            text: "@ExpSelf A friend suggested I dress as a Fairy for a Halloween party we're attending...I'm thinking more Wizardess of course. :)",
            convnet_prob: .93090714520731,
            fasttext_prob: .70491053322801,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .83992581198175,
            multiconvnet_prob: .95203907811324,
            toxicity_prob: .99730216019879
        }, {
            text: "RT @BitchPlsComedy: apparently &#8220;bae&#8221; means &#8220;before anyone else&#8221; i always thought it was a ghetto word for &#8220;babe&#8221;",
            convnet_prob: .61182554574942,
            fasttext_prob: .68572606960944,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .84564649724076,
            multiconvnet_prob: .61727360120076,
            toxicity_prob: .97514044144305
        }, {
            text: "@RiotSupport so I was suspended for a day because of a random lag spikes that force me to close the client and relog and suspended. GG",
            convnet_prob: .93860998523307,
            fasttext_prob: .71662802359362,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .72255546335809,
            multiconvnet_prob: .94196533189175,
            toxicity_prob: .99782901632801
        }, {
            text: "#Flyers w/ some moxy! Big comeback again!!! Major penalty killed the Caps.Great game. 5 cases of #tastycakes",
            convnet_prob: .97421039211422,
            fasttext_prob: .86041636773636,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .89694604687694,
            multiconvnet_prob: .95883676148468,
            toxicity_prob: .93888284318857
        }, {
            text: "pollo&#128523;&#128523;&#128523;",
            convnet_prob: .57945460946375,
            fasttext_prob: .61171110275244,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .61114031980522,
            multiconvnet_prob: .7119139002779,
            toxicity_prob: .68087081148685
        }, {
            text: "#YouWillNotBeTakenSeriouslyIf you wear shorty shorts and fuzzy boots in negative degree weather.",
            convnet_prob: .77288817781197,
            fasttext_prob: .71839468509231,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .73189874122398,
            multiconvnet_prob: .93224066750096,
            toxicity_prob: .96902179474092
        }, {
            text: "@LeeLee0474 Awww, that's cute! My niece's guinea pig crawled up her dad's pants &amp; well I don't think I need to finish this sentence.lol",
            convnet_prob: .77140727717793,
            fasttext_prob: .74275037545836,
            toxicity: !0,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .82109014203928,
            multiconvnet_prob: .93101380309378,
            toxicity_prob: .60707332760855
        }, {
            text: "Then gave the ole uncle Charlie to mr Ortiz #nyy @DBetances50",
            convnet_prob: .76870800493614,
            fasttext_prob: .8076932976271,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .68968902638078,
            multiconvnet_prob: .96104535607519,
            toxicity_prob: .98060670332498
        }, {
            text: "RT @YepillPosts: If I had a dollar for every time I died on flappy bird http://t.co/pj8QSBTe2L",
            convnet_prob: .89359157080337,
            fasttext_prob: .86498949270757,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .79173909350347,
            multiconvnet_prob: .81926914449882,
            toxicity_prob: .98893500054788
        }, {
            text: "RT @kelter1: The fact that Kim Kardashian's app may make $200 million makes me wish we can speed up the process of having the apes take ove&#8230;",
            convnet_prob: .98339636063328,
            fasttext_prob: .80615096976743,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .79846338261231,
            multiconvnet_prob: .94991449344254,
            toxicity_prob: .99578779364365
        }, {
            text: "I play for keeps you play wit me its gon be yellow tape! #200",
            convnet_prob: .73527129399641,
            fasttext_prob: .75211726856448,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .51243104921238,
            multiconvnet_prob: .93446073938995,
            toxicity_prob: .94619785660027
        }, {
            text: "@LastProtestants @stomponato @delschilling You're an idiot.",
            convnet_prob: .92622570223421,
            fasttext_prob: .78262893725653,
            toxicity: !0,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .57265511732689,
            multiconvnet_prob: .92094336637782,
            toxicity_prob: .98248578278802
        }, {
            text: "A mock up of my wedding photos http://t.co/qgPtAmfjPA",
            convnet_prob: .98430984684008,
            fasttext_prob: .8810055343215,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .87695897188092,
            multiconvnet_prob: .99279911452896,
            toxicity_prob: .99154852863012
        }, {
            text: "&#8220;@fhairhead: Only in Vermont is it big news that our govern got a buck #vermontproblems&#8221;",
            convnet_prob: .95929366138882,
            fasttext_prob: .72346909645433,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .76615655765948,
            multiconvnet_prob: .95755320343174,
            toxicity_prob: .97069011644057
        }, {
            text: "Sitting alone watching White Chicks, no pants, fuzzy blankets, tea || turn up",
            convnet_prob: .62198081221851,
            fasttext_prob: .69789090559778,
            toxicity: !0,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .84160752356193,
            multiconvnet_prob: .71627033741903,
            toxicity_prob: .61975944779974
        }, {
            text: "I want to go to a haunted house maybe get possesed y'know just to see if ghosts are real &#128561;&#128128;",
            convnet_prob: .88328062922709,
            fasttext_prob: .80163431266977,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .84995621148084,
            multiconvnet_prob: .90166622019759,
            toxicity_prob: .8691604688787
        }, {
            text: "$10 bucks the Browns get Johnny ! &#128527;&#128588;&#128175;",
            convnet_prob: .90823988098713,
            fasttext_prob: .76760690357021,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .67922282352933,
            multiconvnet_prob: .86178769981861,
            toxicity_prob: .78357324865431
        }, {
            text: "I was with a bitch with a mustash for a year and a half? Wtf is wrong itch me",
            convnet_prob: .96249081265395,
            fasttext_prob: .72703153245334,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .98919395917309,
            multiconvnet_prob: .99584758906773,
            toxicity_prob: .96256259102405
        }, {
            text: "RT @skythedon: Huge ass, small waist &amp; okay face &amp; bitches really think they famous",
            convnet_prob: .89785771208667,
            fasttext_prob: .71390878849956,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .9958236661083,
            multiconvnet_prob: .99600786763855,
            toxicity_prob: .93655741698774
        }, {
            text: "Bobby flay in this bitch",
            convnet_prob: .91580790896357,
            fasttext_prob: .99054090246163,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .95183108082099,
            multiconvnet_prob: .99437600217343,
            toxicity_prob: .93849773027775
        }, {
            text: "I'm never gonna be ok with my nigga around alot of bitches while with his boys. Cause I was once that female your boys put you on !!",
            convnet_prob: .98849281118056,
            fasttext_prob: .58929611770135,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .9988656013978,
            multiconvnet_prob: .99894188624579,
            toxicity_prob: .94415018863855
        }, {
            text: "Where the bad bitches at? Lol @Vbomb20",
            convnet_prob: .91749315483205,
            fasttext_prob: .75843695191841,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !0,
            keyword: !0,
            logistic_prob: .94051017936517,
            multiconvnet_prob: .99745363321433,
            toxicity_prob: .55272243876732
        }, {
            text: "RT @KayciMalynn: I just can't help but to hate you. Even though you never intentionally did anything to me you're still a cunt. #girllogic",
            convnet_prob: .89537107303037,
            fasttext_prob: .60252151133088,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99054157774145,
            multiconvnet_prob: .98735375354087,
            toxicity_prob: .92220566724359
        }, {
            text: "RT @HBCUfessions: You females overlook us geeks. When I take these glasses off, I'm no longer Clark Kent. I go superman in that pussy. - FA&#8230;",
            convnet_prob: .69393597456341,
            fasttext_prob: .58038412055223,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !0,
            keyword: !0,
            logistic_prob: .88436441982718,
            multiconvnet_prob: .97977496210124,
            toxicity_prob: .8675421978843
        }, {
            text: "RT @macktology101: 'Sunday funday' hoe quotes",
            convnet_prob: .53429191350706,
            fasttext_prob: .6045735877721,
            toxicity: !1,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !0,
            keyword: !1,
            logistic_prob: .59039866109984,
            multiconvnet_prob: .88365534921145,
            toxicity_prob: .89251203254804
        }, {
            text: "I know these bitches did not leave me, AGAIN. #FuckEverybody",
            convnet_prob: .94371096726147,
            fasttext_prob: .89164017331375,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99646470355015,
            multiconvnet_prob: .99835190071703,
            toxicity_prob: .96380181010095
        }, {
            text: "RT @JoeBudden: Young, attractive, successful, supportive, faithful man w his own everything..u think bringing solely pussy to the table is &#8230;",
            convnet_prob: .62108570042263,
            fasttext_prob: .75368069015165,
            toxicity: !1,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !0,
            keyword: !0,
            logistic_prob: .66110528433358,
            multiconvnet_prob: .99351613675339,
            toxicity_prob: .7713998285419
        }, {
            text: "RT @opticzodiac: @JerKzTheGreaT @Erupts @BajaOrBust_ @Xfinii shut the fuck up ugly ass bitch nigga i stole your setup",
            convnet_prob: .99998234377689,
            fasttext_prob: .99692125111304,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99999996774288,
            multiconvnet_prob: .99999324793777,
            toxicity_prob: .99979469342344
        }, {
            text: "Emma Watson slays every single Harry Potter movie. Each film becomes her bitch.",
            convnet_prob: .7989257668669,
            fasttext_prob: .72321799682175,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .90001562422107,
            multiconvnet_prob: .64593304100413,
            toxicity_prob: .921356717316
        }, {
            text: "@KristyT @aliciafiasco @luciouskitty 'you know I don't know karate bitch' loooool how am I just finding out about this now, this is amazing",
            convnet_prob: .98009710089644,
            fasttext_prob: .52573509930588,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .83834755606167,
            multiconvnet_prob: .99804611645154,
            toxicity_prob: .72586923571113
        }, {
            text: "@ChristyMack I love bad bitches that my fucking problem....",
            convnet_prob: .98745530409947,
            fasttext_prob: .9496723528791,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99466373157944,
            multiconvnet_prob: .99945912323147,
            toxicity_prob: .99588661251575
        }, {
            text: "RT @lawnmoney_duke: I respect any nigga that getting money and fuckin hoes",
            convnet_prob: .99760441244165,
            fasttext_prob: .97986643402168,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99985243278634,
            multiconvnet_prob: .99966442457147,
            toxicity_prob: .83936443761463
        }, {
            text: "RT @MustBeCharm: &#128557;&#128557;&#128557;&#128557;&#128557; RT @WORIDSTARHlPHOP: How side bitches be when you pick them up in daylight hours https://t.co/57tBcQ4vsO",
            convnet_prob: .94739780297756,
            fasttext_prob: .72236672245184,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !0,
            keyword: !0,
            logistic_prob: .84672910875192,
            multiconvnet_prob: .99803644525332,
            toxicity_prob: .80561004441248
        }, {
            text: "Bitch killa gone be dacing in that bitch cdfu",
            convnet_prob: .99570361991725,
            fasttext_prob: .99411441068118,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .94965889516347,
            multiconvnet_prob: .99918691464425,
            toxicity_prob: .93484175792695
        }, {
            text: "why is this niggah still tweetn tf !!!!",
            convnet_prob: .97494960449647,
            fasttext_prob: .55052902029093,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .55662482559896,
            multiconvnet_prob: .99962670078531,
            toxicity_prob: .75884129497993
        }, {
            text: "I'm arrogant and my bitch conceited &#128520;&#128526;",
            convnet_prob: .90881100535225,
            fasttext_prob: .9213787805411,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .94781241723035,
            multiconvnet_prob: .99114932427066,
            toxicity_prob: .9492083345376
        }, {
            text: "Can I get some soy sauce for this bitch? @pusd http://t.co/ladnDPsCVt",
            convnet_prob: .99002114185507,
            fasttext_prob: .58331166254132,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .91246726285029,
            multiconvnet_prob: .9946549345091,
            toxicity_prob: .77928792909571
        }, {
            text: "Can I hit that pussy way I wanna while this record playing &#128525;&#128525;&#128129;&#128175;&#128107;&#128584;&#128586;&#128076;&#128076;&#128076;&#128139;&#128139;",
            convnet_prob: .91248792345487,
            fasttext_prob: .54169246923378,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !0,
            keyword: !0,
            logistic_prob: .77053494275611,
            multiconvnet_prob: .99832050286252,
            toxicity_prob: .55791220268616
        }, {
            text: "RT @HoodBibIe: Niggas with face tats are the same ones that stole your animal crackers in elementary smh they just dont give a fuck",
            convnet_prob: .97709753903841,
            fasttext_prob: .85879130391523,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !0,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99855942752865,
            multiconvnet_prob: .99497068655923,
            toxicity_prob: .90607783078392
        }, {
            text: "RT @AC_Hussle: I'm not giving these hoes free meals so they can go lay up with the dude they can't get over. Nope.",
            convnet_prob: .72351461328219,
            fasttext_prob: .66372711550722,
            toxicity: !1,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !0,
            keyword: !0,
            logistic_prob: .54794459747173,
            multiconvnet_prob: .98864689022896,
            toxicity_prob: .91879049825433
        }, {
            text: "All I ask for is love n loyalty. . nothing else. No arguing over other bitches/niggas , no he say she say , no social media bs... Just love",
            convnet_prob: .98848924107822,
            fasttext_prob: .64968587129979,
            toxicity: !0,
            convnet: !0,
            multiconvnet: !0,
            fasttext: !1,
            logistic: !0,
            keyword: !0,
            logistic_prob: .99191674109104,
            multiconvnet_prob: .99944304864289,
            toxicity_prob: .9134578799622
        }, {
            text: "@marwaeljabo same goes for you _â€°Ð³Ñžâ€°Ð«Ñž__â€°Ð³ÑžÐµÐ_",
            convnet_prob: .97443435321515,
            fasttext_prob: .74876660765907,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .77035077268486,
            multiconvnet_prob: .98448056587552,
            toxicity_prob: .97177593915058
        }, {
            text: "Female Killer In Vegas ÐƒÐšâ€°Ð«Ð£â€°Ð«_AllegedlyÐƒÐšâ€°Ð«Ð£ÐœÑ† Shouted ÐƒÐšâ€°Ð«Ð£â€°Ð«_Allahu AkbarÐƒÐšâ€°Ð«Ð£ÐœÑ† As She Ran Over People https://t.co/TRiUbREQyK",
            convnet_prob: .98446342057498,
            fasttext_prob: .85733141173049,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .99707426160475,
            multiconvnet_prob: .96266347274136,
            toxicity_prob: .98876103656772
        }, {
            text: "Checking out 'Female Killer In Las Vegas Shouted ÐƒÐšâ€°Ð«Ð£â€°Ð«_Allahu AkbarÐƒÐšâ€°Ð«Ð£ÐœÑ† As She Ran Ove' on America Conservative 2 Conservat: https://t.co/bnWLjt5FaX",
            convnet_prob: .96717930402285,
            fasttext_prob: .78515132620306,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .99756727571934,
            multiconvnet_prob: .90838308018425,
            toxicity_prob: .98130667363905
        }, {
            text: "Brother @imraansiddiqi  makes a living off accusing people of #Islamophobia. but does not know what #Islamphobia means. Allahou Akbar! :)",
            convnet_prob: .88399919294127,
            fasttext_prob: .82381386089121,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .96390234770723,
            multiconvnet_prob: .85420397829415,
            toxicity_prob: .90758370713262
        }, {
            text: "@akbar_hh need more people like you _â€°Ð³Ñžâ€°Ð«___â€°Ð³Ñžâ€°Ð«__",
            convnet_prob: .98170217608132,
            fasttext_prob: .83976348432117,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .83539326055971,
            multiconvnet_prob: .99021725564652,
            toxicity_prob: .6991195292056
        }, {
            text: "There's always something going on in a Tesco car park",
            convnet_prob: .98754190114383,
            fasttext_prob: .82387535258377,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .81357707778816,
            multiconvnet_prob: .95116295870121,
            toxicity_prob: .9818632253298
        }, {
            text: "MUSLIM IMMIGRANT Chanted ÐƒÐšâ€°Ð«Ð£â€°Ð«ÐŸAllahu AkbarÐƒÐšâ€°Ð«Ð£ÐµÑœ While Raping Gas Station AttendentÐƒÐšâ€°Ð«Ð£_Refuses To Appear In... https://t.co/QyLqFM60Dj",
            convnet_prob: .9098801513977,
            fasttext_prob: .83222538140132,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .97379723900677,
            multiconvnet_prob: .6904776328574,
            toxicity_prob: .71749276316965
        }, {
            text: "@marwaeljabo I'd love it if my girl smoked with me _â€°Ð³Ñžâ€°Ð«_Ðœ_",
            convnet_prob: .99329570489387,
            fasttext_prob: .85815066984001,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .88718164178135,
            multiconvnet_prob: .96202939030783,
            toxicity_prob: .73564609823782
        }, {
            text: "one person followed me // automatically checked by https://t.co/TdhwPByXmF",
            convnet_prob: .99510502487433,
            fasttext_prob: .97395502492049,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .93779745579246,
            multiconvnet_prob: .9790003356348,
            toxicity_prob: .99513496118466
        }, {
            text: "France says they 'neutralized' a number of al-Mourabitoun fighters near Mâ€°Ð«Ð„ÐµÂ©naka, Al Akbar said they were Platforme: https://t.co/RwF0sfovQu",
            convnet_prob: .93210058951237,
            fasttext_prob: .82385616432601,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .91709968528468,
            multiconvnet_prob: .91244467201058,
            toxicity_prob: .99419288622624
        }, {
            text: "'Was Trump right? Officers say pockets of Muslims celebrated 9/11",
            convnet_prob: .90502339510198,
            fasttext_prob: .85270542877767,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .99092429005698,
            multiconvnet_prob: .75492590147494,
            toxicity_prob: .99699930406404
        }, {
            text: "https://t.co/7XhbRSMA7Y via @MailOnline News from English papers.'",
            convnet_prob: .97019855226281,
            fasttext_prob: .92944243846522,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .95977940011816,
            multiconvnet_prob: .93939627194814,
            toxicity_prob: .998091950129
        }, {
            text: "Sister @SanaSaeed the Islamic argument for Hijab Akbar is if you don't wear it you get what u desrve rape. Sister do u know? @imraansiddiqi",
            convnet_prob: .89092446591717,
            fasttext_prob: .77881025283836,
            toxicity: !0,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .96295719511924,
            multiconvnet_prob: .86031830394341,
            toxicity_prob: .71766806062684
        }, {
            text: "Just smashing a akbar with @TyroneLarkham @LarkhamWilliam @1jamesmitchell @philmaguire3",
            convnet_prob: .94484678738511,
            fasttext_prob: .81493667044307,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .83891040045377,
            multiconvnet_prob: .9312684316941,
            toxicity_prob: .52228771266389
        }, {
            text: "Eyewitness claims Las Vegas vehicle attack carried out by Muslim  screaming 'Allahu Akbar'... media blackout.. https://t.co/6HnWmkIo8d #tcot",
            convnet_prob: .98498203567219,
            fasttext_prob: .82545001630632,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !0,
            logistic_prob: .99853295771583,
            multiconvnet_prob: .92969965738438,
            toxicity_prob: .98529586227128
        }, {
            text: "The Witness who Reported the Woman who MOWED DOWN 35 people shouted ALAHU AKBAR: https://t.co/Mu1u93b5gB via @YouTube",
            convnet_prob: .9756442209861,
            fasttext_prob: .82249848170801,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .99819832811186,
            multiconvnet_prob: .97379705580907,
            toxicity_prob: .83048062611198
        }, {
            text: "@Lawln @Akbar_Knows Carlos already told me it was yours lmao",
            convnet_prob: .94765290918872,
            fasttext_prob: .80963069614526,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .7251862270318,
            multiconvnet_prob: .93874486557313,
            toxicity_prob: .95958818585659
        }, {
            text: "@RobotZo @Akbar_Knows I'm not even in this",
            convnet_prob: .96701494084419,
            fasttext_prob: .62229228438578,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .58194687592768,
            multiconvnet_prob: .93994075961645,
            toxicity_prob: .98016315418287
        }, {
            text: "@Lawln @Akbar_Knows why would I hashtag my Twitter name if it was really me lol",
            convnet_prob: .95849503009557,
            fasttext_prob: .7890733643825,
            toxicity: !1,
            convnet: !1,
            multiconvnet: !1,
            fasttext: !1,
            logistic: !1,
            keyword: !1,
            logistic_prob: .90385552865323,
            multiconvnet_prob: .94778118008156,
            toxicity_prob: .98573516000856
        }], $scope.indexCount = 0, $scope.getRandomText = function() {
            $scope.input.text = $scope.randomTextList[$scope.indexCount % $scope.randomTextList.length], $scope.indexCount++, $scope.submitText()
        }, $scope.selectText = function(id) {
            $scope.selectedTextId = id, $scope.input.text = $sanitize($scope.selection_data[id].text)
        }, $scope.chartConfig = {}, $scope.models = ["Text"];
        var updateChart = function() {
                $scope.chartConfig = {}, $scope.models.forEach(function(model) {
                    $scope.chartConfig[model] = {
                        chart: {
                            marginLeft: 60,
                            marginRight: 60,
                            polar: !0,
                            spacingBottom: 40,
                            spacingTop: 0,
                            spacingLeft: 5,
                            spacingRight: 5,
                            animation: {
                                duration: 1500
                            },
                            width: 600,
                            height: 600
                        },
                        title: {
                            text: "Emotions",
                            align: "center",
                            verticalAlign: "top",
                            margin: 50,
                            floating: !0,
                            y: 30
                        },
                        legend: {
                            enabled: !1
                        },
                        xAxis: {
                            tickInterval: 1,
                            min: 0,
                            max: $scope.mobile.activated ? 10 : 13,
                            categories: getCategories()
                        },
                        tooltip: {
                            formatter: function() {
                                return "<b>" + this.x
                            }
                        },
                        yAxis: {
                            min: 0,
                            tickInterval: 10,
                            tickPositions: [0, 20, 40, 60, 80, 100],
                            minorTickInterval: 0,
                            labels: {
                                enabled: !1
                            }
                        },
                        plotOptions: {
                            series: {
                                pointStart: 0,
                                pointInterval: 1
                            },
                            column: {
                                pointPadding: 0,
                                groupPadding: 0,
                                colorByPoint: !0
                            }
                        },
                        series: [{
                            pointPlacement: "on",
                            type: "column",
                            name: "level",
                            data: $scope.chartData[model]
                        }]
                    }
                }), $scope.resultsPending = !1
            },
            defaultData = function() {
                for (var output = [], i = 0; i < getCategories().length; i++) output.push({
                    name: getCategories()[i],
                    y: 0,
                    color: getColor(getCategories()[i])
                });
                return output
            },
            defaultPrediction = function() {
                return {
                    model: null,
                    name: null
                }
            },
            initEmotionsChart = function() {
                $scope.chartData = {
                    Text: defaultData()
                }, $scope.predictions = {
                    Text: defaultPrediction()
                }
            };
        initEmotionsChart(), $scope.emojiSentiments = ["<smile>", "<heart>", "<lolface>", "<neutralface>", "<sadface>"], $scope.sentimentEmoji = {
            "<heart>": "ðŸ’›",
            "<lolface>": "ðŸ˜›",
            "<neutralface>": "ðŸ˜",
            "<sadface>": "ðŸ˜ž",
            "<smile>": "ðŸ˜ƒ"
        }, updateChart()
    }
    angular.module("grid").controller("HateController", HateController), HateController.$inject = ["$state", "$scope", "$mdToast", "HateService", "$interval", "Authentication", "$sanitize", "nzTour", "TourService", "Notification", "Upload"]
}();
! function() {
    "use strict";

    function ImageController($scope, $mdToast, ImageService, $interval, $http, Upload, $timeout, $document, SweetAlert, Authentication, $state, TourService, nzTour, $window) {
        function validateURL(textval) {
            var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
            return urlregex.test(textval)
        }
        $scope.showResults = !1, $scope.currentState = $state.current.name, Authentication.user && Authentication.user.roles && ($scope.allowInput = Authentication.user.roles.indexOf("admin") !== -1);
        var tour = window.tour = {
            config: TourService.config,
            steps: [{
                target: "#image_select",
                content: "Try clicking an image that you want analyzed."
            }, {
                target: "#class_results",
                content: "Once you click, the results of the analysis will appear here, showing the various classes under which the image can be classified."
            }]
        };
        $scope.takeTour = function() {
            nzTour.start(tour)
        }, $scope.mobile = {
            activated: !1
        }, $scope.imageModelInput = {
            selectedClassifier: "mobilenet"
        }, $scope.imageMobileClassifiers = [{
            codeName: "resnet50",
            friendlyName: "Resnet 50 (90MB)"
        }, {
            codeName: "mobilenet",
            friendlyName: "MobileNet (12MB)"
        }, {
            codeName: "squeezenet",
            friendlyName: "SqueezeNet (3MB)"
        }], $scope.onMobileChanged = function() {
            console.log("mobile changed"), $scope.submitImage()
        }, $scope.onImageModelChanged = function() {
            console.log("image model changed"), console.log($scope.imageModelInput.selectedClassifier), $scope.submitImage()
        }, $scope.resultsAvailable = !1, $scope.input = {
            url: ""
        }, $scope.updated = 0, $scope.files = [];
        var bigColor = "#2196F3",
            smallColor = "orange",
            boundaryColor = "black",
            max = 20,
            minOpacity = .1,
            opacity = function(value, parentVals, total, max_score) {
                void 0 === total && (total = 2);
                var opacity = 1;
                return parentVals && parentVals.forEach(function(parentVal) {
                    parentVal < max / total && (opacity = minOpacity)
                }), (value < max / total || max_score && value < max_score) && (opacity = minOpacity), opacity
            },
            color = function(value, total) {
                return void 0 === total && (total = 2), value < max / total ? smallColor : bigColor
            },
            updateClasses = function(personScore, selfieScore, provocativeScore, beachScore, bikiniScore, familyScore, goreScore, isisScore, isisViolenceScore, nsfwScore, otherScore) {
                $scope.showResults = !0, personScore *= max;
                var nonPersonScore = max - personScore;
                selfieScore *= max;
                var nonSelfieScore = max - selfieScore;
                provocativeScore *= max;
                var nonProvocativeScore = max - provocativeScore;
                beachScore *= max;
                var nonBeachScore = max - beachScore;
                bikiniScore *= max;
                var nonBikiniScore = max - bikiniScore,
                    otherScore = max * otherScore;
                familyScore *= max;
                var nonFamilyScore = max - familyScore;
                goreScore *= max;
                var nonGoreScore = max - goreScore;
                isisScore *= max;
                var nonisisScore = max - isisScore;
                isisScore > .5 ? isisViolenceScore *= max : isisViolenceScore = isisScore;
                var nonIsisViolenceScore = max - isisViolenceScore;
                nsfwScore *= max;
                var nonNsfwScore = max - nsfwScore;
                if ("image" == $scope.currentState)
                    if ($scope.mobile.activated) {
                        var max_score = Math.max(bikiniScore, provocativeScore, otherScore);
                        $scope.classData = [{
                            name: "",
                            parent: "null",
                            value: 1,
                            type: boundaryColor,
                            level: bigColor,
                            children: [{
                                name: "Bikini",
                                parent: "Top Level",
                                value: bikiniScore,
                                type: boundaryColor,
                                level: color(bikiniScore, 3),
                                opacity: opacity(bikiniScore, null, 3, max_score)
                            }, {
                                name: "Provocative Selfie",
                                parent: "Top Level",
                                value: provocativeScore,
                                type: boundaryColor,
                                level: color(provocativeScore, 3),
                                opacity: opacity(provocativeScore, null, 3, max_score)
                            }, {
                                name: "Other",
                                parent: "Top Level",
                                value: otherScore,
                                type: boundaryColor,
                                level: color(otherScore, 3),
                                opacity: opacity(otherScore, null, 3, max_score)
                            }]
                        }]
                    } else $scope.classData = [{
                        name: "",
                        parent: "null",
                        value: 1,
                        type: boundaryColor,
                        level: bigColor,
                        children: [{
                            name: "Person",
                            parent: "Top Level",
                            value: personScore,
                            type: boundaryColor,
                            level: color(personScore),
                            opacity: opacity(personScore, [nonNsfwScore]),
                            children: [{
                                name: "",
                                parent: "Person",
                                value: 1,
                                type: boundaryColor,
                                level: bigColor,
                                opacity: opacity(personScore, [nonNsfwScore]),
                                children: [{
                                    name: "Close-up",
                                    parent: "",
                                    value: selfieScore,
                                    type: boundaryColor,
                                    level: color(selfieScore),
                                    opacity: opacity(selfieScore, [personScore, nonNsfwScore]),
                                    children: [{
                                        name: "Provocative",
                                        parent: "Close-up",
                                        value: provocativeScore,
                                        type: boundaryColor,
                                        level: color(provocativeScore),
                                        opacity: opacity(provocativeScore, [selfieScore, personScore, nonNsfwScore])
                                    }, {
                                        name: "Not Provocative",
                                        parent: "Close-up",
                                        value: nonProvocativeScore,
                                        type: boundaryColor,
                                        level: color(nonProvocativeScore),
                                        opacity: opacity(nonProvocativeScore, [selfieScore, personScore, nonNsfwScore])
                                    }]
                                }, {
                                    name: "Not Close-up",
                                    parent: "",
                                    value: nonSelfieScore,
                                    type: boundaryColor,
                                    level: color(nonSelfieScore),
                                    opacity: opacity(nonSelfieScore, [personScore, nonNsfwScore])
                                }]
                            }, {
                                name: "",
                                parent: "Person",
                                value: 1,
                                type: boundaryColor,
                                level: bigColor,
                                opacity: opacity(personScore, [nonNsfwScore]),
                                children: [{
                                    name: "Beach/Pool",
                                    parent: "",
                                    value: beachScore,
                                    type: boundaryColor,
                                    level: color(beachScore),
                                    opacity: opacity(beachScore, [personScore, nonNsfwScore]),
                                    children: [{
                                        name: "Bikini",
                                        parent: "Beach/Pool",
                                        value: bikiniScore,
                                        type: boundaryColor,
                                        level: color(bikiniScore),
                                        opacity: opacity(bikiniScore, [personScore, nonNsfwScore, beachScore])
                                    }, {
                                        name: "Not Bikini",
                                        parent: "Beach/Pool",
                                        value: nonBikiniScore,
                                        type: boundaryColor,
                                        level: color(nonBikiniScore),
                                        opacity: opacity(nonBikiniScore, [personScore, nonNsfwScore, beachScore])
                                    }]
                                }, {
                                    name: "Not Beach",
                                    parent: "",
                                    value: nonBeachScore,
                                    type: boundaryColor,
                                    level: color(nonBeachScore),
                                    opacity: opacity(nonBeachScore, [personScore, nonNsfwScore])
                                }]
                            }, {
                                name: "",
                                parent: "Person",
                                value: 1,
                                type: boundaryColor,
                                level: bigColor,
                                opacity: opacity(personScore, [nonNsfwScore]),
                                children: [{
                                    name: "Family",
                                    parent: "",
                                    value: familyScore,
                                    type: boundaryColor,
                                    level: color(familyScore),
                                    opacity: opacity(familyScore, [personScore, nonNsfwScore])
                                }, {
                                    name: "Not Family",
                                    parent: "",
                                    value: nonFamilyScore,
                                    type: boundaryColor,
                                    level: color(nonFamilyScore),
                                    opacity: opacity(nonFamilyScore, [personScore, nonNsfwScore])
                                }]
                            }]
                        }, {
                            name: "Not Person",
                            parent: "Top Level",
                            value: nonPersonScore,
                            type: boundaryColor,
                            level: color(nonPersonScore),
                            opacity: opacity(nonPersonScore, [nonNsfwScore])
                        }, {
                            name: "NSFW",
                            parent: "Top Level",
                            value: nsfwScore,
                            type: boundaryColor,
                            level: color(nsfwScore),
                            opacity: opacity(nsfwScore)
                        }]
                    }];
                else "violence" == $scope.currentState && ($scope.classData = [{
                    name: "",
                    parent: "null",
                    value: 1,
                    type: boundaryColor,
                    level: bigColor,
                    children: [{
                        name: "War Violence",
                        parent: "Top Level",
                        value: isisViolenceScore,
                        type: boundaryColor,
                        level: color(isisViolenceScore),
                        opacity: opacity(isisViolenceScore)
                    }, {
                        name: "No War Violence",
                        parent: "Top Level",
                        value: nonIsisViolenceScore,
                        type: boundaryColor,
                        level: color(nonIsisViolenceScore),
                        opacity: opacity(nonIsisViolenceScore)
                    }]
                }], $scope.classData2 = [{
                    name: "",
                    parent: "null",
                    value: 1,
                    type: boundaryColor,
                    level: bigColor,
                    children: [{
                        name: "Gore",
                        parent: "Top Level",
                        value: goreScore,
                        type: boundaryColor,
                        level: color(goreScore),
                        opacity: opacity(goreScore)
                    }, {
                        name: "Not Gore",
                        parent: "Top Level",
                        value: nonGoreScore,
                        type: boundaryColor,
                        level: color(nonGoreScore),
                        opacity: opacity(nonGoreScore)
                    }]
                }], $scope.classData_violent_war = [{
                    name: "",
                    parent: "null",
                    value: 1,
                    type: boundaryColor,
                    level: bigColor,
                    children: [{
                        name: "War Zone",
                        parent: "Top Level",
                        value: isisScore,
                        type: boundaryColor,
                        level: color(isisScore),
                        opacity: opacity(isisScore),
                        children: [{
                            name: "Violent",
                            parent: "War Zone",
                            value: isisViolenceScore,
                            type: boundaryColor,
                            level: color(isisViolenceScore),
                            opacity: opacity(isisViolenceScore, [isisScore])
                        }, {
                            name: "Not Violent",
                            parent: "War Zone",
                            value: nonIsisViolenceScore,
                            type: boundaryColor,
                            level: color(nonIsisViolenceScore),
                            opacity: opacity(nonIsisViolenceScore, [isisScore])
                        }]
                    }, {
                        name: "Not War Zone",
                        parent: "Top Level",
                        value: nonisisScore,
                        type: boundaryColor,
                        level: color(nonisisScore),
                        opacity: opacity(nonisisScore)
                    }]
                }])
            },
            animate = function() {
                scrollToResults(), console.log("scrolling");
                var animation = $interval(function() {
                    updateClasses(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()), $scope.updated += 1
                }, 50);
                return animation
            },
            scrollToResults = function() {
                var offset = $scope.iframeHeight / 2,
                    duration = 500,
                    someElement = angular.element(document.getElementById("class_results"));
                $document.scrollToElementAnimated(someElement, offset, duration)
            },
            removeParentPath = function(string) {
                return string ? string.replace(new RegExp("/tmp"), "") : string
            };
        $scope.round = function(num) {
            return Math.round(100 * num) / 100
        };
        var displayFaceEmotions = function(response) {
                $scope.faceEmotions = response, console.log("face emotions" + JSON.stringify(response));
                try {
                    $scope.faceEmotions.image_found || (console.log("$scope.showResults: " + $scope.showResults), $scope.input.url ? SweetAlert.swal("Problem retrieving the url", "Try uploading the image instead.\nIf it doesn't work, please try another image.", "warning") : SweetAlert.swal("Problem processing the image", "Try another image instead.", "warning")), $scope.faceEmotions.new_img_path = removeParentPath($scope.faceEmotions.new_img_path);
                    for (var i = 0; i < $scope.faceEmotions.face_img.length; i++) {
                        $scope.faceEmotions.face_img[i] = removeParentPath($scope.faceEmotions.face_img[i]);
                        for (var x in $scope.faceEmotions.face_emotion[i]) $scope.faceEmotions.face_emotion[i][x] = $scope.round($scope.faceEmotions.face_emotion[i][x])
                    }
                    $scope.emojiSentiments = ["happiness", "surprise", "neutral", "sadness", "fear", "anger"], $scope.sentimentEmoji = {
                        surprise: "ðŸ˜®",
                        neutral: "ðŸ˜",
                        sadness: "ðŸ˜ž",
                        fear: "ðŸ˜¨",
                        anger: "ðŸ˜ ",
                        happiness: "ðŸ˜ƒ"
                    }
                } catch (e) {
                    console.log("error in getting faces")
                }
                $scope.resultsAvailable = !0, $scope.showResults = !0
            },
            displayTree = function(response, animation) {
                if (response) {
                    var data = response;
                    console.log(JSON.stringify(data)), animation && $interval.cancel(animation), data.found ? (console.log("data", JSON.stringify(data)), updateClasses(data.person, data.selfie, data.sexy_selfie, data.beach, data.bikini, data.family, data.gore, data.isis, data.isis_violence, data.nsfw, data.other)) : ($scope.showResults = !1, console.log("$scope.showResults: " + $scope.showResults), $scope.input.url ? SweetAlert.swal("Problem retrieving the url", "Try uploading the image instead.\nIf it doesn't work, please try another image.", "warning") : SweetAlert.swal("Problem processing the image", "Try another image instead.", "warning")), $scope.updated += 1, $scope.resultsAvailable = !0
                }
            };
        $scope.uploadAndGetFileEmotions = function(file, errFiles) {
            $scope.resultsAvailable = !1, $scope.showResults = !0, $scope.uploadedFile = file, $scope.errFile = errFiles && errFiles[0], file && (file.upload = Upload.upload({
                url: "/api/faceEmotion",
                data: {
                    uploadedFile: file
                }
            }).then(function(response) {
                console.log("File is successfully uploaded"), displayFaceEmotions(response.data)
            }, function(response) {
                response.status > 0 && ($scope.errorMsg = response.status + ": " + response.data)
            }, function(evt) {
                file.progress = Math.min(100, parseInt(100 * evt.loaded / evt.total))
            }))
        }, $scope.uploadAndClassifyFiles = function(file, errFiles) {
            if ($scope.uploadedFile = file, $scope.errFile = errFiles && errFiles[0], file) {
                var animation = animate();
                file.upload = Upload.upload({
                    url: "/api/classify",
                    data: {
                        uploadedFile: file
                    },
                    params: {
                        mobile: $scope.mobile.activated,
                        model_name: $scope.imageModelInput.selectedClassifier
                    }
                }).then(function(response) {
                    console.log("File is successfully uploaded"), displayTree(response.data, animation)
                }, function(response) {
                    $interval.cancel(animation), response.status > 0 && ($scope.errorMsg = response.status + ": " + response.data)
                }, function(evt) {
                    file.progress = Math.min(100, parseInt(100 * evt.loaded / evt.total))
                })
            }
        }, $scope.submitUrl = function() {
            var tmpUrl = "http://" + $scope.input.url;
            validateURL(tmpUrl) && ($scope.input.url = tmpUrl, $scope.submitUrl()), console.log("removing old image"), $scope.addRemoteFilesApi.removeAll(), $scope.addRemoteFilesApi.addRemoteFile($scope.input.url, "", "image"), $scope.files.length > 1 && ($scope.files = [$scope.files[$scope.files.length - 1]])
        }, $scope.$watchCollection("files", function(newVal, oldVal) {
            console.log($scope.files), $scope.files.length > 0 && $scope.submitImage()
        }), "image" == $scope.currentState ? $scope.randomImageList = ["https://s-media-cache-ak0.pinimg.com/736x/a5/7d/c6/a57dc60a78185c98b57ba1a23f9f8bab.jpg", "http://www.thaoie.com/wp-content/uploads/2014/09/hb_family_day_09.jpg", "https://68.media.tumblr.com/40862ea034b64adfb3d75426af892499/tumblr_okxr8cGy3e1untgrfo1_500.jpg", "http://experienceahealthylife.com/wp-content/uploads/2013/06/IMG_6163.jpg", "http://www.mtv.com.au/sites/default/files/styles/vimn_image_embed/public/mtv_au/galleries/large/2016/03/09/article-2390152-1b427c16000005dc-375_634x732.jpg?itok=OfPmwhPp", "http://pre02.deviantart.net/6870/th/pre/i/2013/264/1/2/bathroom_selfie_c__by_ellaella33-d6naoln.jpg", "http://www.poolcleaningstafford.com/images/swim/pool-family-jump.jpg?site=4638", "http://i.dailymail.co.uk/i/pix/2012/07/13/article-2173211-140D1975000005DC-961_634x393.jpg", "http://www.vankirkpools.com/wp-content/uploads/2016/10/van-kirk-pools-best-selfie.jpg", "http://scontent-a.cdninstagram.com/hphotos-xfa1/l/t51.2885-15/10724135_833367640036309_1770867021_n.jpg", "https://s-media-cache-ak0.pinimg.com/originals/1f/0a/7b/1f0a7b96f8d9e07672e29e454f5b1a2e.jpg", "https://ak5.picdn.net/shutterstock/videos/7407499/thumb/1.jpg", "https://ak3.picdn.net/shutterstock/videos/10948376/thumb/4.jpg", "http://static1.businessinsider.com/image/579fa2a3918a0f6b6dfa24ef-1200/soldier-war.jpg", "https://s-media-cache-ak0.pinimg.com/originals/a9/a4/24/a9a4245cb3eb208ea2ad914e885dd1aa.jpg", "http://cdn03.cdn.justjared.com/wp-content/uploads/2016/05/behati-growing/behati-prinsloo-bares-baby-bump-in-bikini-selfie-05.jpg", "http://i.dailymail.co.uk/i/pix/2015/06/09/22/297AA10200000578-0-image-m-16_1433885069177.jpg", "http://www.imgion.com/images/01/Stay-Together-2.jpg", "http://media.istockphoto.com/photos/beautiful-family-portrait-picture-id508189850?k=6&m=508189850&s=170667a&w=0&h=ol8VtEPZKG8Zy5xWHyqagkQrKNK4Q_5LjkP-jVJPe8Q=", "http://www.promoslogos.com/weblog/wp-content/uploads/Beach-Ball.jpg", "http://www.freakingnews.com/pictures/21500/Monkey-with-Human-Eyes-21623.jpg"] : "violence" == $scope.currentState ? $scope.randomImageList = ["http://assets.nydailynews.com/polopoly_fs/1.2144911.1426043577!/img/httpImage/image.jpg_gen/derivatives/article_750/isis11n-9-web.jpg", "https://i.ytimg.com/vi/mHHJza5Sl88/maxresdefault.jpg", "http://assets.nydailynews.com/polopoly_fs/1.2076348.1421181140!/img/httpImage/image.jpg_gen/derivatives/article_750/isis2.jpg", "https://s-media-cache-ak0.pinimg.com/originals/70/b5/0e/70b50e215fb3afd59c5e33be7f927a6c.jpg", "http://i.telegraph.co.uk/multimedia/archive/03543/paris1_3543389b.jpg", "http://cdn2-www.craveonline.com/assets/mandatory/legacy/2016/05/man_file_1106744_ScreenShot2016-05-23at1.26.36PM.png", "http://wpmedia.news.nationalpost.com/2015/09/gen-isis-execution-1.jpg", "http://media.vocativ.com/photos/2015/07/ISIS-Child-Execute333063085.jpg", "https://s-media-cache-ak0.pinimg.com/originals/18/e1/aa/18e1aababcb72947510f1a6449448a64.jpg", "http://www.vankirkpools.com/wp-content/uploads/2016/10/van-kirk-pools-best-selfie.jpg", "http://scontent-a.cdninstagram.com/hphotos-xfa1/l/t51.2885-15/10724135_833367640036309_1770867021_n.jpg", "https://s-media-cache-ak0.pinimg.com/originals/1f/0a/7b/1f0a7b96f8d9e07672e29e454f5b1a2e.jpg", "https://ak5.picdn.net/shutterstock/videos/7407499/thumb/1.jpg", "https://ak3.picdn.net/shutterstock/videos/10948376/thumb/4.jpg", "http://static1.businessinsider.com/image/579fa2a3918a0f6b6dfa24ef-1200/soldier-war.jpg", "http://i.dailymail.co.uk/i/pix/2016/01/24/20/308A4C9F00000578-3414721-image-a-5_1453668210110.jpg", "http://4.bp.blogspot.com/-M6YxUUlNpr8/UOfCru9k67I/AAAAAAAAAGY/y8zZd1JmnyU/s1600/graphic_death%255B1%255D.jpg", "http://static6.businessinsider.com/image/54612c07ecad0408105886e2-1190-625/the-50-most-violent-cities-in-the-world.jpg"] : "faceEmotion" == $scope.currentState && ($scope.randomImageList = ["https://s-media-cache-ak0.pinimg.com/736x/a5/7d/c6/a57dc60a78185c98b57ba1a23f9f8bab.jpg", "http://i2.mirror.co.uk/incoming/article83278.ece/ALTERNATES/s1200/theresa-may-delivers-her-address-on-the-third-day-of-the-conservative-party-conference-pic-reuters-504673602.jpg", "http://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Theresa-May-migrant-G20-644717.jpg", "http://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Theresa-May-slaps-time-limit-on-detention-of-pregnant-women-in-immigration-custody-515355.jpg", "https://www.askideas.com/media/20/Funny-Sad-Face-Baby-Image.jpg", "https://68.media.tumblr.com/40862ea034b64adfb3d75426af892499/tumblr_okxr8cGy3e1untgrfo1_500.jpg", "https://ak9.picdn.net/shutterstock/videos/18478699/thumb/1.jpg", "http://i.dailymail.co.uk/i/pix/2015/12/27/02/2FA0919300000578-0-image-a-51_1451184103475.jpg", "http://www.clevver.com/wp-content/uploads/2016/01/candice-accola-kat-graham-nina-dobrev-sad-happy-instagram-main.jpg", "http://i.dailymail.co.uk/i/pix/2012/07/13/article-2173211-140D1975000005DC-961_634x393.jpg", "https://ak5.picdn.net/shutterstock/videos/7407499/thumb/1.jpg", "https://s-media-cache-ak0.pinimg.com/originals/a9/a4/24/a9a4245cb3eb208ea2ad914e885dd1aa.jpg", "http://www.freakingnews.com/pictures/21500/Monkey-with-Human-Eyes-21623.jpg", "https://howiecarrshow-3fhssrl128pflr.netdna-ssl.com/wp-content/uploads/2016/11/Very-Funny-Smiling-Donald-Trump-Picture-681x471.jpg"]), $scope.indexCount = 0, $scope.getRandomImage = function() {
            $scope.setImageByUrl($scope.randomImageList[$scope.indexCount % $scope.randomImageList.length])
        }, $scope.setImageByUrl = function(url) {
            $scope.input.url = url, $scope.indexCount++;
            var tmp = $scope.allowInput;
            $scope.allowInput = !0, $scope.submitUrl(), $scope.allowInput = tmp
        }, $scope.selectImage = function(id) {
            $scope.selectedImageId = id, $scope.setImageByUrl($scope.randomImageList[id]), scrollToResults()
        }, $scope.submitImage = function() {
            if ($scope.files && 0 != $scope.files.length) {
                var file = $scope.files[0];
                if (file.isRemote) {
                    if ($scope.input.url)
                        if ("image" == $scope.currentState || "violence" == $scope.currentState) {
                            var animation = animate();
                            ImageService.Image.classify({
                                image: [$scope.input.url],
                                mobile: $scope.mobile.activated,
                                model_name: $scope.imageModelInput.selectedClassifier
                            }).$promise.then(function(response) {
                                displayTree(response, animation)
                            })
                        } else "faceEmotion" == $scope.currentState && ($scope.resultsAvailable = !1, $scope.showResults = !0, ImageService.FaceEmotion.classify({
                            image: [$scope.input.url]
                        }).$promise.then(function(response) {
                            displayFaceEmotions(response)
                        }))
                } else "image" == $scope.currentState || "violence" == $scope.currentState ? $scope.uploadAndClassifyFiles($scope.files[0]) : "faceEmotion" == $scope.currentState && $scope.uploadAndGetFileEmotions($scope.files[0])
            }
        }, $window.scrollTo(0, 0)
    }
    angular.module("grid").controller("ImageController", ImageController), ImageController.$inject = ["$scope", "$mdToast", "ImageService", "$interval", "$http", "Upload", "$timeout", "$document", "SweetAlert", "Authentication", "$state", "TourService", "nzTour", "$window"]
}();
! function() {
    "use strict";

    function d3Tree($parse, $window) {
        return {
            restrict: "EA",
            template: "<svg width='600' height='450'></svg>",
            link: function(scope, elem, attrs) {
                function redrawLineChart() {
                    if (salesDataToPlot) {
                        svg.selectAll("*").remove();
                        var i = 0,
                            tree = d3.layout.tree().size([height, width]),
                            diagonal = d3.svg.diagonal().projection(function(d) {
                                return [d.y, d.x]
                            });
                        svg.attr("width", width + margin.right + margin.left).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                        var root = salesDataToPlot[0],
                            nodes = tree.nodes(root).reverse(),
                            links = tree.links(nodes);
                        nodes.forEach(function(d) {
                            d.y = 120 * d.depth
                        });
                        var node = svg.selectAll("g.node").data(nodes, function(d) {
                                return d.id || (d.id = ++i)
                            }),
                            nodeEnter = node.enter().append("g").attr("class", "node").attr("transform", function(d) {
                                return "translate(" + d.y + "," + d.x + ")"
                            });
                        nodeEnter.append("circle").attr("r", function(d) {
                            return d.value
                        }).style("stroke", function(d) {
                            return d.type
                        }).style("fill", function(d) {
                            return d.level
                        }).style("opacity", function(d) {
                            return d.opacity
                        }), nodeEnter.append("text").attr("x", function(d) {
                            return d.children || d._children ? (d.value + 4) * -1 : d.value + 4
                        }).attr("dy", "-.60em").attr("text-anchor", function(d) {
                            return d.children || d._children ? "end" : "start"
                        }).text(function(d) {
                            return d.name
                        }).style("fill-opacity", 1).style("opacity", function(d) {
                            return d.opacity
                        });
                        var link = svg.selectAll("path.link").data(links, function(d) {
                            return d.target.id
                        });
                        link.enter().insert("path", "g").attr("class", "link").style("stroke", function(d) {
                            return d.target.level
                        }).attr("d", diagonal).style("opacity", function(d) {
                            return d.target.opacity
                        }).attr("path", "link")
                    }
                }
                var exp = $parse(attrs.chartData),
                    exp2 = $parse(attrs.updated),
                    salesDataToPlot = exp(scope),
                    d3 = $window.d3,
                    rawSvg = elem.find("svg"),
                    svg = d3.select(rawSvg[0]);
                scope.$watch(exp2, function(newVal, oldVal) {
                    salesDataToPlot = exp(scope), redrawLineChart()
                }, !0);
                var margin = {
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    },
                    width = 600 - margin.right - margin.left,
                    height = 450 - margin.top - margin.bottom
            }
        }
    }
    angular.module("grid").directive("d3Tree", d3Tree), d3Tree.$inject = ["$parse", "$window"]
}();
! function() {
    "use strict";

    function d3Tree1($parse, $window) {
        return {
            restrict: "EA",
            template: "<svg width='850' height='200'></svg>",
            link: function(scope, elem, attrs) {
                function setChartParameters() {
                    xScale = d3.scale.linear().domain([salesDataToPlot[0].hour, salesDataToPlot[salesDataToPlot.length - 1].hour]).range([padding + 5, rawSvg.attr("width") - padding]), yScale = d3.scale.linear().domain([0, d3.max(salesDataToPlot, function(d) {
                        return d.sales
                    })]).range([rawSvg.attr("height") - padding, 0]), xAxisGen = d3.svg.axis().scale(xScale).orient("bottom").ticks(salesDataToPlot.length - 1), yAxisGen = d3.svg.axis().scale(yScale).orient("left").ticks(5), lineFun = d3.svg.line().x(function(d) {
                        return xScale(d.hour)
                    }).y(function(d) {
                        return yScale(d.sales)
                    }).interpolate("basis")
                }

                function drawLineChart() {
                    setChartParameters(), svg.append("svg:g").attr("class", "x axis").attr("transform", "translate(0,180)").call(xAxisGen), svg.append("svg:g").attr("class", "y axis").attr("transform", "translate(20,0)").call(yAxisGen), svg.append("svg:path").attr({
                        d: lineFun(salesDataToPlot),
                        stroke: "blue",
                        "stroke-width": 2,
                        fill: "none",
                        class: pathClass
                    })
                }

                function redrawLineChart() {
                    setChartParameters(), svg.selectAll("g.y.axis").call(yAxisGen), svg.selectAll("g.x.axis").call(xAxisGen), svg.selectAll("." + pathClass).attr({
                        d: lineFun(salesDataToPlot)
                    })
                }
                var xScale, yScale, xAxisGen, yAxisGen, lineFun, exp = $parse(attrs.chartData),
                    salesDataToPlot = exp(scope),
                    padding = 20,
                    pathClass = "path",
                    d3 = $window.d3,
                    rawSvg = elem.find("svg"),
                    svg = d3.select(rawSvg[0]);
                scope.$watchCollection(exp, function(newVal, oldVal) {
                    salesDataToPlot = newVal, redrawLineChart()
                }), drawLineChart()
            }
        }
    }
    angular.module("grid").directive("d3Tree1", d3Tree1), d3Tree1.$inject = ["$parse", "$window"]
}();
var mdButtonsToggleModule = angular.module("md-buttons-toggle", ["ngAria", "ngAnimate", "ngMaterial"]);
mdButtonsToggleModule.directive("mdButtonsToggle", function() {
    return {
        template: '<div layout="row" layout-align="center center"><md-button ng-repeat="option in items"  class="md-group md-raised" ng-class="{\'{{selectedClass}}\': option.value == ngModel,left: $index == 0, right: $last}" ng-click="change(option.value)" ng-bind="option.label" ng-disabled="ngDisabled"></md-button></div>',
        restrict: "E",
        replace: !0,
        transclude: !0,
        scope: {
            ngModel: "=",
            items: "=",
            ngDisabled: "=",
            selectedClass: "@?"
        },
        link: function(scope, elem, attrs) {
            angular.isUndefined(scope.selectedClass) && (scope.selectedClass = "md-primary"), angular.forEach(scope.items, function(value, key) {
                angular.isObject(value) || (scope.items[key] = {
                    value: value,
                    label: value
                })
            }), scope.change = function(key) {
                scope.ngModel = key
            }
        }
    }
});
! function() {
    "use strict";

    function userAvatar() {
        return {
            replace: !0,
            template: '<svg class="user-avatar" viewBox="0 0 128 128" height="64" width="64" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
        }
    }
    angular.module("grid").directive("userAvatar", userAvatar), userAvatar.$inject = []
}();
! function() {
    "use strict";

    function EmotionService($resource) {
        var factory = {};
        return factory.Emotion = $resource("api/emotion/classifyUrl", {}, {
            classify: {
                method: "POST",
                params: {},
                isArray: !1
            }
        }), factory
    }
    angular.module("grid").factory("EmotionService", EmotionService), EmotionService.$inject = ["$resource"]
}();
! function() {
    "use strict";

    function HateService($resource) {
        var factory = {};
        return factory.Hate = $resource("api/hate", {}, {
            classify: {
                method: "POST",
                params: {}
            }
        }), factory.Neighbors = $resource("api/neighbors", {}, {
            getNeighbors: {
                method: "POST",
                params: {}
            }
        }), factory.TextEmotions = $resource("api/textEmotions", {}, {
            getTextEmotions: {
                method: "POST",
                params: {}
            }
        }), factory.serverImage = $resource("/files/:id", {
            id: "@id"
        }, {
            getFile: {
                method: "GET",
                params: {
                    limit: 10
                }
            }
        }), factory
    }
    angular.module("grid").factory("HateService", HateService), HateService.$inject = ["$resource"]
}();
! function() {
    "use strict";

    function ImageService($resource) {
        var factory = {};
        return factory.Image = $resource("api/classifyUrl", {}, {
            classify: {
                method: "POST",
                params: {}
            }
        }), factory.FaceEmotion = $resource("api/faceEmotionUrl", {}, {
            classify: {
                method: "POST",
                params: {}
            }
        }), factory.serverImage = $resource("/images/:id", {
            id: "@id"
        }, {
            getImage: {
                method: "GET",
                params: {
                    limit: 10
                }
            }
        }), factory
    }
    angular.module("grid").factory("ImageService", ImageService), ImageService.$inject = ["$resource"]
}();
! function() {
    "use strict";

    function TourService() {
        var factory = {};
        return factory.config = {
            mask: {
                visible: !0,
                clickThrough: !0,
                clickExit: !1,
                scrollThrough: !0,
                color: "rgba(0,0,0,.7)"
            },
            container: "body",
            scrollBox: "body",
            previousText: "Previous",
            nextText: "Next",
            finishText: "Finish",
            animationDuration: 400,
            dark: !1
        }, factory
    }
    angular.module("grid").factory("TourService", TourService), TourService.$inject = []
}();
! function() {
    "use strict";

    function menuConfig(menuService) {
        menuService.addMenuItem("topbar", {
            title: "Admin",
            state: "admin",
            type: "dropdown",
            roles: ["admin"]
        })
    }
    angular.module("core.admin").run(menuConfig), menuConfig.$inject = ["menuService"]
}();
! function() {
    "use strict";

    function routeConfig($stateProvider) {
        $stateProvider.state("admin", {
            abstract: !0,
            url: "/admin",
            template: "<ui-view/>",
            data: {
                roles: ["admin"]
            }
        })
    }
    angular.module("core.admin.routes").config(routeConfig), routeConfig.$inject = ["$stateProvider"]
}();
! function() {
    "use strict";

    function menuConfig(menuService) {
        menuService.addMenu("account", {
            roles: ["user"]
        }), menuService.addMenuItem("account", {
            title: "",
            state: "settings",
            type: "dropdown",
            roles: ["user"]
        }), menuService.addSubMenuItem("account", "settings", {
            title: "Edit Profile",
            state: "settings.profile"
        }), menuService.addSubMenuItem("account", "settings", {
            title: "Edit Profile Picture",
            state: "settings.picture"
        }), menuService.addSubMenuItem("account", "settings", {
            title: "Change Password",
            state: "settings.password"
        }), menuService.addSubMenuItem("account", "settings", {
            title: "Manage Social Accounts",
            state: "settings.accounts"
        })
    }
    angular.module("core").run(menuConfig), menuConfig.$inject = ["menuService"]
}();
! function() {
    "use strict";

    function routeFilter($rootScope, $state, Authentication) {
        function stateChangeStart(event, toState, toParams, fromState, fromParams) {
            if (toState.data && toState.data.roles && toState.data.roles.length > 0) {
                for (var allowed = !1, i = 0, roles = toState.data.roles; i < roles.length; i++)
                    if ("guest" === roles[i] || Authentication.user && void 0 !== Authentication.user.roles && Authentication.user.roles.indexOf(roles[i]) !== -1) {
                        allowed = !0;
                        break
                    }
                allowed || (event.preventDefault(), null !== Authentication.user && "object" == typeof Authentication.user ? $state.transitionTo("forbidden") : $state.go("authentication.signin").then(function() {
                    storePreviousState(toState, toParams)
                }))
            }
        }

        function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
            storePreviousState(fromState, fromParams)
        }

        function storePreviousState(state, params) {
            state.data && state.data.ignoreState || ($state.previous = {
                state: state,
                params: params,
                href: $state.href(state, params)
            })
        }
        $rootScope.$on("$stateChangeStart", stateChangeStart), $rootScope.$on("$stateChangeSuccess", stateChangeSuccess)
    }
    angular.module("core").run(routeFilter), routeFilter.$inject = ["$rootScope", "$state", "Authentication"]
}();
! function() {
    "use strict";

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.rule(function($injector, $location) {
            var path = $location.path(),
                hasTrailingSlash = path.length > 1 && "/" === path[path.length - 1];
            if (hasTrailingSlash) {
                var newPath = path.substr(0, path.length - 1);
                $location.replace().path(newPath)
            }
        }), $urlRouterProvider.otherwise(function($injector, $location) {
            $injector.get("$state").transitionTo("not-found", null, {
                location: !1
            })
        }), $stateProvider.state("home", {
            url: "/home",
            templateUrl: "modules/grid/client/views/grid-main.client.view.html",
            controller: "GridController",
            controllerAs: "vm"
        }).state("not-found", {
            url: "/not-found",
            templateUrl: "/modules/core/client/views/404.client.view.html",
            controller: "ErrorController",
            controllerAs: "vm",
            params: {
                message: ["$stateParams", function($stateParams) {
                    return $stateParams.message
                }]
            },
            data: {
                ignoreState: !0,
                pageTitle: "Not Found"
            }
        }).state("bad-request", {
            url: "/bad-request",
            templateUrl: "/modules/core/client/views/400.client.view.html",
            controller: "ErrorController",
            controllerAs: "vm",
            params: {
                message: ["$stateParams", function($stateParams) {
                    return $stateParams.message
                }]
            },
            data: {
                ignoreState: !0,
                pageTitle: "Bad Request"
            }
        }).state("forbidden", {
            url: "/forbidden",
            templateUrl: "/modules/core/client/views/403.client.view.html",
            data: {
                ignoreState: !0,
                pageTitle: "Forbidden"
            }
        })
    }
    angular.module("core.routes").config(routeConfig), routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
}();
! function() {
    "use strict";

    function ErrorController($stateParams) {
        var vm = this;
        vm.errorMessage = null, $stateParams.message && (vm.errorMessage = $stateParams.message)
    }
    angular.module("core").controller("ErrorController", ErrorController), ErrorController.$inject = ["$stateParams"]
}();
! function() {
    "use strict";

    function HeaderController($scope, $state, Authentication, menuService, $mdToast) {
        function stateChangeSuccess() {
            vm.isCollapsed = !1
        }
        var vm = this;
        vm.accountMenu = menuService.getMenu("account").items[0], vm.authentication = Authentication, vm.isCollapsed = !1, vm.menu = menuService.getMenu("topbar"), $scope.$on("$stateChangeSuccess", stateChangeSuccess), $scope.submitHeart = function() {
            $mdToast.show($mdToast.simple().textContent("We love you too!").position("bottom right").hideDelay(5e3))
        }
    }
    angular.module("core").controller("HeaderController", HeaderController), HeaderController.$inject = ["$scope", "$state", "Authentication", "menuService", "$mdToast"]
}();
! function() {
    "use strict";

    function HomeController() {}
    angular.module("core").controller("HomeController", HomeController)
}();
! function() {
    "use strict";

    function autofocus($timeout, $window) {
        function link(scope, element, attrs) {
            $window.innerWidth >= 800 && $timeout(function() {
                var el = element[0];
                el.focus(), el.selectionStart = el.selectionEnd = el.value.length
            }, 100)
        }
        var directive = {
            restrict: "A",
            link: link
        };
        return directive
    }
    angular.module("core").directive("autofocus", autofocus), autofocus.$inject = ["$timeout", "$window"]
}();
! function() {
    "use strict";

    function pageTitle($rootScope, $interpolate, $state) {
        function link(scope, element) {
            function listener(event, toState) {
                var applicationCoreTitle = "Modemos",
                    separeteBy = " - ";
                if (toState.data && toState.data.pageTitle) {
                    var stateTitle = $interpolate(toState.data.pageTitle)($state.$current.locals.globals);
                    element.html(applicationCoreTitle + separeteBy + stateTitle)
                } else element.html(applicationCoreTitle)
            }
            $rootScope.$on("$stateChangeSuccess", listener)
        }
        var directive = {
            restrict: "A",
            link: link
        };
        return directive
    }
    angular.module("core").directive("pageTitle", pageTitle), pageTitle.$inject = ["$rootScope", "$interpolate", "$state"]
}();
! function() {
    "use strict";

    function showErrors($timeout, $interpolate) {
        function compile(elem, attrs) {
            function linkFn(scope, el, attrs, formCtrl) {
                function checkValidity(event, name) {
                    if (angular.isUndefined(name) || formCtrl.$name === name) return initCheck = !0, showValidationMessages = !0, toggleClasses(formCtrl[inputName].$invalid)
                }

                function reset(event, name) {
                    if (angular.isUndefined(name) || formCtrl.$name === name) return $timeout(function() {
                        el.removeClass("has-error"), el.removeClass("has-success"), showValidationMessages = !1
                    }, 0, !1)
                }

                function toggleClasses(invalid) {
                    if (el.toggleClass("has-error", showValidationMessages && invalid), showSuccess) return el.toggleClass("has-success", showValidationMessages && !invalid)
                }
                var inputEl, inputName, inputNgEl, options, showSuccess, initCheck = !1,
                    showValidationMessages = !1;
                if (options = scope.$eval(attrs.showErrors) || {}, showSuccess = options.showSuccess || !1, inputEl = el[0].querySelector(".form-control[name]") || el[0].querySelector("[name]"), inputNgEl = angular.element(inputEl), inputName = $interpolate(inputNgEl.attr("name") || "")(scope), !inputName) throw new Error("show-errors element has no child input elements with a 'name' attribute class");
                scope.$watch(function() {
                    return formCtrl[inputName] && formCtrl[inputName].$invalid
                }, toggleClasses), scope.$on("show-errors-check-validity", checkValidity), scope.$on("show-errors-reset", reset)
            }
            if (attrs.showErrors.indexOf("skipFormGroupCheck") === -1 && !elem.hasClass("form-group") && !elem.hasClass("input-group")) throw new Error("show-errors element does not have the 'form-group' or 'input-group' class");
            return linkFn
        }
        var directive = {
            restrict: "A",
            require: "^form",
            compile: compile
        };
        return directive
    }
    angular.module("core").directive("showErrors", showErrors), showErrors.$inject = ["$timeout", "$interpolate"]
}();
! function() {
    "use strict";

    function menuService() {
        function addMenu(menuId, options) {
            return options = options || {}, service.menus[menuId] = {
                roles: options.roles || service.defaultRoles,
                items: options.items || [],
                shouldRender: shouldRender
            }, service.menus[menuId]
        }

        function addMenuItem(menuId, options) {
            if (options = options || {}, service.validateMenuExistence(menuId), service.menus[menuId].items.push({
                    title: options.title || "",
                    state: options.state || "",
                    type: options.type || "item",
                    class: options.class,
                    roles: null === options.roles || "undefined" == typeof options.roles ? service.defaultRoles : options.roles,
                    position: options.position || 0,
                    items: [],
                    shouldRender: shouldRender
                }), options.items)
                for (var i in options.items) options.items.hasOwnProperty(i) && service.addSubMenuItem(menuId, options.state, options.items[i]);
            return service.menus[menuId]
        }

        function addSubMenuItem(menuId, parentItemState, options) {
            options = options || {}, service.validateMenuExistence(menuId);
            for (var itemIndex in service.menus[menuId].items) service.menus[menuId].items[itemIndex].state === parentItemState && service.menus[menuId].items[itemIndex].items.push({
                title: options.title || "",
                state: options.state || "",
                params: options.params || {},
                roles: null === options.roles || "undefined" == typeof options.roles ? service.menus[menuId].items[itemIndex].roles : options.roles,
                position: options.position || 0,
                shouldRender: shouldRender
            });
            return service.menus[menuId]
        }

        function getMenu(menuId) {
            return service.validateMenuExistence(menuId), service.menus[menuId]
        }

        function init() {
            shouldRender = function(user) {
                if (this.roles.indexOf("*") !== -1) return !0;
                if (!user) return !1;
                for (var userRoleIndex in user.roles)
                    if (user.roles.hasOwnProperty(userRoleIndex))
                        for (var roleIndex in this.roles)
                            if (this.roles.hasOwnProperty(roleIndex) && this.roles[roleIndex] === user.roles[userRoleIndex]) return !0;
                return !1
            }, addMenu("topbar", {
                roles: ["*"]
            })
        }

        function removeMenu(menuId) {
            service.validateMenuExistence(menuId), delete service.menus[menuId]
        }

        function removeMenuItem(menuId, menuItemState) {
            service.validateMenuExistence(menuId);
            for (var itemIndex in service.menus[menuId].items) service.menus[menuId].items.hasOwnProperty(itemIndex) && service.menus[menuId].items[itemIndex].state === menuItemState && service.menus[menuId].items.splice(itemIndex, 1);
            return service.menus[menuId]
        }

        function removeSubMenuItem(menuId, submenuItemState) {
            service.validateMenuExistence(menuId);
            for (var itemIndex in service.menus[menuId].items)
                if (this.menus[menuId].items.hasOwnProperty(itemIndex))
                    for (var subitemIndex in service.menus[menuId].items[itemIndex].items) this.menus[menuId].items[itemIndex].items.hasOwnProperty(subitemIndex) && service.menus[menuId].items[itemIndex].items[subitemIndex].state === submenuItemState && service.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
            return service.menus[menuId]
        }

        function validateMenuExistence(menuId) {
            if (menuId && menuId.length) {
                if (service.menus[menuId]) return !0;
                throw new Error("Menu does not exist")
            }
            throw new Error("MenuId was not provided")
        }
        var shouldRender, service = {
            addMenu: addMenu,
            addMenuItem: addMenuItem,
            addSubMenuItem: addSubMenuItem,
            defaultRoles: ["user", "admin"],
            getMenu: getMenu,
            menus: {},
            removeMenu: removeMenu,
            removeMenuItem: removeMenuItem,
            removeSubMenuItem: removeSubMenuItem,
            validateMenuExistence: validateMenuExistence
        };
        return init(), service
    }
    angular.module("core").factory("menuService", menuService)
}();
! function() {
    "use strict";

    function Socket(Authentication, $state, $timeout) {
        function connect() {
            Authentication.user && (service.socket = io())
        }

        function emit(eventName, data) {
            service.socket && service.socket.emit(eventName, data)
        }

        function on(eventName, callback) {
            service.socket && service.socket.on(eventName, function(data) {
                $timeout(function() {
                    callback(data)
                })
            })
        }

        function removeListener(eventName) {
            service.socket && service.socket.removeListener(eventName)
        }
        var service = {
            connect: connect,
            emit: emit,
            on: on,
            removeListener: removeListener,
            socket: null
        };
        return connect(), service
    }
    angular.module("core").factory("Socket", Socket), Socket.$inject = ["Authentication", "$state", "$timeout"]
}();
! function() {
    "use strict";

    function menuConfig(menuService) {
        menuService.addSubMenuItem("topbar", "admin", {
            title: "Manage Users",
            state: "admin.users"
        })
    }
    angular.module("users.admin").run(menuConfig), menuConfig.$inject = ["menuService"]
}();
! function() {
    "use strict";

    function routeConfig($stateProvider) {
        function getUser($stateParams, AdminService) {
            return AdminService.get({
                userId: $stateParams.userId
            }).$promise
        }
        $stateProvider.state("admin.users", {
            url: "/users",
            templateUrl: "/modules/users/client/views/admin/list-users.client.view.html",
            controller: "UserListController",
            controllerAs: "vm",
            data: {
                pageTitle: "Users List"
            }
        }).state("admin.user", {
            url: "/users/:userId",
            templateUrl: "/modules/users/client/views/admin/view-user.client.view.html",
            controller: "UserController",
            controllerAs: "vm",
            resolve: {
                userResolve: getUser
            },
            data: {
                pageTitle: "Edit {{ userResolve.displayName }}"
            }
        }).state("admin.user-edit", {
            url: "/users/:userId/edit",
            templateUrl: "/modules/users/client/views/admin/edit-user.client.view.html",
            controller: "UserController",
            controllerAs: "vm",
            resolve: {
                userResolve: getUser
            },
            data: {
                pageTitle: "Edit User {{ userResolve.displayName }}"
            }
        }), getUser.$inject = ["$stateParams", "AdminService"]
    }
    angular.module("users.admin.routes").config(routeConfig), routeConfig.$inject = ["$stateProvider"]
}();
! function() {
    "use strict";

    function routeConfig($stateProvider) {
        $stateProvider.state("settings", {
            abstract: !0,
            url: "/settings",
            templateUrl: "/modules/users/client/views/settings/settings.client.view.html",
            controller: "SettingsController",
            controllerAs: "vm",
            data: {
                roles: ["user", "admin"]
            }
        }).state("settings.profile", {
            url: "/profile",
            templateUrl: "/modules/users/client/views/settings/edit-profile.client.view.html",
            controller: "EditProfileController",
            controllerAs: "vm",
            data: {
                pageTitle: "Settings"
            }
        }).state("settings.password", {
            url: "/password",
            templateUrl: "/modules/users/client/views/settings/change-password.client.view.html",
            controller: "ChangePasswordController",
            controllerAs: "vm",
            data: {
                pageTitle: "Settings password"
            }
        }).state("settings.accounts", {
            url: "/accounts",
            templateUrl: "/modules/users/client/views/settings/manage-social-accounts.client.view.html",
            controller: "SocialAccountsController",
            controllerAs: "vm",
            data: {
                pageTitle: "Settings accounts"
            }
        }).state("settings.picture", {
            url: "/picture",
            templateUrl: "/modules/users/client/views/settings/change-profile-picture.client.view.html",
            controller: "ChangeProfilePictureController",
            controllerAs: "vm",
            data: {
                pageTitle: "Settings picture"
            }
        }).state("authentication", {
            abstract: !0,
            url: "/authentication",
            templateUrl: "/modules/users/client/views/authentication/authentication.client.view.html",
            controller: "AuthenticationController",
            controllerAs: "vm"
        }).state("authentication.signup", {
            url: "/signup",
            templateUrl: "/modules/users/client/views/authentication/signup.client.view.html",
            controller: "AuthenticationController",
            controllerAs: "vm",
            data: {
                pageTitle: "Signup"
            }
        }).state("authentication.signin", {
            url: "/signin?err",
            templateUrl: "/modules/users/client/views/authentication/signin.client.view.html",
            controller: "AuthenticationController",
            controllerAs: "vm",
            data: {
                pageTitle: "Signin"
            }
        }).state("password", {
            abstract: !0,
            url: "/password",
            template: "<ui-view/>"
        }).state("password.forgot", {
            url: "/forgot",
            templateUrl: "/modules/users/client/views/password/forgot-password.client.view.html",
            controller: "PasswordController",
            controllerAs: "vm",
            data: {
                pageTitle: "Password forgot"
            }
        }).state("password.reset", {
            abstract: !0,
            url: "/reset",
            template: "<ui-view/>"
        }).state("password.reset.invalid", {
            url: "/invalid",
            templateUrl: "/modules/users/client/views/password/reset-password-invalid.client.view.html",
            data: {
                pageTitle: "Password reset invalid"
            }
        }).state("password.reset.success", {
            url: "/success",
            templateUrl: "/modules/users/client/views/password/reset-password-success.client.view.html",
            data: {
                pageTitle: "Password reset success"
            }
        }).state("password.reset.form", {
            url: "/:token",
            templateUrl: "/modules/users/client/views/password/reset-password.client.view.html",
            controller: "PasswordController",
            controllerAs: "vm",
            data: {
                pageTitle: "Password reset form"
            }
        })
    }
    angular.module("users.routes").config(routeConfig), routeConfig.$inject = ["$stateProvider"]
}();
! function() {
    "use strict";

    function AuthenticationController($scope, $state, UsersService, $location, $window, Authentication, PasswordValidator, Notification) {
        function signup(isValid) {
            return isValid ? void UsersService.userSignup(vm.credentials).then(onUserSignupSuccess).catch(onUserSignupError) : ($scope.$broadcast("show-errors-check-validity", "vm.userForm"), !1)
        }

        function signin(isValid) {
            return isValid ? void UsersService.userSignin(vm.credentials).then(onUserSigninSuccess).catch(onUserSigninError) : ($scope.$broadcast("show-errors-check-validity", "vm.userForm"), !1)
        }

        function callOauthProvider(url) {
            $state.previous && $state.previous.href && (url += "?redirect_to=" + encodeURIComponent($state.previous.href)), $window.location.href = url
        }

        function onUserSignupSuccess(response) {
            vm.authentication.user = response, Notification.success({
                message: '<i class="glyphicon glyphicon-ok"></i> Signup successful!'
            }), $window.location.href = "/main"
        }

        function onUserSignupError(response) {
            Notification.error({
                message: response.data.message,
                title: '<i class="glyphicon glyphicon-remove"></i> Signup Error!',
                delay: 6e3
            })
        }

        function onUserSigninSuccess(response) {
            vm.authentication.user = response, Notification.info({
                message: "Welcome " + response.firstName
            }), $window.location.href = "/main"
        }

        function onUserSigninError(response) {
            Notification.error({
                message: response.data.message,
                title: '<i class="glyphicon glyphicon-remove"></i> Signin Error!',
                delay: 6e3
            })
        }
        var vm = this;
        vm.authentication = Authentication, vm.getPopoverMsg = PasswordValidator.getPopoverMsg, vm.signup = signup, vm.signin = signin, vm.callOauthProvider = callOauthProvider, vm.usernameRegex = /^(?=[\w.-]+$)(?!.*[._-]{2})(?!\.)(?!.*\.$).{3,34}$/, $location.search().err && Notification.error({
            message: $location.search().err
        }), vm.authentication.user && $location.path("/")
    }
    angular.module("users").controller("AuthenticationController", AuthenticationController), AuthenticationController.$inject = ["$scope", "$state", "UsersService", "$location", "$window", "Authentication", "PasswordValidator", "Notification"]
}();
! function() {
    "use strict";

    function PasswordController($scope, $stateParams, UsersService, $location, Authentication, PasswordValidator, Notification) {
        function askForPasswordReset(isValid) {
            return isValid ? void UsersService.requestPasswordReset(vm.credentials).then(onRequestPasswordResetSuccess).catch(onRequestPasswordResetError) : ($scope.$broadcast("show-errors-check-validity", "vm.forgotPasswordForm"), !1)
        }

        function resetUserPassword(isValid) {
            return isValid ? void UsersService.resetPassword($stateParams.token, vm.passwordDetails).then(onResetPasswordSuccess).catch(onResetPasswordError) : ($scope.$broadcast("show-errors-check-validity", "vm.resetPasswordForm"), !1)
        }

        function onRequestPasswordResetSuccess(response) {
            vm.credentials = null, Notification.success({
                message: response.message,
                title: '<i class="glyphicon glyphicon-ok"></i> Password reset email sent successfully!'
            })
        }

        function onRequestPasswordResetError(response) {
            vm.credentials = null, Notification.error({
                message: response.data.message,
                title: '<i class="glyphicon glyphicon-remove"></i> Failed to send password reset email!',
                delay: 4e3
            })
        }

        function onResetPasswordSuccess(response) {
            vm.passwordDetails = null, Authentication.user = response, Notification.success({
                message: '<i class="glyphicon glyphicon-ok"></i> Password reset successful!'
            }), $location.path("/password/reset/success")
        }

        function onResetPasswordError(response) {
            Notification.error({
                message: response.data.message,
                title: '<i class="glyphicon glyphicon-remove"></i> Password reset failed!',
                delay: 4e3
            })
        }
        var vm = this;
        vm.resetUserPassword = resetUserPassword, vm.askForPasswordReset = askForPasswordReset, vm.authentication = Authentication, vm.getPopoverMsg = PasswordValidator.getPopoverMsg, vm.authentication.user && $location.path("/")
    }
    angular.module("users").controller("PasswordController", PasswordController), PasswordController.$inject = ["$scope", "$stateParams", "UsersService", "$location", "Authentication", "PasswordValidator", "Notification"]
}();
! function() {
    "use strict";

    function passwordValidator(PasswordValidator) {
        function link(scope, element, attrs, ngModel) {
            ngModel.$validators.requirements = function(password) {
                var status = !0;
                if (password) {
                    var result = PasswordValidator.getResult(password),
                        requirementsIdx = 0,
                        requirementsMeter = [{
                            color: "danger",
                            progress: "20"
                        }, {
                            color: "warning",
                            progress: "40"
                        }, {
                            color: "info",
                            progress: "60"
                        }, {
                            color: "primary",
                            progress: "80"
                        }, {
                            color: "success",
                            progress: "100"
                        }];
                    result.errors.length < requirementsMeter.length && (requirementsIdx = requirementsMeter.length - result.errors.length - 1), scope.requirementsColor = requirementsMeter[requirementsIdx].color, scope.requirementsProgress = requirementsMeter[requirementsIdx].progress, result.errors.length ? (scope.getPopoverMsg = PasswordValidator.getPopoverMsg(), scope.passwordErrors = result.errors, status = !1) : (scope.getPopoverMsg = "", scope.passwordErrors = [], status = !0)
                }
                return status
            }
        }
        var directive = {
            require: "ngModel",
            link: link
        };
        return directive
    }
    angular.module("users").directive("passwordValidator", passwordValidator), passwordValidator.$inject = ["PasswordValidator"]
}();
! function() {
    "use strict";

    function passwordVerify() {
        function link(scope, element, attrs, ngModel) {
            scope.$watch(function() {
                var combined;
                return (scope.passwordVerify || ngModel) && (combined = scope.passwordVerify + "_" + ngModel), combined
            }, function(value) {
                value && (ngModel.$validators.passwordVerify = function(password) {
                    var origin = scope.passwordVerify;
                    return origin === password
                })
            })
        }
        var directive = {
            require: "ngModel",
            scope: {
                passwordVerify: "="
            },
            link: link
        };
        return directive
    }
    angular.module("users").directive("passwordVerify", passwordVerify)
}();
! function() {
    "use strict";

    function lowercase() {
        function link(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(input) {
                return input ? input.toLowerCase() : ""
            }), element.css("text-transform", "lowercase")
        }
        var directive = {
            require: "ngModel",
            link: link
        };
        return directive
    }
    angular.module("users").directive("lowercase", lowercase)
}();
! function() {
    "use strict";

    function Authentication($window) {
        var auth = {
            user: $window.user
        };
        return auth
    }
    angular.module("users.services").factory("Authentication", Authentication), Authentication.$inject = ["$window"]
}();
! function() {
    "use strict";

    function PasswordValidator($window) {
        function getResult(password) {
            var result = owaspPasswordStrengthTest.test(password);
            return result
        }

        function getPopoverMsg() {
            var popoverMsg = "Please enter a passphrase or password with " + owaspPasswordStrengthTest.configs.minLength + " or more characters, numbers, lowercase, uppercase, and special characters.";
            return popoverMsg
        }
        var owaspPasswordStrengthTest = $window.owaspPasswordStrengthTest,
            service = {
                getResult: getResult,
                getPopoverMsg: getPopoverMsg
            };
        return service
    }
    angular.module("users.services").factory("PasswordValidator", PasswordValidator), PasswordValidator.$inject = ["$window"]
}();
! function() {
    "use strict";

    function UsersService($resource) {
        var Users = $resource("/api/users", {}, {
            update: {
                method: "PUT"
            },
            updatePassword: {
                method: "POST",
                url: "/api/users/password"
            },
            deleteProvider: {
                method: "DELETE",
                url: "/api/users/accounts",
                params: {
                    provider: "@provider"
                }
            },
            sendPasswordResetToken: {
                method: "POST",
                url: "/api/auth/forgot"
            },
            resetPasswordWithToken: {
                method: "POST",
                url: "/api/auth/reset/:token"
            },
            signup: {
                method: "POST",
                url: "/api/auth/signup"
            },
            signin: {
                method: "POST",
                url: "/api/auth/signin"
            }
        });
        return angular.extend(Users, {
            changePassword: function(passwordDetails) {
                return this.updatePassword(passwordDetails).$promise
            },
            removeSocialAccount: function(provider) {
                return this.deleteProvider({
                    provider: provider
                }).$promise
            },
            requestPasswordReset: function(credentials) {
                return this.sendPasswordResetToken(credentials).$promise
            },
            resetPassword: function(token, passwordDetails) {
                return this.resetPasswordWithToken({
                    token: token
                }, passwordDetails).$promise
            },
            userSignup: function(credentials) {
                return this.signup(credentials).$promise
            },
            userSignin: function(credentials) {
                return this.signin(credentials).$promise
            }
        }), Users
    }

    function AdminService($resource) {
        return $resource("/api/users/:userId", {
            userId: "@_id"
        }, {
            update: {
                method: "PUT"
            }
        })
    }
    angular.module("users.services").factory("UsersService", UsersService), UsersService.$inject = ["$resource"], angular.module("users.admin.services").factory("AdminService", AdminService), AdminService.$inject = ["$resource"]
}();
! function() {
    "use strict";

    function ArticlesAdminController($scope, $state, $window, article, Authentication, Notification) {
        function remove() {
            $window.confirm("Are you sure you want to delete?") && vm.article.$remove(function() {
                $state.go("admin.articles.list"), Notification.success({
                    message: '<i class="glyphicon glyphicon-ok"></i> Article deleted successfully!'
                })
            })
        }

        function save(isValid) {
            function successCallback(res) {
                $state.go("admin.articles.list"), Notification.success({
                    message: '<i class="glyphicon glyphicon-ok"></i> Article saved successfully!'
                })
            }

            function errorCallback(res) {
                Notification.error({
                    message: res.data.message,
                    title: '<i class="glyphicon glyphicon-remove"></i> Article save error!'
                })
            }
            return isValid ? void vm.article.createOrUpdate().then(successCallback).catch(errorCallback) : ($scope.$broadcast("show-errors-check-validity", "vm.form.articleForm"), !1)
        }
        var vm = this;
        vm.article = article, vm.authentication = Authentication, vm.form = {}, vm.remove = remove, vm.save = save
    }
    angular.module("articles.admin").controller("ArticlesAdminController", ArticlesAdminController), ArticlesAdminController.$inject = ["$scope", "$state", "$window", "articleResolve", "Authentication", "Notification"]
}();
! function() {
    "use strict";

    function ArticlesAdminListController(ArticlesService) {
        var vm = this;
        vm.articles = ArticlesService.query()
    }
    angular.module("articles.admin").controller("ArticlesAdminListController", ArticlesAdminListController), ArticlesAdminListController.$inject = ["ArticlesService"]
}();
! function() {
    "use strict";

    function authInterceptor($q, $injector, Authentication) {
        function responseError(rejection) {
            if (!rejection.config.ignoreAuthModule) switch (rejection.status) {
                case 400:
                    $injector.get("$state").go("bad-request", {
                        message: rejection.data.message
                    });
                    break;
                case 401:
                    Authentication.user = null, $injector.get("$state").transitionTo("authentication.signin");
                    break;
                case 403:
                    $injector.get("$state").transitionTo("forbidden");
                    break;
                case 404:
                    $injector.get("$state").go("not-found", {
                        message: rejection.data.message
                    });
                    break;
                case -1:
                    var Notification = $injector.get("Notification");
                    Notification.error({
                        message: "No response received from server. Please try again later.",
                        title: "Error processing request!",
                        delay: 5e3
                    })
            }
            return $q.reject(rejection)
        }
        var service = {
            responseError: responseError
        };
        return service
    }
    angular.module("core").factory("authInterceptor", authInterceptor), authInterceptor.$inject = ["$q", "$injector", "Authentication"]
}();
! function() {
    "use strict";

    function UserListController($scope, $filter, AdminService) {
        function buildPager() {
            vm.pagedItems = [], vm.itemsPerPage = 15, vm.currentPage = 1, vm.figureOutItemsToDisplay()
        }

        function figureOutItemsToDisplay() {
            vm.filteredItems = $filter("filter")(vm.users, {
                $: vm.search
            }), vm.filterLength = vm.filteredItems.length;
            var begin = (vm.currentPage - 1) * vm.itemsPerPage,
                end = begin + vm.itemsPerPage;
            vm.pagedItems = vm.filteredItems.slice(begin, end)
        }

        function pageChanged() {
            vm.figureOutItemsToDisplay()
        }
        var vm = this;
        vm.buildPager = buildPager, vm.figureOutItemsToDisplay = figureOutItemsToDisplay, vm.pageChanged = pageChanged, AdminService.query(function(data) {
            vm.users = data, vm.buildPager()
        })
    }
    angular.module("users.admin").controller("UserListController", UserListController), UserListController.$inject = ["$scope", "$filter", "AdminService"]
}();
! function() {
    "use strict";

    function UserController($scope, $state, $window, Authentication, user, Notification) {
        function remove(user) {
            $window.confirm("Are you sure you want to delete this user?") && (user ? (user.$remove(), vm.users.splice(vm.users.indexOf(user), 1), Notification.success("User deleted successfully!")) : vm.user.$remove(function() {
                $state.go("admin.users"), Notification.success({
                    message: '<i class="glyphicon glyphicon-ok"></i> User deleted successfully!'
                })
            }))
        }

        function update(isValid) {
            if (!isValid) return $scope.$broadcast("show-errors-check-validity", "vm.userForm"), !1;
            var user = vm.user;
            user.$update(function() {
                $state.go("admin.user", {
                    userId: user._id
                }), Notification.success({
                    message: '<i class="glyphicon glyphicon-ok"></i> User saved successfully!'
                })
            }, function(errorResponse) {
                Notification.error({
                    message: errorResponse.data.message,
                    title: '<i class="glyphicon glyphicon-remove"></i> User update error!'
                })
            })
        }

        function isContextUserSelf() {
            return vm.user.username === vm.authentication.user.username
        }
        var vm = this;
        vm.authentication = Authentication, vm.user = user, vm.remove = remove, vm.update = update, vm.isContextUserSelf = isContextUserSelf
    }
    angular.module("users.admin").controller("UserController", UserController), UserController.$inject = ["$scope", "$state", "$window", "Authentication", "userResolve", "Notification"]
}();
! function() {
    "use strict";

    function ChangePasswordController($scope, $http, Authentication, UsersService, PasswordValidator, Notification) {
        function changeUserPassword(isValid) {
            return isValid ? void UsersService.changePassword(vm.passwordDetails).then(onChangePasswordSuccess).catch(onChangePasswordError) : ($scope.$broadcast("show-errors-check-validity", "vm.passwordForm"), !1)
        }

        function onChangePasswordSuccess(response) {
            Notification.success({
                message: '<i class="glyphicon glyphicon-ok"></i> Password Changed Successfully'
            }), vm.passwordDetails = null
        }

        function onChangePasswordError(response) {
            Notification.error({
                message: response.data.message,
                title: '<i class="glyphicon glyphicon-remove"></i> Password change failed!'
            })
        }
        var vm = this;
        vm.user = Authentication.user, vm.changeUserPassword = changeUserPassword, vm.getPopoverMsg = PasswordValidator.getPopoverMsg
    }
    angular.module("users").controller("ChangePasswordController", ChangePasswordController), ChangePasswordController.$inject = ["$scope", "$http", "Authentication", "UsersService", "PasswordValidator", "Notification"]
}();
! function() {
    "use strict";

    function ChangeProfilePictureController($timeout, Authentication, Upload, Notification) {
        function onSuccessItem(response) {
            Notification.success({
                message: '<i class="glyphicon glyphicon-ok"></i> Successfully changed profile picture'
            }), vm.user = Authentication.user = response, vm.fileSelected = !1, vm.progress = 0
        }

        function onErrorItem(response) {
            vm.fileSelected = !1, vm.progress = 0, Notification.error({
                message: response.message,
                title: '<i class="glyphicon glyphicon-remove"></i> Failed to change profile picture'
            })
        }
        var vm = this;
        vm.user = Authentication.user, vm.progress = 0, vm.upload = function(dataUrl) {
            Upload.upload({
                url: "/api/users/picture",
                data: {
                    newProfilePicture: dataUrl
                }
            }).then(function(response) {
                $timeout(function() {
                    onSuccessItem(response.data)
                })
            }, function(response) {
                response.status > 0 && onErrorItem(response.data)
            }, function(evt) {
                vm.progress = parseInt(100 * evt.loaded / evt.total, 10)
            })
        }
    }
    angular.module("users").controller("ChangeProfilePictureController", ChangeProfilePictureController), ChangeProfilePictureController.$inject = ["$timeout", "Authentication", "Upload", "Notification"]
}();
! function() {
    "use strict";

    function EditProfileController($scope, $http, $location, UsersService, Authentication, Notification) {
        function updateUserProfile(isValid) {
            if (!isValid) return $scope.$broadcast("show-errors-check-validity", "vm.userForm"), !1;
            var user = new UsersService(vm.user);
            user.$update(function(response) {
                $scope.$broadcast("show-errors-reset", "vm.userForm"), Notification.success({
                    message: '<i class="glyphicon glyphicon-ok"></i> Edit profile successful!'
                }), Authentication.user = response
            }, function(response) {
                Notification.error({
                    message: response.data.message,
                    title: '<i class="glyphicon glyphicon-remove"></i> Edit profile failed!'
                })
            })
        }
        var vm = this;
        vm.user = Authentication.user, vm.updateUserProfile = updateUserProfile
    }
    angular.module("users").controller("EditProfileController", EditProfileController), EditProfileController.$inject = ["$scope", "$http", "$location", "UsersService", "Authentication", "Notification"]
}();
! function() {
    "use strict";

    function SocialAccountsController($state, $window, UsersService, Authentication, Notification) {
        function hasConnectedAdditionalSocialAccounts() {
            return vm.user.additionalProvidersData && Object.keys(vm.user.additionalProvidersData).length
        }

        function isConnectedSocialAccount(provider) {
            return vm.user.provider === provider || vm.user.additionalProvidersData && vm.user.additionalProvidersData[provider]
        }

        function removeUserSocialAccount(provider) {
            UsersService.removeSocialAccount(provider).then(onRemoveSocialAccountSuccess).catch(onRemoveSocialAccountError)
        }

        function onRemoveSocialAccountSuccess(response) {
            Notification.success({
                message: '<i class="glyphicon glyphicon-ok"></i> Removed successfully!'
            }), vm.user = Authentication.user = response
        }

        function onRemoveSocialAccountError(response) {
            Notification.error({
                message: response.message,
                title: '<i class="glyphicon glyphicon-remove"></i> Remove failed!'
            })
        }

        function callOauthProvider(url) {
            url += "?redirect_to=" + encodeURIComponent($state.$current.url.prefix), $window.location.href = url
        }
        var vm = this;
        vm.user = Authentication.user, vm.hasConnectedAdditionalSocialAccounts = hasConnectedAdditionalSocialAccounts, vm.isConnectedSocialAccount = isConnectedSocialAccount, vm.removeUserSocialAccount = removeUserSocialAccount, vm.callOauthProvider = callOauthProvider
    }
    angular.module("users").controller("SocialAccountsController", SocialAccountsController), SocialAccountsController.$inject = ["$state", "$window", "UsersService", "Authentication", "Notification"]
}();
! function() {
    "use strict";

    function SettingsController($scope, Authentication) {
        var vm = this;
        vm.user = Authentication.user
    }
    angular.module("users").controller("SettingsController", SettingsController), SettingsController.$inject = ["$scope", "Authentication"]
}();
! function() {
    "use strict";

    function templates($templateCache) {
        $templateCache.put("modules/articles/client/views/list-articles.client.view.html", '<section>\n  <div class="page-header">\n    <h1>Articles</h1>\n  </div>\n  <div class="list-group">\n    <a ng-repeat="article in vm.articles" ui-sref="articles.view({ articleId: article._id })" class="list-group-item">\n      <small class="list-group-item-text">\n        Posted on\n        <span ng-bind="article.created | date:\'mediumDate\'"></span>\n        by\n        <span ng-if="article.user" ng-bind="article.user.displayName"></span>\n        <span ng-if="!article.user">Deleted User</span>\n      </small>\n      <h4 class="list-group-item-heading" ng-bind="article.title"></h4>\n      <p class="list-group-item-text" ng-bind="article.content"></p>\n    </a>\n  </div>\n</section>\n'), $templateCache.put("modules/articles/client/views/view-article.client.view.html", '<section>\n  <div class="page-header">\n    <h1 ng-bind="vm.article.title"></h1>\n  </div>\n  <small>\n    <em class="text-muted">\n      Posted on\n      <span ng-bind="vm.article.created | date:\'mediumDate\'"></span>\n      by\n      <span ng-if="vm.article.user" ng-bind="vm.article.user.displayName"></span>\n      <span ng-if="!vm.article.user">Deleted User</span>\n    </em>\n  </small>\n  <p class="lead" ng-bind="vm.article.content"></p>\n</section>\n'), $templateCache.put("modules/chat/client/views/bot.client.view.html", '<!-- The chat view -->\n<div ng-controller="BotController" ng-init=\'load()\' style="min-height:100vh;">\n  <div>\n    <div ng-if="debug.show">\n      <div class="row">\n        <md-switch ng-model="debug.switch" aria-label="Debug Switch">\n          Debug: {{ debug.switch}}\n        </md-switch>\n        <md-switch ng-model="debug.animations" aria-label="Debug Switch">\n          Animations: {{ debug.animations}}\n        </md-switch>\n      </div>\n    </div>\n    <div ng-show="loaded">\n\n      <div class="row">\n        <!--<div class="col-sm-10 col-sm-offset-1 col-xs-12 chat"  style="overflow: auto; outline: none;" >-->\n        <div class="" style="overflow-y: auto;overflow-x: hidden; outline: none;  ">\n\n\n          <div class="col-inside-lg decor-default">\n            <div class="chat-body" id="messageslist">\n\n              <div ng-repeat="item in messages">\n\n                <div ng-if="item.status!=\'hidden\' && item.who==\'bot\'" class="answer left" id={{\'item_\'+$index}}>\n\n                  <div class="text">\n                    <div ng-if="item.status==\'blinking\'">\n                      <div class="typing-indicator bubble">\n                        <span></span>\n                        <span></span>\n                        <span></span>\n                      </div>\n                    </div>\n\n                    <div ng-if="item.status==\'shown\'">\n\n                      <span ng-if="item.type==\'text\'" ng-bind-html="item.message|twemoji "></span>\n\n                      <div ng-if="item.type==\'quote\'">\n                      <ang-accordion one-at-a-time="true" close-icon-class="fa fa-chevron-right"\n                                     open-icon-class="fa fa-chevron-down">\n\n                        <collapsible-item class="h4"\n                                          ng-repeat="pribot_answer in item.pribot_answers track by $index"\n                                          item-title={{getAnswerTitle($index)}}\n                                          initially-open="isAnswerOpen($index)">\n\n\n                          <blockquote ng-bind-html="pribot_answer"></blockquote>\n                        </collapsible-item>\n                      </ang-accordion>\n\n                      </div>\n\n                      <div ng-if="item.type==\'image\'" class="clearfix" style="height:100%;max-width:400px">\n                        <div>\n                          <img class="img-responsive" ng-src={{item.src}} alt="image">\n                        </div>\n                      </div>\n                      <div ng-if="item.type==\'video\'" class="clearfix" style="height:100%">\n                        <div ng-bind-html="item.src">\n                        </div>\n                        <!--<div style="height:50px" class="pretty-embed" data-pe-videoid="toD1xf3groU" data-pe-fitvids="true"></div>-->\n                      </div>\n                      <div ng-if="item.type==\'article\'" class="clearfix" style="height:100%">\n                        <div ng-bind-html="item.src">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="time"><br></div>\n                </div>\n\n                <div class="answer right" ng-if="item.who!=\'bot\'">\n                  <div class="text" ng-bind-html=item.message|makereplacements|twemoji>\n                  </div>\n                  <div class="time"><br></div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n\n          <div ng-show="!end" ng-if="showTrigger">\n\n            <div ng-if="triggerType==\'question\'" ng-init="setFocus()">\n            <div class="row">\n              <div class="col-sm-10 col-sm-offset-1 col-xs-12">\n\n\n                <md-content style="background-color: white" layout-padding>\n                  <form name="userForm" ng-submit="send(\'question\')">\n\n                    <div layout-gt-sm="row">\n                      <md-autocomplete md-input-id="company_input" flex required\n                                       md-input-name="autocompleteField"\n                                       md-input-minlength="2"\n                                       md-input-maxlength="18"\n                                       md-no-cache="noCache"\n                                       md-selected-item="selectedItem"\n                                       md-search-text="message.content"\n                                       md-items="item in querySearch(message.content)"\n                                       md-item-text="item.display"\n                                       md-require-match\n                                       md-floating-label="Question"\n                                       md-min-length=0\n                                       md-select-on-focus md-autofocus>\n                        <md-item-template>\n                          <span md-highlight-text="message.content">{{item.display}}</span>\n                        </md-item-template>\n                        <md-not-found>\n                          Aucune question trouvÃ©e\n                        </md-not-found>\n                        <div ng-messages="searchForm.autocompleteField.$error"\n                             ng-if="searchForm.autocompleteField.$touched">\n                          <div ng-message="required">Vous devez sÃ©lectionner une question</div>\n                          <div ng-message="md-require-match">Veuillez sÃ©lectionner une question existante</div>\n                          <div ng-message="minlength">Votre question n\'est pas assez .</div>\n                          <div ng-message="maxlength">Votre question est trop longue</div>\n                        </div>\n                      </md-autocomplete>\n\n\n                    </div>\n                  </form>\n                </md-content>\n              </div>\n            </div>\n\n            <div class="row">\n              <div class="col-sm-10 col-sm-offset-1 col-xs-12 ">\n\n                <div style=" text-align:center">\n\n                  <md-button style="" ng-click="send(\'question\')" aria-label="Choose option"\n                             class="md-raised md-primary  triggerButtons ">\n                             Voila!\n                  </md-button>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n            <!-- <div ng-if="triggerType==\'question\'">\n              <div class="row">\n                <div class="col-sm-10 col-sm-offset-1 col-xs-12">\n\n                  <md-content style="background-color: white">\n                    <form name="userForm" ng-submit="send(\'question\')">\n\n                      <div layout-gt-sm="row">\n                        <md-input-container class="md-block" flex-gt-sm>\n                          <label>Question</label>\n                          <input focus-if name="message" ng-model="message.content"\n                                 required minlength="4" maxlength="1000"/>\n                          <div ng-messages="userForm.message.$error">\n                            <div ng-message-exp="[\'required\', \'minlength\', \'maxlength\', \'pattern\']">\n                              Your question should have enough passengers to fly.\n                            </div>\n                          </div>\n                        </md-input-container>\n                      </div>\n                    </form>\n                  </md-content>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-sm-10 col-sm-offset-1 col-xs-12 ">\n\n                  <div style=" text-align:center">\n                    <md-button ng-click="send(\'question\')" aria-label="Choose option"\n                               class="md-raised md-primary  triggerButtons ">\n                      Let fly!\n                    </md-button>\n                  </div>\n                </div>\n              </div>\n\n            </div> -->\n\n\n            <div ng-if="triggerType==\'company\'">\n              <div class="row">\n                <div class="col-sm-10 col-sm-offset-1 col-xs-12">\n\n\n                  <md-content style="background-color: white">\n                    <form name="userForm" ng-submit="send(\'company\')">\n\n                      <div layout-gt-sm="row">\n                        <md-input-container class="md-block" flex-gt-sm>\n                          <label>Company</label>\n                          <input focus-if name="company" ng-model="message.content"\n                                 required minlength="3" maxlength="100"/>\n                          <div ng-messages="userForm.company.$error">\n                            <!--ng-hide="showHints">-->\n                            <div ng-message-exp="[\'required\', \'minlength\', \'maxlength\', \'pattern\']">\n                              Your company should look like a company!\n                            </div>\n                          </div>\n                        </md-input-container>\n                      </div>\n                    </form>\n                  </md-content>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-sm-10 col-sm-offset-1 col-xs-12 ">\n\n                  <div style=" text-align:center">\n                    <md-button ng-click="send(\'company\')" aria-label="Choose option"\n                               class="md-raised md-primary  triggerButtons ">\n                      Voila!\n                    </md-button>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n            <div class="row" ng-if="triggers.length>1 && triggers.length<5">\n              <div class="col-sm-10 col-sm-offset-1 col-xs-12 ">\n\n                <div style=" text-align:center">\n                <span ng-repeat="itemTrigger in triggers">\n                  <md-button ng-click="send(\'trigger\',itemTrigger[0])" aria-label="Choose option"\n                             class="md-raised md-primary  triggerButtons "\n                             ng-bind-html=itemTrigger[0]|capitalize|makereplacements|twemoji>\n                  </md-button>\n                </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n\n\n      </div>\n\n    </div>\n    <div style="min-height:30vh">\n\n    </div>\n\n  </div>\n</div>\n'), $templateCache.put("modules/core/client/views/400.client.view.html", '<div class="page-header">\n  <h1>Bad Request</h1>\n</div>\n<div class="alert alert-danger" role="alert">\n  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>\n  <span class="sr-only">Error:</span>\n  <span ng-if="vm.errorMessage" ng-bind="vm.errorMessage"></span>\n  <span ng-if="!vm.errorMessage">You made a bad request</span>\n</div>\n'), $templateCache.put("modules/core/client/views/403.client.view.html", '<div class="page-header">\n  <h1>Forbidden</h1>\n</div>\n<div class="alert alert-danger" role="alert">\n  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>\n  <span class="sr-only">Error:</span>\n  You are not authorized to access this resource\n</div>\n'), $templateCache.put("modules/core/client/views/404.client.view.html", '<div class="page-header">\n  <h1>Page Not Found</h1>\n</div>\n<div class="alert alert-danger" role="alert">\n  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>\n  <span ng-if="vm.errorMessage" ng-bind="vm.errorMessage"></span>\n  <span ng-if="!vm.errorMessage">Page Not Found</span>\n</div>\n'), $templateCache.put("modules/core/client/views/header.client.view.html", '<div class="container" ng-controller="HeaderController as vm">\n  <div class="navbar-header">\n    <button class="navbar-toggle" type="button" ng-click="vm.isCollapsed = !vm.isCollapsed">\n      <span class="sr-only">Toggle navigation</span>\n      <span class="icon-bar"></span>\n      <span class="icon-bar"></span>\n      <span class="icon-bar"></span>\n    </button>\n    <a ui-sref="home" class="navbar-brand">MEAN.JS</a>\n  </div>\n  <nav class="navbar-collapse" uib-collapse="!vm.isCollapsed" role="navigation">\n    <ul class="nav navbar-nav" ng-if="vm.menu.shouldRender(vm.authentication.user);">\n      <li ng-repeat="item in vm.menu.items | orderBy: \'position\'" ng-if="item.shouldRender(vm.authentication.user);" ng-switch="item.type" ng-class="{ dropdown: item.type === \'dropdown\' }" ui-sref-active="active" class="{{item.class}}" uib-dropdown="item.type === \'dropdown\'">\n        <a ng-switch-when="dropdown" class="dropdown-toggle" uib-dropdown-toggle role="button">{{::item.title}}&nbsp;<span class="caret"></span></a>\n        <ul ng-switch-when="dropdown" class="dropdown-menu">\n          <li ng-repeat="subitem in item.items | orderBy: \'position\'" ng-if="subitem.shouldRender(vm.authentication.user);">\n            <a ui-sref="{{subitem.state}}({{subitem.params}})" ng-bind="subitem.title"></a>\n          </li>\n        </ul>\n        <a ng-switch-default ui-sref="{{item.state}}" ng-bind="item.title"></a>\n      </li>\n    </ul>\n    <ul class="nav navbar-nav navbar-right" ng-hide="vm.authentication.user">\n      <li ui-sref-active="active">\n        <a ui-sref="authentication.signup">Sign Up</a>\n      </li>\n      <li class="divider-vertical"></li>\n      <li ui-sref-active="active">\n        <a ui-sref="authentication.signin">Sign In</a>\n      </li>\n    </ul>\n    <ul class="nav navbar-nav navbar-right" ng-show="vm.authentication.user">\n      <li class="dropdown" uib-dropdown>\n        <a class="dropdown-toggle user-header-dropdown-toggle" uib-dropdown-toggle role="button">\n          <img ng-src="/{{vm.authentication.user.profileImageURL}}" alt="{{vm.authentication.user.displayName}}" class="header-profile-image" />\n          <span ng-bind="vm.authentication.user.displayName"></span> <b class="caret"></b>\n        </a>\n        <ul class="dropdown-menu" role="menu">\n          <li ui-sref-active="active" ng-repeat="item in vm.accountMenu.items">\n            <a ui-sref="{{item.state}}" ng-bind="item.title"></a>\n          </li>\n          <li class="divider"></li>\n          <li>\n            <a href="/api/auth/signout" target="_self">Signout</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n</div>\n'), $templateCache.put("modules/core/client/views/home.client.view.html", '<section>\n  <div class="jumbotron text-center">\n    <div class="row">\n      <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">\n        <img alt="MEAN.JS" class="img-responsive text-center" src="/modules/core/client/img/brand/logo.png" />\n      </div>\n    </div>\n    <br>\n    <div class="row">\n      <p class="lead">\n        Open-Source Full-Stack Solution For MEAN Applications\n      </p>\n    </div>\n    <div class="row">\n      <p>\n        <a class="btn btn-primary btn-lg" href="http://meanjs.org" target="_blank">Learn more</a>\n      </p>\n    </div>\n  </div>\n  <div>\n    <h2>Congrats! You\'ve configured and run the sample application.</h2>\n    <p>MEAN.JS is a web application boilerplate, which means you should start changing everything :-)</p>\n    <p>This sample application tracks users and articles.</p>\n    <ul>\n      <li>\n        Click\n        <em>Sign Up</em> to get started.\n      </li>\n      <li>\n        Configure your app to work with your social accounts, by editing the\n        <em>/config/env/*.js</em> files.\n      </li>\n      <li>\n        Edit your users module.\n      </li>\n      <li>\n        Add new CRUD modules.\n      </li>\n      <li>\n        Have fun...\n      </li>\n    </ul>\n  </div>\n  <div class="row">\n    <div class="col-md-3">\n      <h2><strong>M</strong>ongoDB</h2>\n      <p><a target="_blank" href="http://mongodb.org/">MongoDB</a> is a NoSQL database. MongoDB\'s <a target="_blank" href="http://docs.mongodb.org/manual/">great manual</a> is the place to get started with NoSQL and MongoDB.</p>\n    </div>\n    <div class="col-md-3">\n      <h2><strong>E</strong>xpress</h2>\n      <p><a target="_blank" href="http://expressjs.com/"> Express</a> is a NodeJS server-side application web framework. Check out <a target="_blank" href="http://expressjs.com/4x/api.html">The ExpressJS API reference for more information</a> or <a target="_blank" href="http://stackoverflow.com/questions/8144214/learning-express-for-node-js">StackOverflow</a> for more info.</p>\n    </div>\n    <div class="col-md-3">\n      <h2><strong>A</strong>ngularJS</h2>\n      <p><a target="_blank" href="http://angularjs.org/">AngularJS</a> is client-side web application framework. The <a target="_blank" href="http://www.thinkster.io/">Thinkster Popular Guide</a> and <a target="_blank" href="https://egghead.io/">Egghead Videos</a> are great resources.</p>\n    </div>\n    <div class="col-md-3">\n      <h2><strong>N</strong>ode.js</h2>\n      <p><a target="_blank" href="http://nodejs.org/">Node.js</a> is a JavaScript run-time, popular for being a web server platform. Node\'s website and this <a target="_blank" href="http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js">stackOverflow thread</a> offer excellent starting points to get to grasps with node.</p>\n    </div>\n  </div>\n  <div class="well">\n    <h2>MEAN.JS Documentation</h2>\n    <p>\n      Once you\'re familiar with the foundation technology, check out the MEAN.JS Documentation:\n      <ul>\n        <li><a target="_blank" href="http://meanjs.org/docs.html">MEAN.JS Documentation</a>\n        </li>\n        <!-- <li><a target="_blank" href="http://meanjs.org/generator.html">Yeoman Generator</a>\n\t\t\t\t</li> -->\n        <li><a target="_blank" href="http://meanjs.org/modules.html">Modules</a>\n        </li>\n        <li><a target="_blank" href="http://meanjs.org/changelog.html">Changelog</a>\n        </li>\n        <li><a target="_blank" href="http://meanjs.org/community.html">Community</a>\n        </li>\n        <li><a target="_blank" href="http://blog.meanjs.org">Blog</a>\n        </li>\n      </ul>\n    </p>\n  </div>\n  <br>Enjoy &amp; Keep Us Updated,\n  <br>The MEAN.JS Team.\n</section>\n'), $templateCache.put("modules/core/client/views/material.header.client.view.html", '<div class="container" ng-controller="HeaderController as vm" >\n\n  <div class="navbar-header">\n\n     <md-button class="md-fab  md-raised" style="background-color: #dd356e;" ui-sref="grid-main" >\n        <a >\n          <md-icon  style="color:white;" md-svg-icon="/lib/material-design-icons/action/svg/design/ic_home_24px.svg"></md-icon>\n\n        </a>\n      </md-button>\n\n    <!--<a ui-sref="grid-main" class="navbar-brand">HOME</a>-->\n  </div>\n\n  <div class="nav navbar-nav navbar-right">\n     <md-button class="md-fab md-primary md-raised" aria-label="Sign in" ng-hide="vm.authentication.user"\n                 ui-sref="authentication.signin">\n        <md-icon md-svg-icon="img/icons/ic_person_24px.svg"></md-icon>\n      </md-button>\n\n      <md-button class="md-fab md-warn md-raised" aria-label="Sign out" ng-show="vm.authentication.user">\n        <a href="/api/auth/signout" target="_self">\n          <md-icon md-svg-icon="img/icons/ic_visibility_24px.svg"></md-icon>\n        </a>\n      </md-button>\n\n  </div>\n\n  <!--<md-toolbar>-->\n    <!--<div class="md-toolbar-tools">-->\n\n      <!--<md-button class="md-raised" aria-label="Home" ui-sref="grid-main">-->\n        <!--Home-->\n      <!--</md-button>-->\n\n      <!--&lt;!&ndash;<md-truncate style="position: absolute; left: 90px; right: 170px; top: 13px; bottom: 13px;"></md-truncate>&ndash;&gt;-->\n\n      <!--<span flex></span>-->\n      <!--&lt;!&ndash;<md-button class="md-raised" aria-label="Learn More">&ndash;&gt;-->\n      <!--&lt;!&ndash;Learn More&ndash;&gt;-->\n      <!--&lt;!&ndash;</md-button>&ndash;&gt;-->\n\n      <!--&lt;!&ndash;<a href="https://oyoty.com" target="_blank" style="display: inline">&ndash;&gt;-->\n      <!--&lt;!&ndash;<span>LSIR + oyoty.com&ndash;&gt;-->\n      <!--&lt;!&ndash;<img border="0" alt="Oyoty" src="/modules/grid/client/img/oyoty.png" width="50" height="50"></span>&ndash;&gt;-->\n      <!--&lt;!&ndash;</a>&ndash;&gt;-->\n\n      <!--<md-button class="md-fab md-primary md-raised md-mini" aria-label="Sign in" ng-hide="vm.authentication.user"-->\n                 <!--ui-sref="authentication.signin">-->\n        <!--<md-icon md-svg-icon="img/icons/ic_person_24px.svg"></md-icon>-->\n      <!--</md-button>-->\n\n      <!--<md-button class="md-fab md-warn md-raised md-mini" aria-label="Sign out" ng-show="vm.authentication.user">-->\n        <!--<a href="/api/auth/signout" target="_self">-->\n          <!--<md-icon md-svg-icon="img/icons/ic_visibility_24px.svg"></md-icon>-->\n        <!--</a>-->\n      <!--</md-button>-->\n\n      <!--&lt;!&ndash;<md-button class="md-fab md-mini" aria-label="Favorite" ng-click="submitHeart()">&ndash;&gt;-->\n      <!--&lt;!&ndash;<md-icon md-svg-icon="img/icons/favorite.svg"></md-icon>&ndash;&gt;-->\n      <!--&lt;!&ndash;</md-button>&ndash;&gt;-->\n\n\n    <!--</div>-->\n  <!--</md-toolbar>-->\n\n\n</div>\n'), $templateCache.put("modules/grid/client/views/emotion.client.view.html", '<div ng-controller="EmotionController" style="min-width:1200px">\n\n  <div layout="row">\n    <div style="justify-content: center;display: inherit; position:absolute; top:10px;z-index: 1000;left:45%"\n         flex="100">\n      <md-button ng-click="getRandomImage()" class="md-raised md-info  pull-right">\n        <span><img class="img-responsive" style="display: inline;height: 30px;" src="/modules/grid/client/img/dice.png">\n        Random Example</span>\n      </md-button>\n    </div>\n  </div>\n\n  <div ng-if="!allowInput" style="text-align: center;font-size: 22px;" class="ng-scope">\n    Click on the button above â†‘ to get Random Examples!\n  </div>\n\n  <!--row for the url entry-->\n  <div layout="row" ng-cloak>\n\n    <!--<div flex="10"></div>-->\n    <div flex="100" class="md-inline-form">\n\n      <div style="position: absolute;top:100px;left:48%;z-index:2000">\n        <div layout="row" layout-sm="column" layout-align="space-around" ng-show="dirty">\n          <double-bounce-spinner></double-bounce-spinner>\n        </div>\n      </div>\n\n      <md-content ng-show="allowInput" layout-padding class="whiteBkgnd" style="max-height:80px;overflow-y: hidden">\n        <div>\n          <form name="userForm">\n            <div layout="row">\n\n              <md-input-container flex="100" class="md-block ">\n                <label>Image URL</label>\n                <input ng-model="input.url">\n              </md-input-container>\n\n              <!--<div flex="2"></div>-->\n              <!--<div flex="13">-->\n                <!--<md-button ng-click="submitUrl()" class="md-raised md-primary  pull-right pink-button">Submit-->\n                <!--</md-button>-->\n              <!--</div>-->\n            </div>\n          </form>\n        </div>\n      </md-content>\n\n    </div>\n  </div>\n\n  <!--row for the image input field-->\n  <div layout="row">\n    <!--<div flex="10"></div>-->\n    <div flex="100" class="md-inline-form">\n\n\n      <md-content style="background-color: white">\n        <div>\n          <lf-ng-md-file-input ng-disabled="!allowInput" lf-api="addRemoteFilesApi" lf-files="files" lf-on-file-click="onFileClick"\n                               lf-on-file-remove="onFileRemove" preview\n                               lf-drag-and-drop-label="{{allowInput?\'Enter an image URL above or drop images here!\':\'...\'}}"\n                               drag></lf-ng-md-file-input>\n        </div>\n      </md-content>\n\n    </div>\n  </div>\n\n  <br>\n  <!--row for the text entry-->\n  <div id=\'text_container\' layout="row" ng-cloak class="md-inline-form">\n    <div flex="100">\n      <md-content layout-padding md-whiteframe="5" style="overflow-y: hidden" class="whiteBkgnd">\n        <br>\n\n        <form name="forms.textForm">\n          <md-input-container class="md-block" style="margin:10px">\n            <textarea id="text" name="text" autofocus\n                      ng-model="input.text" md-minlength="4" rows="1"\n                      ng-disabled="!allowInput"\n                      md-select-on-focus style="font-size:20px;color:black"></textarea>\n            <div ng-if="allowInput" class="hint">Type the text here.</div>\n          </md-input-container>\n\n\n        </form>\n        <br>\n        <br>\n\n        <div ng-show="resultsPending">\n          <div layout="row" layout-sm="column" layout-align="space-around" >\n            <rotating-plane-spinner></rotating-plane-spinner>\n\n            <!--<double-bounce-spinner></double-bounce-spinner>-->\n          </div>\n          <div style="text-align:center">\n            <h2> Crunching the data...</h2>\n          </div>\n        </div>\n\n        <div ng-style="{opacity : (resultsPending && \'0\')|| (resultsAvailable && \'1\') || \'0\'}">\n          <div layout="row">\n            <div flex="33" ng-repeat="model in models track by $index">\n\n              <div style="text-align: center" style="min-height:50px">\n                <img class="img-responsive" ng-style="{opacity: getOpacity(model)} "\n                     style="display: inline;height: 50px;" ng-src="{{getEmoji(model)}}">\n                <h4 style="height:10px;" ng-style="{opacity: getOpacity(model)}">\n                  {{capitalizeFirstLetter(predictions[model].name)}} </h4>\n              </div>\n              <br>\n              <div id="container">\n                <highchart config="chartConfig[model]"></highchart>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n\n      </md-content>\n\n    </div>\n  </div>\n\n</div>\n\n'), $templateCache.put("modules/grid/client/views/filter-image.client.view.html", '<div ng-controller="FilterImageController" ng-init=\'load()\' style="min-width:1200px">\n\n  <div layout="row">\n    <div style="justify-content: center;display: inherit; position:absolute; top:10px;z-index: 1000;left:45%"\n         flex="100">\n      <md-button ng-click="takeTour()" class="md-raised md-info  pull-right">\n        <span> <i  class="fa fa-info-circle fa-2x" style=" vertical-align: middle;" aria-hidden="true"></i>\n        Take Tour</span>\n      </md-button>\n    </div>\n  </div>\n\n  <div  layout>\n\n    <div  flex="70" id="slider">\n      <md-slider flex md-discrete ng-model="slider" step="5" min="0" max="100" aria-label="rating" class="md-active">\n      </md-slider>\n    </div>\n    <div flex="10" style="text-align:center">\n      <p style="font-size:30px" ng-bind-html="classifierEmoji[input.selectedClassifier]|twemoji"></p>\n    </div>\n    <div id="classifier" flex="20" class="pull-left" layout>\n      <md-input-container style="margin:0">\n        <label>Classifier</label>\n        <md-select ng-model="input.selectedClassifier">\n          <md-option><em>None</em></md-option>\n          <md-option ng-repeat="classifier in classifiers" ng-selected="$index === 0" value="{{classifier}}">\n            {{classifier}}\n          </md-option>\n        </md-select>\n      </md-input-container>\n    </div>\n  </div>\n  <br>\n  <div style="text-align: center;" class="h4">\n    Showing {{filtered.length}} out of {{imageList.length}} based on likelihood of being classified as <span\n    ng-bind-html="displayedClassifierName[input.selectedClassifier]|twemoji" style="color:orangered"> </span>\n  </div>\n  <br>\n  <div id="results">\n    <br>\n    <!--<md-toolbar class=" md-hue-1" id="toaster" style="align-items:center">-->\n    <!--<h3 >Filtered Images</h3>-->\n    <!--</md-toolbar>-->\n    <!--<br>-->\n\n    <md-grid-list\n      md-cols-xs="1" md-cols-sm="2" md-cols-md="4" md-cols-gt-md="6"\n      md-row-height-gt-md="1:1" md-row-height="2:2"\n      md-gutter="12px" md-gutter-gt-sm="8px">\n\n      <md-grid-tile class="repeated-item" ng-repeat="entry in imageList| filter:matchesRange as filtered"\n                    style="background-image:url({{entry.image}}); background-size: cover; background-position: 50%">\n        <!--<img ng-src=\'{{entry.image}}\' style="max-width:200px" class="md-card-image" alt="Washed Out">-->\n        <!--<md-grid-tile-footer>-->\n        <!--<h3>#2: (1r x 1c)</h3>-->\n        <!--</md-grid-tile-footer>-->\n      </md-grid-tile>\n\n    </md-grid-list>\n\n    <!--<md-grid-list md-gutter="1em" md-row-height="20px" md-cols="3">-->\n    <!--<md-grid-tile ng-repeat="site in sites | filter:searchText" style="border: 1px solid #eee" class="repeated-item" ng-click="goToSite(site)">-->\n    <!--<md-content>{{site.name}}</md-content>-->\n    <!--</md-grid-tile>-->\n    <!--</md-grid-list>-->\n\n\n  </div>\n</div>\n'), $templateCache.put("modules/grid/client/views/filter-text.client.view.html", '<div ng-controller="FilterTextController" ng-init=\'load()\' style="min-width:1200px">\n    <!--<md-button ng-click="changeTheme()" class="md-raised md-primary  pull-right">Submit-->\n    <!--</md-button>-->\n\n  <div layout="row">\n    <div style="justify-content: center;display: inherit; position:absolute; top:10px;z-index: 1000;left:45%"\n         flex="100">\n      <md-button ng-click="takeTour()" class="md-raised md-info  pull-right">\n        <span> <i  class="fa fa-info-circle fa-2x" style=" vertical-align: middle;" aria-hidden="true"></i>\n        Take Tour</span>\n      </md-button>\n    </div>\n  </div>\n\n  <div layout="row" ng-if="showSwitch">\n    <div flex="40"></div>\n    <div flex="20">\n      <md-switch ng-model="switch.keepClean" aria-label="direction">\n        Keep Clean Text?\n      </md-switch>\n    </div>\n  </div>\n  <div layout >\n\n    <!--<div flex="5">-->\n      <!--&lt;!&ndash;<span class="md-body-1">default</span>&ndash;&gt;-->\n      <!--<p class="pull-right" style="font-size:30px">&#128077;</p>-->\n    <!--</div>-->\n    <!--<div flex="5"></div>-->\n    <md-slider id="slider" flex="75" md-theme="{{theme}}" md-theme-watch="true" md-discrete ng-model="slider" step="5" min="0" max="100" aria-label="rating">\n    </md-slider>\n    <div flex="5"></div>\n    <div flex="5">\n      <p class="pull-left" style="font-size:30px" ng-bind-html="hateEmoji|twemoji"></p>\n    </div>\n    <div flex="15" layout class="pull-left" id="classifier">\n      <md-input-container style="margin:0;min-width:150px">\n        <label>Hate Classifier</label>\n        <md-select ng-model="input.selectedClassifier">\n          <md-option ng-repeat="classifier in classifiers" value="{{classifier}}">{{classifier}}</md-option>\n        </md-select>\n      </md-input-container>\n    </div>\n  </div>\n  <div style="text-align: center;" class="h4">\n    Showing {{filtered.length}} out of {{data.length}} based on the given hate level (lower bound).\n  </div>\n\n\n  <div id="results">\n\n    <br>\n    <div layout="row">\n      <div flex="90">\n        <md-content class="whiteBkgnd">\n          <ul id="list">\n            <li class="animate-repeat text-item " ng-repeat="entry in data  | filter:matchesRange as filtered"\n                ng-style="setColor(entry)"\n                ng-bind-html="entry.query|twemoji">\n            </li>\n\n          </ul>\n\n        </md-content>\n      </div>\n      <div flex="10"></div>\n\n    </div>\n\n  </div>\n</div>\n'),
            $templateCache.put("modules/grid/client/views/grid-main.client.view.html", '<div ng-controller="GridController as ctrl" ng-cloak="">\n\n\n  <div style="background-color: ghostwhite;">\n\n\n    <div layout="row">\n      <div style="justify-content: center;display: inherit; position:absolute; top:10px;z-index: 1000;left:47%"\n           flex="100">\n        <md-button ng-click="takeTour()" class="md-raised md-info  pull-right">\n        <span> <i class="fa fa-info-circle fa-2x" style=" vertical-align: middle;" aria-hidden="true"></i>\n        Take Tour</span>\n        </md-button>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div ng-repeat="section in sections">\n\n\n    <!--<md-toolbar class="demo-toolbar  _md _md-toolbar-transitions">-->\n    <!--<div class="md-toolbar-tools" layout="row" layout-align="center center">-->\n    <!--<h3 class="ng-binding ng-isolate-scope"><a class="docs-anchor ng-scope" ng-href="#basic-usage"-->\n    <!--name="basic-usage" href="#basic-usage">{{section.name}}</a></h3>-->\n    <!--</div>-->\n    <!--</md-toolbar>-->\n    <!--<md-content id="model_list" class="md-padding" layout-xs="row" layout="row" style="flex-wrap: wrap"-->\n    <!--layout-align="center">-->\n    <!--&lt;!&ndash;<md-autocomplete&ndash;&gt;-->\n    <!--&lt;!&ndash;ng-disabled="ctrl.isDisabled"&ndash;&gt;-->\n    <!--&lt;!&ndash;md-no-cache="ctrl.noCache"&ndash;&gt;-->\n    <!--&lt;!&ndash;md-selected-item="ctrl.selectedItem"&ndash;&gt;-->\n    <!--&lt;!&ndash;md-search-text-change="ctrl.searchTextChange(ctrl.searchText)"&ndash;&gt;-->\n    <!--&lt;!&ndash;md-search-text="ctrl.searchText"&ndash;&gt;-->\n    <!--&lt;!&ndash;md-selected-item-change="ctrl.selectedItemChange(item)"&ndash;&gt;-->\n    <!--&lt;!&ndash;md-items="item in ctrl.querySearch(ctrl.searchText)"&ndash;&gt;-->\n    <!--&lt;!&ndash;md-item-text="item.display"&ndash;&gt;-->\n    <!--&lt;!&ndash;md-min-length="0"&ndash;&gt;-->\n    <!--&lt;!&ndash;placeholder="Seach for a classifier">&ndash;&gt;-->\n    <!--&lt;!&ndash;<md-item-template>&ndash;&gt;-->\n    <!--&lt;!&ndash;<span md-highlight-text="ctrl.searchText" md-highlight-flags="^i">{{item.display}}</span>&ndash;&gt;-->\n    <!--&lt;!&ndash;</md-item-template>&ndash;&gt;-->\n    <!--&lt;!&ndash;<md-not-found>&ndash;&gt;-->\n    <!--&lt;!&ndash;No states matching "{{ctrl.searchText}}" were found.&ndash;&gt;-->\n    <!--&lt;!&ndash;<a ng-click="ctrl.newState(ctrl.searchText)">Create a new one!</a>&ndash;&gt;-->\n    <!--&lt;!&ndash;</md-not-found>&ndash;&gt;-->\n    <!--&lt;!&ndash;</md-autocomplete>&ndash;&gt;-->\n\n    <!--<div flex="20" layout="column" ng-repeat="model in section.models track by $index" id={{\'model_\'+$index}}>-->\n    <!--<md-card ng-click="goto(model)" style="height:450px">-->\n    <!--<img ng-src="{{model.image}}" class="md-card-image" alt="Washed Out">-->\n    <!--<md-card-title>-->\n    <!--<md-card-title-text>-->\n    <!--<span class="md-headline" style="">{{model.name}}</span>-->\n    <!--</md-card-title-text>-->\n    <!--</md-card-title>-->\n    <!--<md-card-content style="color:dimgrey; max-height: 200px">-->\n    <!--{{model.description}}-->\n    <!--</md-card-content>-->\n    <!--</md-card>-->\n    <!--</div>-->\n    <!--</md-content>-->\n    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\n      <div class="android-content mdl-layout__content">\n        <div class="android-more-section" id="model_list">\n          <div class="android-section-title mdl-typography--display-1-color-contrast">{{section.name}}</div>\n          <div class="android-card-container mdl-grid">\n\n            <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp"\n                 ng-repeat="model in section.models track by $index" id={{\'model_\'+$index}} ng-click="goto(model)">\n              <div class="mdl-card__media" >\n                <img ng-src="{{model.image}}">\n              </div>\n              <div class="mdl-card__title">\n                <h4 class="mdl-card__title-text">{{model.name}}</h4>\n              </div>\n              <div class="mdl-card__supporting-text">\n                <span class="mdl-typography--font-light mdl-typography--subhead">{{model.description}}</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n'), $templateCache.put("modules/grid/client/views/hate.client.view.html", '<div ng-controller="HateController" style="min-width:1200px">\n\n\n  <div layout="row">\n    <div style="justify-content: center;display: inherit; position:absolute; top:10px;z-index: 1000;left:45%"\n         flex="100">\n      <md-button ng-click="takeTour()" class="md-raised md-info  pull-right">\n        <span> <i class="fa fa-info-circle fa-2x" style=" vertical-align: middle;" aria-hidden="true"></i>\n        Take Tour</span>\n      </md-button>\n    </div>\n  </div>\n\n\n  <div layout="row" ng-cloak class="md-inline-form">\n\n    <!--Tweets Area-->\n    <div flex="35" id="tweet_select">\n\n      <md-toolbar class="demo-toolbar md-accent _md _md-toolbar-transitions">\n        <div class="md-toolbar-tools" layout-align="center center" style="background-color: #dd356e">\n          <h3 class="ng-binding ng-isolate-scope">Select the tweet you want to analyze. <i class="fa fa-chevron-down"\n                                                                                           aria-hidden="true"></i></h3>\n        </div>\n      </md-toolbar>\n\n      <div style="max-height:75vh;overflow-y: scroll" id="style-5">\n\n        <ul id="text_select" style="padding: 0;">\n\n          <li style="font-size: 16px" ng-repeat="entry in selection_data track by $index"\n              ng-class="selectedTextId==$index ? \'done\' : \'\'"\n              ng-click="selectText($index)" ng-bind-html="entry.text">\n          </li>\n\n        </ul>\n\n      </div>\n    </div>\n\n\n    <div flex="5">\n    </div>\n    <div flex="60" id="results_area">\n      <md-toolbar class="demo-toolbar md-accent _md _md-toolbar-transitions">\n        <div class="md-toolbar-tools" layout-align="center center" style="background-color: #dd356e">\n          <h3 class="ng-binding ng-isolate-scope">Analysis Results <i class="fa fa-bar-chart" aria-hidden="true"></i>\n          </h3>\n\n        </div>\n      </md-toolbar>\n\n      <md-content layout-padding md-whiteframe="5" class="whiteBkgnd">\n        <md-switch ng-model="mobile.activated" aria-label="Mobile Mode" class="md-primary pull-left"\n                   ng-change=\'onMobileChanged()\'>\n          <strong>Mobile Mode</strong>: {{mobile.activated?\'On\':\'Off\'}}\n        </md-switch>\n\n        <form name="forms.textForm">\n          <md-input-container class="md-block" style="margin:10px">\n            <!--<label>Text</label>-->\n            <textarea id="text" name="text" autofocus\n                      ng-model="input.text"\n                      md-minlength="4" rows="2"\n                      contenteditable="true"\n                      ng-disabled="!allowInput" md-select-on-focus style="font-size:20px;color:black"></textarea>\n            <div ng-if="allowInput" class="hint">Type here to see the level of hate in your text.</div>\n          </md-input-container>\n\n\n          <div style="position: absolute;top:5px;left:48%">\n            <div layout="row" layout-sm="column" layout-align="space-around" ng-show="dirty">\n              <double-bounce-spinner></double-bounce-spinner>\n            </div>\n          </div>\n\n        </form>\n\n        <div ng-style="{opacity : ((resultsAvailable) && \'1\') || \'0\'}">\n          <div style="margin-top:-25px">\n            <canvas id="chartjs" class="chart chart-bar" chart-data="data" chart-labels="labels" chart-series="series"\n                    chart-options="options" chart-dataset-override="datasetOverride" chart-click="onClick"\n                    height="150px"></canvas>\n          </div>\n          <br>\n          <br>\n          <div layout="row" ng-if="showFeedback">\n            <div flex="15"></div>\n            <div flex="20">\n              <span class="h3 pull-right feedback-label"> Your Label:</span>\n            </div>\n            <div flex="5"></div>\n            <div flex="20">\n        <span class="feedback-button"><md-buttons-toggle ng-model="feedback.value" items="items"\n                                                         selected-class="md-primary"></md-buttons-toggle>\n          </span>\n            </div>\n            <div flex="5"></div>\n            <div flex="20">\n              <md-button class="md-fab md-primary check-button" aria-label="Done" ng-click="submitFeedback();"\n                         ng-disabled="!feedbackDirty">\n                <md-icon md-svg-src="/lib/material-design-icons/action/svg/design/ic_done_24px.svg"></md-icon>\n              </md-button>\n            </div>\n          </div>\n        </div>\n\n\n      </md-content>\n\n    </div>\n\n  </div>\n\n\n</div>\n\n'), $templateCache.put("modules/grid/client/views/image.client.view.html", '<div ng-controller="ImageController" style="min-width:1200px">\n\n\n  <!--<div layout="row">-->\n  <!--<div style="justify-content: center;display: inherit; position:absolute; top:10px;z-index: 1000;left:45%"-->\n  <!--flex="100">-->\n  <!--<md-button ng-click="getRandomImage()" class="md-raised md-info  pull-right">-->\n  <!--<span><img class="img-responsive" style="display: inline;height: 30px;" src="/modules/grid/client/img/dice.png">-->\n  <!--Random Example</span>-->\n  <!--</md-button>-->\n  <!--</div>-->\n  <!--</div>-->\n  <div layout="row">\n    <div style="justify-content: center;display: inherit; position:absolute; top:10px;z-index: 1000;left:45%"\n         flex="100">\n      <md-button ng-click="takeTour()" class="md-raised md-info  pull-right">\n        <span> <i class="fa fa-info-circle fa-2x" style=" vertical-align: middle;" aria-hidden="true"></i>\n        Take Tour</span>\n      </md-button>\n    </div>\n  </div>\n\n  <!--<div ng-if="!allowInput" style="text-align: center;font-size: 22px;" class="ng-scope">-->\n  <!--Click on the button above â†‘ to get Random Examples!-->\n  <!--</div>-->\n\n  <div layout="row">\n    <div flex="30" id="image_select">\n\n      <md-toolbar class="demo-toolbar md-accent _md _md-toolbar-transitions" style="margin-bottom: 5px">\n        <div class="md-toolbar-tools" style="background-color: #dd356e">\n          <h3 class="ng-binding ng-isolate-scope">Select the image to analyze. <i class="fa fa-chevron-down"\n                                                                                  aria-hidden="true"></i></h3>\n        </div>\n      </md-toolbar>\n      <div ng-show="allowInput" layout="row">\n        <!--<div flex="10"></div>-->\n        <div flex="100" ng-cloak class="md-inline-form">\n\n\n          <md-content layout-padding class="whiteBkgnd" style="max-height:80px;overflow-y: hidden">\n            <div>\n              <form name="userForm" ng-submit="submitUrl()">\n                <div layout="row">\n                  <md-input-container flex="85" class="md-block ">\n                    <label>Image URL</label>\n                    <input ng-model="input.url">\n                  </md-input-container>\n\n                  <div flex="2"></div>\n                  <div flex="13">\n                    <md-button ng-click="submitUrl()" class="md-raised md-primary pink-button  pull-right">Submit\n                    </md-button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </md-content>\n\n        </div>\n      </div>\n\n      <div layout="row" ng-show="allowInput">\n        <!--<div flex="10"></div>-->\n        <div flex="100">\n\n          <md-content style="background-color: white">\n            <div>\n              <lf-ng-md-file-input ng-disabled="!allowInput" lf-api="addRemoteFilesApi" lf-files="files"\n                                   lf-on-file-click="onFileClick"\n                                   lf-on-file-remove="onFileRemove" preview\n                                   lf-drag-and-drop-label="{{allowInput?\'Enter an image URL above or drop images here!\':\'...\'}}"\n                                   drag></lf-ng-md-file-input>\n            </div>\n          </md-content>\n\n        </div>\n      </div>\n\n      <div style="max-height:120vh;overflow-y: scroll;padding:5px" id="style-5">\n\n        <md-grid-list\n          md-cols-xs="1" md-cols-sm="1" md-cols-md="1" md-cols-gt-md="2"\n          md-row-height-gt-md="1:1" md-row-height="2:2"\n          md-gutter="12px" md-gutter-gt-sm="8px">\n\n          <md-grid-tile class="brightness" ng-repeat="entry in randomImageList  track by $index"\n                        ng-click="selectImage($index)"\n\n                        style="background-image:url({{entry}}); background-size: cover; background-position: 50%">\n            <div class="overlay" ng-class="selectedImageId==$index ? \'overlay_part\' : \'overlay\'">\n              <div class="imagetext" style="font-size: 30px;color:#009933"><i class="fa fa-check"\n                                                                              aria-hidden="true"></i>\n              </div>\n            </div>\n          </md-grid-tile>\n\n\n        </md-grid-list>\n      </div>\n    </div>\n    <div flex="5">\n\n    </div>\n    <div flex="65" id="class_results">\n      <md-toolbar class="demo-toolbar md-accent _md _md-toolbar-transitions">\n        <div class="md-toolbar-tools" layout-align="center center" style="background-color: #dd356e">\n          <h3 class="ng-binding ng-isolate-scope">Analysis Results <i class="fa fa-bar-chart" aria-hidden="true"></i>\n          </h3>\n        </div>\n      </md-toolbar>\n\n      <md-content layout-padding md-whiteframe="5" class="whiteBkgnd"\n                  style="min-height:650px">\n\n         <div layout="row" layout-align="space-between center">\n\n\n          <div layout="col" flex="20">\n            <md-switch ng-model="mobile.activated" aria-label="Mobile Mode" class="md-primary pull-left"\n                       ng-change=\'onMobileChanged()\'>\n              <strong>Mobile Mode</strong>: {{mobile.activated?\'On\':\'Off\'}}\n            </md-switch>\n\n          </div>\n          <div layout="col" flex="50">\n          </div>\n          <div layout="col" flex="10" ng-if="mobile.activated">\n            <strong class="pull-right">Model</strong>\n\n          </div>\n          <div layout="col" flex="20">\n\n            <md-select ng-show="mobile.activated" ng-model="imageModelInput.selectedClassifier" class="pull-left"\n                       ng-change="onImageModelChanged()">\n\n              <md-option ng-repeat="classifier in imageMobileClassifiers" ng-selected="$index === 1"\n                         value="{{classifier.codeName}}">\n                {{classifier.friendlyName}}\n              </md-option>\n            </md-select>\n          </div>\n\n\n        </div>\n\n        <div>\n\n          <div ng-cloak="" layout="row" md-theme="{{theme}}" md-theme-watch="true" ng-if="showResults && files.length>0"\n               style="justify-content: center;" class="noshadow">\n\n            <div class="violence_tree chartBkgnd noshadow"\n                 ng-if="currentState==\'violence\'" flex="40" md-whiteframe="5"\n            >\n              <md-content style="background-color: white" layout-align="center center" layout-padding="10%">\n                <div d3-tree updated="updated" align="center" chart-data="classData"></div>\n              </md-content>\n              <br/>\n            </div>\n            <div class="violence_tree chartBkgnd noshadow"\n                 ng-if="currentState==\'violence\'" flex="40" md-whiteframe="5"\n            >\n              <md-content style="background-color: white" layout-align="center center" layout-padding="10%">\n                <div class="violence_tree" d3-tree updated="updated" align="center" chart-data="classData2"></div>\n              </md-content>\n              <br/>\n            </div>\n            <div ng-if="currentState==\'image\'" flex="100" md-whiteframe="5" class="chartBkgnd noshadow">\n              <md-content style="background-color: white" layout-align="center center" layout-padding="10%">\n                <div d3-tree updated="updated" align="center" chart-data="classData"></div>\n              </md-content>\n              <br/>\n            </div>\n\n            <div layout="row" ng-if="currentState==\'faceEmotion\'" md-whiteframe="5" class="chartBkgnd noshadow"\n                 layout-align="center center">\n\n              <md-content style="background-color: white">\n                <div ng-if="!resultsAvailable">\n                  <div layout="row" layout-sm="column" layout-align="space-around" style="margin-top:100px">\n                    <double-bounce-spinner></double-bounce-spinner>\n                  </div>\n                </div>\n\n                <div ng-if="resultsAvailable">\n\n\n                  <div ng-if="faceEmotions[\'face_found\']==0">\n                    <img class="" src="/modules/grid/client/img/cactus.png">\n                    <h5>I couldn\'t find any faces!</h5>\n                  </div>\n                  <!--place the image with the faces detected-->\n                  <div ng-if="faceEmotions[\'face_found\']>0" layout="column" layout-align="center center">\n                    <div>\n                      <img class="img-responsive" style="display: inline;min-width:300px"\n                           ng-src="{{\'https://modemos.epfl.ch/images\'+faceEmotions[\'new_img_path\']}}">\n                    </div>\n\n                    <div style="margin:10%;">\n                      <h4>Faces Emotions</h4>\n                      <!--place the images of each face along with the emotion-->\n                      <div ng-repeat="emotions in faceEmotions[\'face_emotion\']  track by $index">\n\n                        <div layout="row">\n                          <div style="min-width:50px">\n                            <img class="img-responsive" style="display: inline;max-height:50px"\n                                 ng-src="{{\'https://modemos.epfl.ch/images\'+faceEmotions[\'face_img\'][$index]}}">\n                          </div>\n                          <span ng-repeat="emoji in emojiSentiments" ng-bind-html="sentimentEmoji[emoji]|twemoji"\n                                ng-style="{opacity: 0.2+emotions[emoji]}" class="">\n                             <md-tooltip>\n                               {{emoji +\': \'+ emotions[emoji].toFixed(2)}}\n                             </md-tooltip>\n                          </span>\n                        </div>\n                        <!--{{emotions[\'anger\']}}-->\n                      </div>\n                      <!--{{emotions[\'anger\']}}-->\n\n                    </div>\n                    <div layout="row">\n                          <span ng-repeat="emoji in emojiSentiments"\n                                ng-style="" class="">\n                           <span ng-bind-html="sentimentEmoji[emoji]|twemoji"></span>\n                            <span style="margin-right:20px">{{emoji}}</span>\n                          </span>\n                    </div>\n                  </div>\n                </div>\n              </md-content>\n              <br/>\n            </div>\n\n\n          </div>\n        </div>\n      </md-content>\n    </div>\n  </div>\n\n\n</div>\n\n\n<!--<div ng-show="false" id="image_select" layout="row" ng-cloak class="md-inline-form">-->\n<!--<div flex="10"></div>-->\n<!--<div flex="80">-->\n\n<!--<md-toolbar class="demo-toolbar md-accent _md _md-toolbar-transitions">-->\n<!--<div class="md-toolbar-tools">-->\n<!--<h3 class="ng-binding ng-isolate-scope">Select the image you want to analyze. <i class="fa fa-chevron-down" aria-hidden="true"></i></h3>-->\n<!--</div>-->\n<!--</md-toolbar>-->\n<!--<div style="max-height:300px;overflow-y: scroll" id="style-5">-->\n<!--&lt;!&ndash;<ang-accordion one-at-a-time="true" close-icon-class="fa fa-chevron-right" open-icon-class="fa fa-chevron-down" style="max-height:300px;overflow-y: scroll">&ndash;&gt;-->\n\n\n<!--&lt;!&ndash;<collapsible-item class="h4"&ndash;&gt;-->\n<!--&lt;!&ndash;item-title="Select text"&ndash;&gt;-->\n<!--&lt;!&ndash;initially-open="true">&ndash;&gt;-->\n\n<!--&lt;!&ndash;<ul id="text_select">&ndash;&gt;-->\n\n<!--&lt;!&ndash;<li ng-repeat="entry in selection_data track by $index" ng-class="selectedTextId==$index ? \'done\' : \'\'"&ndash;&gt;-->\n<!--&lt;!&ndash;ng-click="selectText($index)" ng-bind-html="entry.text">&ndash;&gt;-->\n<!--&lt;!&ndash;</li>&ndash;&gt;-->\n\n<!--&lt;!&ndash;</ul>&ndash;&gt;-->\n<!--<md-grid-list-->\n<!--md-cols-xs="1" md-cols-sm="2" md-cols-md="4" md-cols-gt-md="6"-->\n<!--md-row-height-gt-md="1:1" md-row-height="2:2"-->\n<!--md-gutter="12px" md-gutter-gt-sm="8px" >-->\n\n<!--<md-grid-tile   class="brightness" ng-repeat="entry in randomImageList  track by $index"-->\n<!--ng-click="selectImage($index)"-->\n\n<!--style="background-image:url({{entry}}); background-size: cover; background-position: 50%">-->\n<!--<div class="overlay" ng-class="selectedImageId==$index ? \'overlay_part\' : \'overlay\'">-->\n<!--<div class="text" style="font-size: 30px;color:#009933"><i class="fa fa-check" aria-hidden="true"></i></div>-->\n<!--</div>-->\n<!--</md-grid-tile>-->\n\n\n<!--</md-grid-list>-->\n\n<!--&lt;!&ndash;</collapsible-item>&ndash;&gt;-->\n<!--&lt;!&ndash;</div>&ndash;&gt;-->\n<!--&lt;!&ndash;</ang-accordion>&ndash;&gt;-->\n<!--</div>-->\n<!--</div>-->\n<!--</div>-->\n\n<!--</div>-->\n'), $templateCache.put("modules/grid/client/views/neighbors.client.view.html", '<div ng-controller="HateController" style="min-width:1200px">\n\n\n  <div layout="row">\n    <div style="justify-content: center;display: inherit; position:absolute; top:10px;z-index: 1000;left:45%"\n         flex="100">\n      <md-button ng-click="takeTour()" class="md-raised md-info  pull-right">\n        <span> <i class="fa fa-info-circle fa-2x" style=" vertical-align: middle;" aria-hidden="true"></i>\n        Take Tour</span>\n      </md-button>\n    </div>\n  </div>\n\n\n  <div layout="row" ng-cloak class="md-inline-form">\n\n    <!--Tweets Area-->\n    <div flex="35" id="tweet_select">\n\n      <md-toolbar class="demo-toolbar md-accent _md _md-toolbar-transitions">\n        <div class="md-toolbar-tools" layout-align="center center" style="background-color: #dd356e">\n          <h3 class="ng-binding ng-isolate-scope">Select the text to see its neighbors. <i class="fa fa-chevron-down"\n                                                                                           aria-hidden="true"></i></h3>\n        </div>\n      </md-toolbar>\n\n      <div style="max-height:75vh;overflow-y: scroll" id="style-5">\n\n        <ul id="text_select" style="padding: 0;">\n\n          <li style="font-size: 16px" ng-repeat="entry in selection_data track by $index"\n              ng-class="selectedTextId==$index ? \'done\' : \'\'"\n              ng-click="selectText($index)" ng-bind-html="entry.text">\n          </li>\n\n        </ul>\n\n      </div>\n    </div>\n\n\n    <div flex="5">\n    </div>\n\n    <div flex="60" id="results_area">\n      <md-toolbar class="demo-toolbar md-accent _md _md-toolbar-transitions">\n        <div class="md-toolbar-tools" layout-align="center center" style="background-color: #dd356e">\n          <h3 class="ng-binding ng-isolate-scope">Nearest Neighbors <i class="fa fa-arrows-alt" aria-hidden="true"></i>\n          </h3>\n        </div>\n      </md-toolbar>\n\n      <md-content layout-padding md-whiteframe="5" class="whiteBkgnd">\n        <br>\n\n\n        <form name="forms.textForm">\n          <md-input-container flex="50" style="margin-left: 220px">\n            <label>Word</label>\n            <input ng-disabled="!allowInput" md-select-on-focus style="font-size:20px;color:black" required name="text"\n                   ng-model="input.text">\n            <div ng-messages="forms.textForm.text.$error">\n              <div ng-message="required">This is required.</div>\n            </div>\n          </md-input-container>\n\n\n          <!--<md-input-container class="md-block" style="margin:10px">-->\n          <!--<textarea id="text" name="text" autofocus-->\n          <!--ng-model="input.text"-->\n          <!--md-minlength="4" rows="2"-->\n          <!--contenteditable="true"-->\n          <!--ng-disabled="!allowInput" md-select-on-focus style="font-size:20px;color:black"></textarea>-->\n          <!--<div ng-if="allowInput" class="hint">Type here to see the closest neighbor to your word.</div>-->\n          <!--</md-input-container>-->\n\n\n          <div style="position: absolute;top:5px;left:48%">\n            <div layout="row" layout-sm="column" layout-align="space-around" ng-show="dirty">\n              <double-bounce-spinner></double-bounce-spinner>\n            </div>\n          </div>\n\n        </form>\n\n        <div ng-style="{opacity : ((resultsAvailable) && \'1\') || \'0\'}">\n          <div layout="row" layout-sm="column" layout-align="space-around">\n\n\n            <div style="margin-top:-25px" flex="50">\n              <h4>Our Oyoty Embedding</h4>\n              <h5 style="color:grey">What neighbors we get?</h5>\n              <br>\n              <ul>\n                <li ng-repeat="neighbor in neighbors[\'fasttext\']">\n                  <p>{{neighbor.word}}</p>\n                </li>\n              </ul>\n            </div>\n            <div style="margin-top:-25px" flex="50">\n              <h4>GloVe Embedding</h4>\n              <h5 style="color:grey">What existing embeddings get?</h5>\n              <br>\n              <div >\n                <p style="margin-left:20px; color:orangered" ng-if="!neighbors[\'glove\']"><i class="fa fa-times-circle" aria-hidden="true"></i> Nothing\n                  <i class="fa fa-times-circle" aria-hidden="true"></i>\n                </p>\n              </div>\n              <ul>\n                <li ng-repeat="neighbor in neighbors[\'glove\']">\n                  <p>{{neighbor.word}}</p>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n\n          <br>\n          <br>\n          <div layout="row" ng-if="showFeedback">\n            <div flex="15"></div>\n            <div flex="20">\n              <span class="h3 pull-right feedback-label"> Your Label:</span>\n            </div>\n            <div flex="5"></div>\n            <div flex="20">\n             <span class="feedback-button"><md-buttons-toggle ng-model="feedback.value" items="items"\n                                                              selected-class="md-primary"></md-buttons-toggle>\n            </span>\n            </div>\n            <div flex="5"></div>\n            <div flex="20">\n              <md-button class="md-fab md-primary check-button" aria-label="Done" ng-click="submitFeedback();"\n                         ng-disabled="!feedbackDirty">\n                <md-icon md-svg-src="/lib/material-design-icons/action/svg/design/ic_done_24px.svg"></md-icon>\n              </md-button>\n            </div>\n          </div>\n        </div>\n\n\n      </md-content>\n\n    </div>\n\n  </div>\n\n\n</div>\n\n'), $templateCache.put("modules/grid/client/views/text.emotion.client.view.html", '<div ng-controller="HateController" style="min-width:1200px">\n\n\n  <div layout="row">\n    <div style="justify-content: center;display: inherit; position:absolute; top:10px;z-index: 1000;left:45%"\n         flex="100">\n      <md-button ng-click="takeTour()" class="md-raised md-info  pull-right">\n        <span> <i class="fa fa-info-circle fa-2x" style=" vertical-align: middle;" aria-hidden="true"></i>\n        Take Tour</span>\n      </md-button>\n    </div>\n  </div>\n\n\n  <div layout="row" ng-cloak class="md-inline-form">\n\n    <!--Tweets Area-->\n    <div flex="35" id="tweet_select">\n\n      <md-toolbar class="demo-toolbar md-accent _md _md-toolbar-transitions">\n        <div class="md-toolbar-tools" layout-align="center center" style="background-color: #dd356e">\n          <h3 class="ng-binding ng-isolate-scope">Select the tweet you want to analyze. <i class="fa fa-chevron-down"\n                                                                                           aria-hidden="true"></i></h3>\n        </div>\n      </md-toolbar>\n      <div layout="column" ng-show="allowInput">\n        <!--<div flex="10"></div>-->\n        <div flex="100">\n\n          <md-content style="background-color: white">\n            <div>\n              <lf-ng-md-file-input ng-disabled="!allowInput" lf-api="addRemoteFilesApi" lf-files="files"\n                                   lf-on-file-click="onFileClick"\n                                   lf-on-file-remove="onFileRemove" preview\n                                   lf-drag-and-drop-label="{{allowInput?\'Drop a text file with one sentence per line to analyze bulk data.\':\'...\'}}"\n                                   drag></lf-ng-md-file-input>\n            </div>\n          </md-content>\n\n        </div>\n        <div flex="100" ng-show="resultLink" layout-align="center center">\n          <h4 style="text-align:center"><a download target="_self" ng-href="{{resultLink}}">Download result</a></h4>\n        </div>\n      </div>\n\n\n      <div style="max-height:75vh;overflow-y: scroll" id="style-5">\n\n        <ul id="text_select" style="padding: 0;">\n\n          <li style="font-size: 16px" ng-repeat="entry in selection_data track by $index"\n              ng-class="selectedTextId==$index ? \'done\' : \'\'"\n              ng-click="selectText($index)" ng-bind-html="entry.text">\n          </li>\n\n        </ul>\n\n      </div>\n    </div>\n\n\n    <div flex="5">\n    </div>\n    <div flex="60" id="results_area">\n      <md-toolbar class="demo-toolbar md-accent _md _md-toolbar-transitions">\n        <div class="md-toolbar-tools" layout-align="center center" style="background-color: #dd356e">\n          <h3 class="ng-binding ng-isolate-scope">Analysis Results <i class="fa fa-bar-chart" aria-hidden="true"></i>\n          </h3>\n        </div>\n      </md-toolbar>\n\n      <md-content layout-padding md-whiteframe="5" class="whiteBkgnd">\n        <div layout="row" layout-align="space-between center">\n\n\n          <div layout="col" flex="20">\n            <md-switch ng-model="mobile.activated" aria-label="Mobile Mode" class="md-primary pull-left"\n                       ng-change=\'onMobileChanged()\'>\n              <strong>Mobile Mode</strong>: {{mobile.activated?\'On\':\'Off\'}}\n            </md-switch>\n\n          </div>\n          <div layout="col" flex="50">\n          </div>\n          <div layout="col" flex="10" ng-if="mobile.activated">\n            <strong class="pull-right">Model</strong>\n\n          </div>\n          <div layout="col" flex="20">\n\n            <md-select ng-show="mobile.activated" ng-model="emotionInput.selectedClassifier" class="pull-left"\n                       ng-change="onEmotionModelChanged()">\n\n              <md-option ng-repeat="classifier in emotionClassifiers" ng-selected="$index === 2"\n                         value="{{classifier.codeName}}">\n                {{classifier.friendlyName}}\n              </md-option>\n            </md-select>\n          </div>\n\n\n        </div>\n\n\n        <form name="forms.textForm">\n          <md-input-container class="md-block" style="margin:10px">\n            <!--<label>Text</label>-->\n            <textarea id="text" name="text" autofocus\n                      ng-model="input.text"\n                      md-minlength="4" rows="2"\n                      contenteditable="true"\n                      ng-disabled="!allowInput" md-select-on-focus style="font-size:20px;color:black"></textarea>\n            <div ng-if="allowInput" class="hint">Type here to see the emotions in your text.</div>\n          </md-input-container>\n\n\n          <div style="position: absolute;top:5px;left:48%">\n            <div layout="row" layout-sm="column" layout-align="space-around" ng-show="dirty">\n              <double-bounce-spinner></double-bounce-spinner>\n            </div>\n          </div>\n\n        </form>\n\n\n        <div ng-style="{opacity : ((resultsAvailable) && \'1\') || \'0\'}">\n\n          <div id="container">\n            <highchart config="chartConfig.Text"></highchart>\n          </div>\n\n          <div ng-show="showSentiments" layout="row" layout-align="center center">\n            <div layout="column" layout-align="center center">\n              <div class="h4">Sentiments</div>\n              <div layout="row">\n                <div ng-repeat="emoji in emojiSentiments" layout="row">\n                  <div layout="column" layout-align="center center">\n                <span ng-bind-html="sentimentEmoji[emoji]|twemoji" ng-style="{opacity: 0.2+sentimentData[emoji]}"\n                      class="emoji_sentiment">\n                </span>\n                    <span>\n                               {{\' \'+ sentimentData[emoji].toFixed(2)}}\n                  </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <br>\n          <br>\n          <div layout="row" ng-if="showFeedback">\n            <div flex="15"></div>\n            <div flex="20">\n              <span class="h3 pull-right feedback-label"> Your Label:</span>\n            </div>\n            <div flex="5"></div>\n            <div flex="20">\n        <span class="feedback-button"><md-buttons-toggle ng-model="feedback.value" items="items"\n                                                         selected-class="md-primary"></md-buttons-toggle>\n          </span>\n            </div>\n            <div flex="5"></div>\n            <div flex="20">\n              <md-button class="md-fab md-primary check-button" aria-label="Done" ng-click="submitFeedback();"\n                         ng-disabled="!feedbackDirty">\n                <md-icon md-svg-src="/lib/material-design-icons/action/svg/design/ic_done_24px.svg"></md-icon>\n              </md-button>\n            </div>\n          </div>\n\n\n        </div>\n\n\n      </md-content>\n\n    </div>\n\n  </div>\n\n\n</div>\n\n'),
            $templateCache.put("modules/users/client/views/admin/edit-user.client.view.html", '<section>\n  <div class="page-header">\n    <h1>User <span ng-bind="vm.user.username"></span></h1>\n  </div>\n  <div class="col-md-12">\n    <form name="vm.userForm" ng-submit="vm.update(vm.userForm.$valid)" novalidate>\n      <fieldset>\n        <div class="form-group" show-errors>\n          <label for="firstName">First Name</label>\n          <input type="text" id="firstName" name="firstName" class="form-control" ng-model="vm.user.firstName" placeholder="First Name" required autofocus />\n          <div ng-messages="vm.userForm.firstName.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">First name is required.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="lastName">Last Name</label>\n          <input type="text" id="lastName" name="lastName" class="form-control" ng-model="vm.user.lastName" placeholder="Last Name" required />\n          <div ng-messages="vm.userForm.lastName.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Last name is required.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label class="control-label" for="roles">Roles</label>\n          <div class="controls">\n            <input class="form-control" type="text" name="roles" ng-model="vm.user.roles" id="roles" ng-list required />\n            <div ng-messages="vm.userForm.roles.$error" role="alert">\n              <p class="help-block error-text" ng-message="required">At least one role is required.</p>\n            </div>\n          </div>\n        </div>\n        <div class="form-group">\n          <input type="submit" value="Update" class="btn btn-default">\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</section>\n'), $templateCache.put("modules/users/client/views/admin/list-users.client.view.html", '<section>\n  <div class="page-header">\n    <div class="row">\n      <div class="col-md-4">\n        <h1>Users</h1>\n      </div>\n      <div class="col-md-4" style="margin-top: 2em">\n        <input class="form-control col-md-4" type="text" ng-model="vm.search" placeholder="Search" ng-change="vm.figureOutItemsToDisplay()" />\n      </div>\n    </div>\n  </div>\n  <div class="list-group">\n    <a ng-repeat="user in vm.pagedItems" ui-sref="admin.user({userId: user._id})" class="list-group-item">\n      <h4 class="list-group-item-heading" ng-bind="user.username"></h4>\n      <p class="list-group-item-text pull-right small" ng-bind="user.roles"></p>\n      <p class="list-group-item-text" ng-bind="user.email"></p>\n    </a>\n  </div>\n\n  <uib-pagination boundary-links="true" max-size="8" items-per-page="vm.itemsPerPage" total-items="vm.filterLength" ng-model="vm.currentPage" ng-change="vm.pageChanged()"></uib-pagination>\n</section>\n'), $templateCache.put("modules/users/client/views/admin/view-user.client.view.html", '<section>\n  <div class="page-header">\n    <div class="row">\n      <div class="col-md-6">\n        <h1 ng-bind="vm.user.username"></h1>\n      </div>\n      <div class="col-md-4">\n        <a class="btn btn-primary" ui-sref="admin.user-edit({userId: vm.user._id})">\n          <i class="glyphicon glyphicon-edit"></i>\n        </a>\n        <a class="btn btn-primary" ng-click="vm.remove()" ng-if="!vm.isContextUserSelf()">\n          <i class="glyphicon glyphicon-trash"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-md-8">\n      <div class="row">\n        <div class="col-md-3"><strong>First Name</strong></div>\n        <div class="col-md-6" ng-bind="vm.user.firstName"></div>\n      </div>\n      <hr/>\n      <div class="row">\n        <div class="col-md-3"><strong>Last Name</strong></div>\n        <div class="col-md-6" ng-bind="vm.user.lastName"></div>\n      </div>\n      <hr/>\n      <div class="row">\n        <div class="col-md-3"><strong>Email</strong></div>\n        <div class="col-md-6" ng-bind="vm.user.email"></div>\n      </div>\n      <hr/>\n      <div class="row">\n        <div class="col-md-3"><strong>Provider</strong></div>\n        <div class="col-md-6" ng-bind="vm.user.provider"></div>\n      </div>\n      <hr/>\n      <div class="row">\n        <div class="col-md-3"><strong>Created</strong></div>\n        <div class="col-md-6" ng-bind="vm.user.created"></div>\n      </div>\n      <hr/>\n      <div class="row">\n        <div class="col-md-3"><strong>Roles</strong></div>\n        <div class="col-md-6" ng-bind="vm.user.roles"></div>\n      </div>\n    </div>\n  </div>\n</section>\n'), $templateCache.put("modules/articles/client/views/admin/form-article.client.view.html", '<section>\n  <div class="page-header">\n    <h1>{{vm.article._id ? \'Edit Article\' : \'New Article\'}}</h1>\n  </div>\n  <div class="pull-right">\n    <a ng-show="vm.article._id" class="btn btn-primary" ng-click="vm.remove()">\n      <i class="glyphicon glyphicon-trash"></i>\n    </a>\n  </div>\n  <div class="col-md-12">\n    <form name="vm.form.articleForm" class="form-horizontal" ng-submit="vm.save(vm.form.articleForm.$valid)" novalidate>\n      <fieldset>\n        <div class="form-group" show-errors>\n          <label class="control-label" for="title">Title</label>\n          <input name="title" type="text" ng-model="vm.article.title" id="title" class="form-control" placeholder="Title" required autofocus>\n          <div ng-messages="vm.form.articleForm.title.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Article title is required.</p>\n          </div>\n        </div>\n        <div class="form-group">\n          <label class="control-label" for="content">Content</label>\n          <textarea name="content" data-ng-model="vm.article.content" id="content" class="form-control" cols="30" rows="10" placeholder="Content"></textarea>\n        </div>\n        <div class="form-group">\n          <button type="submit" class="btn btn-default">{{vm.article._id ? \'Update\' : \'Create\'}}</button>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</section>\n'), $templateCache.put("modules/articles/client/views/admin/list-articles.client.view.html", '<section>\n  <div class="page-header">\n    <h1>\n      Articles\n      <a class="btn btn-primary pull-right" data-ui-sref="admin.articles.create">\n        <i class="glyphicon glyphicon-plus"></i>\n      </a>\n    </h1>\n  </div>\n  <div class="list-group">\n    <a data-ng-repeat="article in vm.articles" data-ui-sref="admin.articles.edit({articleId: article._id})" class="list-group-item">\n      <small class="list-group-item-text">\n        Posted on\n        <span data-ng-bind="article.created | date:\'mediumDate\'"></span>\n        by\n        <span ng-if="article.user" ng-bind="article.user.displayName"></span>\n        <span ng-if="!article.user">Deleted User</span>\n      </small>\n      <h4 class="list-group-item-heading" data-ng-bind="article.title"></h4>\n      <p class="list-group-item-text" data-ng-bind="article.content"></p>\n    </a>\n  </div>\n  <div class="alert alert-warning text-center" data-ng-if="articles.$resolved && !articles.length">\n    No articles yet, why don\'t you <a data-ui-sref="admin.articles.create">create one</a>?\n  </div>\n</section>\n'), $templateCache.put("modules/users/client/views/password/forgot-password.client.view.html", '<section class="row">\n  <h3 class="col-md-12 text-center">Restore your password</h3>\n  <p class="small text-center">Enter your account username.</p>\n  <div class="col-xs-offset-2 col-xs-8 col-md-offset-5 col-md-2">\n    <form name="vm.forgotPasswordForm" ng-submit="vm.askForPasswordReset(vm.forgotPasswordForm.$valid)" class="form-horizontal" novalidate autocomplete="off">\n      <fieldset>\n        <div class="form-group" show-errors>\n          <input type="text" id="username" name="username" class="form-control" ng-model="vm.credentials.username" placeholder="Username" lowercase required autofocus>\n          <div ng-messages="vm.forgotPasswordForm.username.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Enter a username.</p>\n          </div>\n        </div>\n        <div class="text-center form-group">\n          <button type="submit" class="btn btn-primary">Submit</button>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</section>\n'), $templateCache.put("modules/users/client/views/password/reset-password-invalid.client.view.html", '<section class="row text-center">\n  <h3 class="col-md-12">Password reset is invalid</h3>\n  <a ui-sref="password.forgot" class="col-md-12">Ask for a new password reset</a>\n</section>\n'), $templateCache.put("modules/users/client/views/password/reset-password-success.client.view.html", '<section class="row text-center">\n  <h3 class="col-md-12">Password successfully reset</h3>\n  <a ui-sref="home" class="col-md-12">Continue to home page</a>\n</section>\n'), $templateCache.put("modules/users/client/views/password/reset-password.client.view.html", '<section class="row">\n  <h3 class="col-md-12 text-center">Reset your password</h3>\n  <div class="col-xs-offset-2 col-xs-8 col-md-offset-4 col-md-4">\n    <form name="vm.resetPasswordForm" ng-submit="vm.resetUserPassword(vm.resetPasswordForm.$valid)" class="signin form-horizontal" novalidate autocomplete="off">\n      <fieldset>\n        <div class="form-group" show-errors>\n          <label for="newPassword">New Password</label>\n          <input type="password" id="newPassword" name="newPassword" class="form-control" ng-model="vm.passwordDetails.newPassword" placeholder="New Password" autocomplete="new-password" uib-popover="{{vm.getPopoverMsg()}}" uib-popover-trigger="focus" uib-popover-placement="top" password-validator required autofocus>\n          <div ng-messages="vm.resetPasswordForm.newPassword.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Enter a new password.</p>\n            <div ng-repeat="passwordError in passwordErrors">\n              <p class="help-block error-text" ng-show="vm.resetPasswordForm.newPassword.$error.requirements">{{passwordError}}</p>\n            </div>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="verifyPassword">Verify Password</label>\n          <input type="password" id="verifyPassword" name="verifyPassword" class="form-control" ng-model="vm.passwordDetails.verifyPassword" placeholder="Verify Password" password-verify="vm.passwordDetails.newPassword" required>\n          <div ng-messages="vm.resetPasswordForm.verifyPassword.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Enter the password again to verify.</p>\n            <p class="help-block error-text" ng-show="vm.resetPasswordForm.verifyPassword.$error.passwordVerify">Passwords do not match.</p>\n          </div>\n        </div>\n        <div class="form-group" ng-show="!vm.resetPasswordForm.newPassword.$error.required">\n          <label>Password Requirements</label>\n          <uib-progressbar value="requirementsProgress" type="{{requirementsColor}}"><span style="color:white; white-space:nowrap;">{{requirementsProgress}}%</span></uib-progressbar>\n        </div>\n        <div class="text-center form-group">\n          <button type="submit" class="btn btn-primary">Update Password</button>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</section>\n'), $templateCache.put("modules/users/client/views/authentication/authentication.client.view.html", '<section class="row">\n\n  <!--<h3 class="col-md-12 text-center">Sign in using your social accounts</h3>-->\n  <!--<div class="col-md-12 text-center">-->\n    <!--<div class="social-account-container social-button"><a class="btn"><img class="img-responsive" ng-click="vm.callOauthProvider(\'/api/auth/facebook\')" ng-src="/modules/users/client/img/buttons/facebook.png"></a></div>-->\n    <!--<div class="social-account-container social-button"><a class="btn"><img class="img-responsive" ng-click="vm.callOauthProvider(\'/api/auth/twitter\')" ng-src="/modules/users/client/img/buttons/twitter.png"></a></div>-->\n    <!--<div class="social-account-container social-button"><a class="btn"><img class="img-responsive" ng-click="vm.callOauthProvider(\'/api/auth/google\')" ng-src="/modules/users/client/img/buttons/google.png"></a></div>-->\n    <!--<div class="social-account-container social-button"><a class="btn"><img class="img-responsive" ng-click="vm.callOauthProvider(\'/api/auth/linkedin\')" ng-src="/modules/users/client/img/buttons/linkedin.png"></a></div>-->\n    <!--<div class="social-account-container social-button"><a class="btn"><img class="img-responsive" ng-click="vm.callOauthProvider(\'/api/auth/github\')" ng-src="/modules/users/client/img/buttons/github.png"></a></div>-->\n    <!--<div class="social-account-container social-button"><a class="btn"><img class="img-responsive" ng-click="vm.callOauthProvider(\'/api/auth/paypal\')"  ng-src="/modules/users/client/img/buttons/paypal.png"></a></div>-->\n  <!--</div>-->\n  <div ui-view></div>\n</section>\n'), $templateCache.put("modules/users/client/views/authentication/signin.client.view.html", '<div>\n  <h3 class="col-xs-12 text-center">Sign in with your account</h3>\n  <div class="col-xs-offset-2 col-xs-8 col-md-offset-4 col-md-4">\n    <form name="vm.userForm" ng-submit="vm.signin(vm.userForm.$valid)" class="signin" novalidate autocomplete="off">\n      <fieldset>\n        <div class="form-group" show-errors>\n          <uib-alert type="danger" ng-show="vm.error" class="text-center text-danger">\n            <span ng-bind="vm.error"></span>\n          </uib-alert>\n          <label for="usernameOrEmail">Username or Email</label>\n          <input type="text" id="usernameOrEmail" name="usernameOrEmail" class="form-control" ng-model="vm.credentials.usernameOrEmail" placeholder="Username or Email" required autofocus>\n          <div ng-messages="vm.userForm.usernameOrEmail.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Username or Email is required.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="password">Password</label>\n          <input type="password" id="password" name="password" class="form-control" ng-model="vm.credentials.password" placeholder="Password" required>\n          <div ng-messages="vm.userForm.password.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Password is required.</p>\n          </div>\n        </div>\n        <div class="text-center form-group">\n          <button type="submit" class="btn btn-primary">Sign in</button>\n          &nbsp; or&nbsp;\n          <a ui-sref="authentication.signup">Sign up</a>\n        </div>\n        <div class="text-center forgot-password">\n          <a ui-sref="password.forgot">Forgot your password?</a>\n        </div>\n        <br />\n      </fieldset>\n    </form>\n  </div>\n</div>\n'), $templateCache.put("modules/users/client/views/authentication/signup.client.view.html", '<div>\n  <h3 class="col-xs-12 text-center">Sign up using your email</h3>\n  <div class="col-xs-offset-2 col-xs-8 col-md-offset-4 col-md-4">\n    <form name="vm.userForm" ng-submit="vm.signup(vm.userForm.$valid)" class="signin" novalidate autocomplete="off">\n      <fieldset>\n        <div class="form-group" show-errors>\n          <label for="firstName">First Name</label>\n          <input type="text" id="firstName" name="firstName" class="form-control" ng-model="vm.credentials.firstName" placeholder="First Name" required autofocus>\n          <div ng-messages="vm.userForm.firstName.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">First name is required.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="lastName">Last Name</label>\n          <input type="text" id="lastName" name="lastName" class="form-control" ng-model="vm.credentials.lastName" placeholder="Last Name" required>\n          <div ng-messages="vm.userForm.lastName.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Last name is required.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="email">Email</label>\n          <input type="email" id="email" name="email" class="form-control" ng-model="vm.credentials.email" placeholder="Email" lowercase required>\n          <div ng-messages="vm.userForm.email.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Email address is required.</p>\n            <p class="help-block error-text" ng-message="email">Email address is invalid.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="username">Username</label>\n          <input type="text" id="username" name="username" class="form-control" ng-model="vm.credentials.username" ng-pattern="vm.usernameRegex" placeholder="Username" lowercase required>\n          <div ng-messages="vm.userForm.username.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Username is required.</p>\n            <p class="help-block error-text" ng-message="pattern">Please enter a valid username: 3+ characters long, non restricted word, characters "_-.", no consecutive dots, does not begin or end with dots, letters a-z and numbers 0-9.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="password">Password</label>\n            <input type="password" id="password" name="password" class="form-control" ng-model="vm.credentials.password" placeholder="Password" uib-popover="{{vm.getPopoverMsg()}}" popover-trigger="outsideClick" password-validator required>\n          <div ng-messages="vm.userForm.password.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Password is required.</p>\n            <div ng-repeat="passwordError in passwordErrors">\n              <p class="help-block error-text" ng-show="vm.userForm.password.$error.requirements">{{passwordError}}</p>\n            </div>\n          </div>\n        </div>\n        <div class="form-group" ng-show="!vm.userForm.password.$error.required">\n          <label>Password Requirements</label>\n          <uib-progressbar value="requirementsProgress" type="{{requirementsColor}}"><span style="color:white; white-space:nowrap;">{{requirementsProgress}}%</span></uib-progressbar>\n        </div>\n        <div class="text-center form-group">\n          <button type="submit" class="btn btn-primary">Sign up</button>\n          &nbsp; or&nbsp;\n          <a ui-sref="authentication.signin" class="show-signup">Sign in</a>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n'), $templateCache.put("modules/users/client/views/settings/change-password.client.view.html", '<section class="row">\n  <div class="col-xs-offset-1 col-xs-10 col-md-offset-4 col-md-4">\n    <form name="vm.passwordForm" ng-submit="vm.changeUserPassword(vm.passwordForm.$valid)" class="signin" novalidate autocomplete="off">\n      <fieldset>\n        <div class="form-group" show-errors>\n          <label for="currentPassword">Current Password</label>\n          <input type="password" id="currentPassword" name="currentPassword" class="form-control" ng-model="vm.passwordDetails.currentPassword" placeholder="Current Password" required autofocus>\n          <div ng-messages="vm.passwordForm.currentPassword.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Your current password is required.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="newPassword">New Password</label>\n          <input type="password" id="newPassword" name="newPassword" class="form-control" ng-model="vm.passwordDetails.newPassword" placeholder="New Password" uib-popover="{{vm.getPopoverMsg()}}" uib-popover-trigger="focus" password-validator required>\n          <div ng-messages="vm.passwordForm.newPassword.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Enter a new password.</p>\n            <div ng-repeat="passwordError in passwordErrors">\n              <p class="help-block error-text" ng-show="vm.passwordForm.newPassword.$error.requirements">{{passwordError}}</p>\n            </div>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="verifyPassword">Verify Password</label>\n          <input type="password" id="verifyPassword" name="verifyPassword" class="form-control" ng-model="vm.passwordDetails.verifyPassword" placeholder="Verify Password" password-verify="vm.passwordDetails.newPassword" required>\n          <div ng-messages="vm.passwordForm.verifyPassword.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Verify your new password.</p>\n            <p class="help-block error-text" ng-show="vm.passwordForm.verifyPassword.$error.passwordVerify">Passwords do not match.</p>\n          </div>\n        </div>\n        <div class="form-group" ng-show="!vm.passwordForm.newPassword.$error.required">\n          <label>Password Requirements</label>\n          <uib-progressbar value="requirementsProgress" type="{{requirementsColor}}"><span style="color:white; white-space:nowrap;">{{requirementsProgress}}%</span></uib-progressbar>\n        </div>\n        <div class="text-center form-group">\n          <button type="submit" class="btn btn-primary">Save Password</button>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</section>\n'), $templateCache.put("modules/users/client/views/settings/change-profile-picture.client.view.html", '<section class="row">\n  <div class="col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-4">\n    <form class="signin form-horizontal">\n      <fieldset>\n        <div class="form-group text-center">\n          <img ngf-src="vm.fileSelected ? picFile : \'/\' + vm.user.profileImageURL" alt="{{vm.user.displayName}}" class="img-thumbnail user-profile-picture" ngf-drop>\n        </div>\n        <div ng-show="vm.loading" class="form-group text-center">\n          <img ng-src="/modules/core/client/img/loaders/loader.gif" height="50" width="50" alt="Loading image...">\n        </div>\n        <div ng-show="!vm.fileSelected" class="text-center form-group">\n          <button class="btn btn-default btn-file" ngf-select="(vm.fileSelected = true) && (vm.loading = false)" ng-model="picFile" accept="image/*" ngf-before-model-change="vm.loading = true" ngf-resize="{width: 400}" ngf-resize-if="$width > 400 || $height > 400">Select Picture</button>\n        </div>\n        <div ng-show="vm.fileSelected" class="text-center form-group">\n          <button class="btn btn-primary" ng-click="vm.upload(picFile)">Use This Picture</button>\n          <button class="btn btn-default" ng-click="vm.fileSelected = false">Cancel</button>\n        </div>\n        <div ng-show="vm.fileSelected" class="progress text-center">\n          <div class="progress-bar" role="progressbar" aria-valuenow="{{vm.progress}}" aria-valuemin="0" aria-valuemax="100" style="width:{{vm.progress}}%" ng-bind="vm.progress + \'%\'">\n            <span class="sr-only">{{vm.progress}}% Complete</span>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</section>\n'), $templateCache.put("modules/users/client/views/settings/edit-profile.client.view.html", '<section class="row">\n  <div class="col-xs-offset-1 col-xs-10 col-md-offset-4 col-md-4">\n    <form name="vm.userForm" ng-submit="vm.updateUserProfile(vm.userForm.$valid)" class="signin" novalidate autocomplete="off">\n      <fieldset>\n        <div class="form-group" show-errors>\n          <label for="firstName">First Name</label>\n          <input type="text" id="firstName" name="firstName" class="form-control" ng-model="vm.user.firstName" placeholder="First Name" required autofocus>\n          <div ng-messages="vm.userForm.firstName.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">First name is required.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="lastName">Last Name</label>\n          <input type="text" id="lastName" name="lastName" class="form-control" ng-model="vm.user.lastName" placeholder="Last Name" required>\n          <div ng-messages="vm.userForm.lastName.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Last name is required.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="email">Email</label>\n          <input type="email" id="email" name="email" class="form-control" ng-model="vm.user.email" placeholder="Email" lowercase required>\n          <div ng-messages="vm.userForm.email.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Email address is required.</p>\n            <p class="help-block error-text" ng-message="email">Email address is invalid.</p>\n          </div>\n        </div>\n        <div class="form-group" show-errors>\n          <label for="username">Username</label>\n          <input type="text" id="username" name="username" class="form-control" ng-model="vm.user.username" placeholder="Username" lowercase required>\n          <div ng-messages="vm.userForm.username.$error" role="alert">\n            <p class="help-block error-text" ng-message="required">Username is required.</p>\n          </div>\n        </div>\n        <div class="text-center form-group">\n          <button type="submit" class="btn btn-primary">Save Profile</button>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</section>\n'), $templateCache.put("modules/users/client/views/settings/manage-social-accounts.client.view.html", '<section class="row">\n  <h3 class="col-md-12 text-center" ng-show="vm.hasConnectedAdditionalSocialAccounts()">Connected social accounts:</h3>\n  <div class="col-md-12 text-center">\n    <!-- If the user\'s provider field (primary) is a social account, show it here -->\n    <div ng-if="vm.user.provider !== \'local\'" class="social-account-container">\n      <img ng-src="/modules/users/client/img/buttons/{{vm.user.provider}}.png">\n      <i class="glyphicon glyphicon-check text-success user-primary-account" data-toggle="popover" title="Primary: {{vm.user.provider}}"></i>\n    </div>\n    <div ng-repeat="(providerName, providerData) in vm.user.additionalProvidersData" class="social-account-container">\n      <a href ng-click="vm.removeUserSocialAccount(providerName)">\n        <img class="social-button" ng-src="/modules/users/client/img/buttons/{{::providerName}}.png">\n        <span class="btn btn-danger btn-add-remove-account">\n          <i class="glyphicon glyphicon-trash"></i>\n        </span>\n      </a>\n    </div>\n  </div>\n  <h3 class="col-md-12 text-center" ng-show="!vm.hasConnectedAdditionalSocialAccounts()">Unconnected social accounts:</h3>\n  <div class="col-md-12 text-center">\n    <div class="social-account-container" ng-hide="vm.isConnectedSocialAccount(\'facebook\')">\n      <a href="" ng-click="vm.callOauthProvider(\'/api/auth/facebook\')">\n        <img class="social-button" ng-src="/modules/users/client/img/buttons/facebook.png">\n        <span class="btn btn-success btn-add-remove-account">\n          <i class="glyphicon glyphicon-plus"></i>\n        </span>\n      </a>\n    </div>\n    <div class="social-account-container" ng-hide="vm.isConnectedSocialAccount(\'twitter\')">\n      <a href="" ng-click="vm.callOauthProvider(\'/api/auth/twitter\')">\n        <img class="social-button" ng-src="/modules/users/client/img/buttons/twitter.png">\n        <span class="btn btn-success btn-add-remove-account">\n          <i class="glyphicon glyphicon-plus"></i>\n        </span>\n      </a>\n    </div>\n    <div class="social-account-container" ng-hide="vm.isConnectedSocialAccount(\'google\')">\n      <a href="" ng-click="vm.callOauthProvider(\'/api/auth/google\')">\n        <img class="social-button" ng-src="/modules/users/client/img/buttons/google.png">\n        <span class="btn btn-success btn-add-remove-account">\n          <i class="glyphicon glyphicon-plus"></i>\n        </span>\n      </a>\n    </div>\n    <div class="social-account-container" ng-hide="vm.isConnectedSocialAccount(\'linkedin\')">\n      <a href="" ng-click="vm.callOauthProvider(\'/api/auth/linkedin\')">\n        <img class="social-button" ng-src="/modules/users/client/img/buttons/linkedin.png">\n        <span class="btn btn-success btn-add-remove-account">\n          <i class="glyphicon glyphicon-plus"></i>\n        </span>\n      </a>\n    </div>\n    <div class="social-account-container" ng-hide="vm.isConnectedSocialAccount(\'github\')">\n      <a href="" ng-click="vm.callOauthProvider(\'/api/auth/github\')">\n        <img class="social-button" ng-src="/modules/users/client/img/buttons/github.png">\n        <span class="btn btn-success btn-add-remove-account">\n          <i class="glyphicon glyphicon-plus"></i>\n        </span>\n      </a>\n    </div>\n    <div class="social-account-container" ng-hide="vm.isConnectedSocialAccount(\'paypal\')">\n      <a href="" ng-click="vm.callOauthProvider(\'/api/auth/paypal\')">\n        <img class="social-button" ng-src="/modules/users/client/img/buttons/paypal.png">\n        <span class="btn btn-success btn-add-remove-account">\n          <i class="glyphicon glyphicon-plus"></i>\n        </span>\n      </a>\n    </div>\n  </div>\n</section>\n'), $templateCache.put("modules/users/client/views/settings/settings.client.view.html", '<section>\n  <div class="page-header">\n    <h1>Settings</h1>\n  </div>\n  <div class="row">\n    <nav class="col-sm-3 col-md-3">\n      <ul class="nav nav-pills nav-stacked">\n        <li ui-sref-active="active">\n          <a ui-sref="settings.profile">Edit Profile</a>\n        </li>\n        <li ui-sref-active="active">\n          <a ui-sref="settings.picture">Change Profile Picture</a>\n        </li>\n        <li ui-sref-active="active" ng-show="vm.user.provider === \'local\'">\n          <a ui-sref="settings.password">Change Password</a>\n        </li>\n        <li ui-sref-active="active">\n          <a ui-sref="settings.accounts">Manage Social Accounts</a>\n        </li>\n      </ul>\n    </nav>\n    <div class="col-sm-9 col-md-8 settings-view">\n      <div ui-view></div>\n    </div>\n  </div>\n</section>\n')
    }
    angular.module("core").run(templates), templates.$inject = ["$templateCache"]
}();