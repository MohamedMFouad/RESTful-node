const routes = (app) => {
    app.route('/contact')
    .get((req, res, next)=>{
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next(); 
    }, (req, res, next)=>{
        res.send('Get request successfull!!!');
    })
    .post((req, res)=>{
        res.send('Post request sucessful!!!')
    });
    app.route('/contact/:contactId')
    .put((req, res)=>{
        res.send('put request sucessful!!')
    })
    .delete((req, res)=>{
        res.send('delete request sucessful!!')
    });
}
export default routes;