import * as Actions from '../store/actions';

var appRouter = function(app) {
    app.get('/', function(req, res) {
        res.send('Hello World');
    });

    app.get('/status/:agent', function(req, res) {
        let user = app.store.getState().users[req.params.agent];
        return res.send(user || 'Sesión no iniciada');
    });

    app.get('/connect/:agent/:pass/:station/:host', function(req, res) {
        let action = Actions.login(
            req.params.agent,
            req.params.pass,
            req.params.station,
            req.params.host,
        );
        app.store.dispatch(action);
        return res.send('Solicitud de inicio de sesión iniciada...');
    });

    app.get('/disconnect/:agent', function(req, res) {
        app.store.dispatch(Actions.logout(req.params.agent));
        return res.send('Solicitud de desconexión iniciada...');
    });

    app.get('/campaing/list/:agent', function(req, res) {
        return res.send(app.store.getState().campaigns);
    });
};

export default appRouter;
