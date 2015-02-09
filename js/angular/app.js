(function(){
    angular
    .module("clock", [])
    .directive("dirClock", dirClock);
    function dirClock($interval){
        return {
            restrict: "E",
            templateUrl: "js/angular/dirClock.html",
            controllerAs: "dirClock",
            controller: function($scope, $interval){
                var dirClock = this;

                dirClock.setTime = setTime;
                dirClock.setTime();
                $interval(dirClock.setTime, 1000);

                function setTime(){
                    var clockTotal = new Date();
                    var clockers = {
                        sec: clockTotal.getSeconds(),
                        min: clockTotal.getMinutes(),
                        hour: clockTotal.getHours(),
                        month: clockTotal.getMonth(),
                        day: clockTotal.getDate(),
                        ofWeek: clockTotal.getDay()
                    };
                    switch (clockers.month){
                        case "00":
                        case 00:
                            clockers.month = "January";
                            break;
                        case "01":
                        case 01:
                            clockers.month = "February";
                            break;
                        case "02":
                        case 02:
                            clockers.month = "March";
                            break;
                        case "03":
                        case 03:
                            clockers.month = "April";
                            break;
                        case "04":
                        case 04:
                            clockers.month = "May";
                            break;
                        case "05":
                        case 05:
                            clockers.month = "June";
                            break;
                        case "06":
                        case 06:
                            clockers.month = "July";
                            break;
                        case "07":
                        case 07:
                            clockers.month = "August";
                            break;
                        case "08":
                        case 08:
                            clockers.month = "September";
                            break;
                        case "09":
                        case 09:
                            clockers.month = "October";
                            break;
                        case "10":
                        case 10:
                            clockers.month = "November";
                            break;
                        case "11":
                        case 11:
                            clockers.month = "December";
                            break;
                    }
                    switch (clockers.ofWeek){
                        case 1:
                            clockers.ofWeek = "Monday";
                            break;
                        case 2:
                            clockers.ofWeek = "Tuesday";
                            break;
                        case 3:
                            clockers.ofWeek = "Wednesday";
                            break;
                        case 4:
                            clockers.ofWeek = "Thursday";
                            break;
                        case 5:
                            clockers.ofWeek = "Friday";
                            break;
                        case 6:
                            clockers.ofWeek = "Saturday";
                            break;
                        case 0:
                            clockers.ofWeek = "Sunday";
                            break;
                    }
                    clockers.hour = clockers.hour % 12;
                    if(!clockers.hour){
                        clockers.hour = 12;
                    }

                    for(var key in clockers) {
                        if ((clockers[key] + "").length === 1 && key !== "day" && key !== "ofWeek" && key !== "hour") {
                            clockers[key] = "0" + clockers[key];
                        }
                    }
                    dirClock.sec = clockers.sec;
                    dirClock.min =  clockers.min;
                    dirClock.hour = clockers.hour;
                    dirClock.month = clockers.month;
                    dirClock.day = clockers.day;
                    dirClock.ofWeek = clockers.ofWeek;
                }


            },
            link: function(scope){
                var clockTotal = new Date();



                
            }
        }
    }
})();