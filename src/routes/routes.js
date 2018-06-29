import * as Actions from '../store/actions';
import { injectAsyncCall } from '../helpers/caller';

var appRouter = function(app) {
    app.get('/', function(req, res) {
        res.send('Hello World');
    });

    app.get('/status/:agent', function(req, res) {
        let user = app.store.getState().getIn(['users', req.params.agent]);
        return res.send(user ? user.toJS() : 'Sesión no iniciada');
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
        return res.send(
            app.store
                .getState()
                .get('campaings')
                .toArray(),
        );
    });

    app.get('/campaing/login/:agent/:campaing', function(req, res) {
        app.store.dispatch(
            Actions.loginCampaing(req.params.agent, req.params.campaing),
        );
        injectAsyncCall(app.store, req.params.agent, 10);
        return res.send('Conexión en campaña iniciada....');
    });

    app.get('/campaing/logout/:agent/:campaing', function(req, res) {
        app.store.dispatch(
            Actions.logoutCampaing(req.params.agent, req.params.campaing),
        );
        return res.send('Desconexión en campaña iniciada....');
    });
};

export default appRouter;
