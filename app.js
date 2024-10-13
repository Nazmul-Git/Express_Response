const express=require('express');
const app=express();

app.set('view engine', 'ejs');

// render
app.get('/about', (req, res)=>{
    console.log(res.headersSent); // false
    res.render('pages/about', {
        name: 'Bangladesh',
    });
    console.log(res.headersSent); // true
})

// format
app.get('/provide', (req, res)=>{
    res.format({
        'text/plain' : ()=>{
            res.send('Your text is here...');
        },

        'text/html' : ()=>{
            res.render('pages/about', {
                name: 'Bangladesh',
            });
        },

        'application/json' : ()=>{
            res.json({
                message: 'Information'
            });
        },

        default:()=>{
            res.status(406).send('Not acceptable')
        }
    })
})

app.get('/service', (req, res)=>{
    res.send('Your services.');
})


app.get('/user', (req, res)=>{
    // cookie
    // res.cookie('cookie', 'save password', { 
    //     domain: '.example.com', 
    //     path: '/admin', 
    //     secure: true 
    // });

    // location
    // res.location('/service'); //check on res headers

    // redirect
    // res.redirect('/service');

    // set & get
    res.set('user', 'Nazmul');
    console.log(res.get('user')); //Nazmul
    res.end();
})

app.listen(3000, ()=>{
    console.log('Application running on port 3000')
});