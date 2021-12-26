const Todo = require('../models/todo') ; 

// to display all tasks 
module.exports.home= function(req, res){
    // fetching all tasks from db
    Todo.find({}, function(err, todos){
        if(err){
            console.log('Error in fetching todos from DB');
            return;
        }
        // Sending fetched data to home.ejs
        return res.render('home',{
            title : 'To Do' ,
            todo_list : todos       
        });
    });
}

// to create new tasks after form submission
module.exports.create= (req, res ) => {
    // console.log(req.body.description,' ',req.body.date ,' ',req.body.category,' ',req.body.name);
    Todo.create({
        
        desc: req.body.description ,
        deadLine: req.body.date ,
        category: req.body.category ,
        createdBy: req.body.name
    }, function(err, newTodo){
        if(err){
            console.log('Error in creating to do! ', err);
             return;
        }
        console.log('****', newTodo);
        return res.redirect('back');
    });
}


// To delete selected tasks 
module.exports.delete = (req, res) => {
    var id = req.query;
    var count = Object.keys(id).length;
    for(let i = 0 ; i < count ; i++){
        Todo.findByIdAndDelete(Object.keys(id)[i], function(err){
            if(err){
                console.log('Error in deleting task ');
            }
        });

    }
    return res.redirect('back');
}