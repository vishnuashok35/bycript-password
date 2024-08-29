const bcrypt = require('bcrypt');
const users = [

]


 const signup = async (req, res)=>{
    
    
    const {username, password} = req.body;
    const hash = await bcrypt.hashSync(password, 13);
     users.push({
        username,
        password: hash
    })
    console.log(users);
   

    res.status(200).send('success');
    

};

 const login = async (req, res)=>{
    const {username, password} = req.body;
    const user = users.find((u)=>u.username === username)
    
    if(!user) {
        res.send("wrong username")
        return;
    }
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid){
        res.send("wrong password");
        return;
    }
   

    res.send("successfully login");
}

module.exports = {
    signup,
    login,

};


   
