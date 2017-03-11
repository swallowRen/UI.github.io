angular.module('RDash')
    .service('getChatS',function(){
        var connectChatData = io.connect('ws://192.168.1.188:5000/api');
        this.getChatData = function(){
            return connectChatData;
        }
    })
