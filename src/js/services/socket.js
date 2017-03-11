angular.module('RDash')

    .service('socketS',function(){
        // var connectSocket = io.connect('ws://138.68.14.54:5000/api');
      var connectSocket = io.connect('ws://106.75.145.227:5000/api');
        // var connectSocket = io.connect('ws://192.168.1.122:5000/api');
      this.getSocket = function(){
        return connectSocket;
      }
      var messageMap = {};
      var robotMsg  = {};
      var userList = [];
      var newUserList=[];
      this.id = '';
    this.getMap = function(){
      return messageMap;
    }
    this.setRobotMsg = function(value){
      robotMsg = value;
    }
    this.getRobotMsg = function(){
        return robotMsg;
    }
    this.setUser = function(value){
      userList = value;
    }
    this.getUser = function(){
        return userList;
    }
    this.getNewUser=function(){
      return newUserList;
    }
  })
