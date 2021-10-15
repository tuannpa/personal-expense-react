import Dashboard from './components/dashboard/dashboard';
import { Switch, Route } from 'react-router-dom';
import Expense from './components/expense/expense';
import Header from './components/common/header';
import Profile from './components/user/profile';

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route exact path='/user' component={Profile}></Route>
        <Route exact path='/expense' component={Expense}></Route>
      </Switch>
    </>
  );
}

export default App;
