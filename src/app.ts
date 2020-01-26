import * as bodyParser from "body-parser";
import * as Express from "express";

const app = Express();
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("こんにちは！世界！");
});

interface User {
    category:string;
    name:string;
    done:boolean;
}

const users:User[]=[
    {
        category:"Private",
        name:"太郎",
        done:false,
    },
];

app.get('/users',(req,res) => {
    res.json(users);
});

app.post("/users",(req,res) => {
    const received = req.body;
    if ("category" in received && "name" in received && "done" in received) {
        const newUser: User = {
            category: received.category,
            name: received.name,
            done: received.done
        };
        users.push(newUser);
        console.log('Add:',newUser);
        res.send("user added");
    } else {
        res.status(400).send("Parameters are invalid.");
    }
});

export {app};