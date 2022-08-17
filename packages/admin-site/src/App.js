import {WaterForm} from '@mono-repo-demo/common';
import {MyTable} from '@mono-repo-demo/mytable';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>管理员站点</h1>
      <WaterForm />
      <h3>数据列表</h3>
      <MyTable />
    </div>
  );
}

export default App;
