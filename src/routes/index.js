import urlRouter from './url';


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('<h1 style="text-align: center; margin-top: 50px;">Welcome to Shorten URL Service Page<br /><i>created by Leo</i></h1>');
    })
    app.use('/url', urlRouter);
};