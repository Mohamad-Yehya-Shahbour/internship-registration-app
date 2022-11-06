import React from 'react';


export default class Services {

    static baseUrl = 'http://localhost:5272';

    static Token = '';

    static NotificationCenter = function () {
        return {
            addNotification: function (title, text) {
                window.$.gritter.add({
                    title: title,
                    text: text
                });
            }
        }
    }();

    static AjaxCalls = function (){

        function GenericCall(path, method, dataToAdd){
            let url = Services.baseUrl + path
            let data = JSON.stringify(dataToAdd)
            let capitalizedMethod = method.toUpperCase()
            let bearerToken = `Bearer ${localStorage.getItem("token")}`

            //console.log(bearerToken, "bearerToken in call");

            return window.$.ajax({
                type: capitalizedMethod,
                datatype: "json",
                contentType: "application/json; charset=utf-8",
                url: url,
                data: data,
                headers: {"Authorization": bearerToken},
                success: function(data) {
                    console.log(data, "data");
                    return data
                },
                error: function(error) {
                    console.log(error, "error");
                }
            });
        }

        return{
            Get : function (path, dataToAdd){
                return GenericCall(path, "Get", dataToAdd)
            },
            Post : function (path, dataToAdd){
                return GenericCall(path, "Post", dataToAdd)
            },
            Put : function (path, dataToAdd){
                return GenericCall(path, "Put", dataToAdd)
            },
            Delete : function (path, dataToAdd){
                return GenericCall(path, "Delete", dataToAdd)
            },

        }
    }()
}
