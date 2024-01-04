import { render } from '@testing-library/react';
import React from 'react';
import CreateAccountForm from './admin/CreateAccountForm.js';

function CreateAccount(){
    render(
       <CreateAccountForm />

       /*
       
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/app/dashboard" />
            </Route>
            <Route path="/app" component={CustomerRootPage}></Route>
            <Route exact path="/login" component={AuthPage}></Route>
            <Route exact path="/registration" component={AuthPage}></Route>
            <Route exact path="/password-reset-account-verify" component={AuthPage}></Route>
            <Route exact path="/password-reset" component={AuthPage}></Route>
            {/* Admin Routers */
            /*
            }
            <Route path="/admin" component={RootPage}></Route>
            <Route exact path="" component={NotFoundPage} />
          </Switch>

*/
    );

};
export default CreateAccount;