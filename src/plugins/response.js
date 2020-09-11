const show = function(status,response){
    if(status){
        return {
            "status":status,
            "body": response.data
        }
    }else{
        return {
            "status":status,
            "body": response.response.data
        }
    }
}

module.exports = {
    show
}