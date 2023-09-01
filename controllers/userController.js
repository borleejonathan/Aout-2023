let User = require('../models/imcModel');

let imcList = [];

exports.imcList = function (req,res) {
    // let user = new User("Dupond", "Paul");
    // userList.push(user);
    res.render('imcList.ejs', {history : imcList});
}

exports.imcFormAdd = function(req,res) {
    res.render('imcAdd.ejs', {idhistory:'-1', date:"", height:"", weight:""});
}

exports.imcNew = function(req,res) {
    let idhistory = req.body.idhistory;
    let date = req.body.date;
    let height = req.body.height;
    let weight = req.body.weight;
    //let imc = (weight/((height/100)**2));
    /*
    if (idhistory >= 0) {
        imcList[idhistory]["date"] = date;
        imcList[idhistory]["weight"] = weight;
    }
    */
    //else {
    let user = new User(date,height,weight);
    imcList.push(user);  
    //}  
    res.redirect('/user');
}

/*
exports.userShow = function(req,res) {
    let iduser = req.params.iduser;
    res.send('Hello ' + userList[iduser]["firstname"]);
}

exports.userUpdate = function(req,res) {
    let iduser = req.params.iduser;
    res.render('userAdd.ejs', {iduser: iduser, lastname: userList[iduser]["lastname"] , firstname: userList[iduser]["firstname"]});
}

exports.userRemove = function(req,res) {
    let iduser = req.params.iduser;
    userList.splice(iduser,1);

    res.redirect('/user');
}
*/