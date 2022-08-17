import { useState } from 'react';
import dataCenterStyle from './dataCenter.module.scss';
import Header from './header';
import Options from './options';
import Condition from './condition';
import List from './list';
import { ConditionContext } from "./context/index"

function App() {
  const [condition, setCondition] = useState({});
  const addCondition = (key, value) => {
    setCondition({
      ...condition,
      [key]: value
    })
  }
  const removeCondition = (key) => {
    let obj = {};
    Object.keys(condition).forEach(item => {
      if (item !== key) {
        obj[item] = condition[item];
      }
    })
    setCondition(obj);
  }
  const clearCondition = () => {
    setCondition({})
  }
  return (
    <ConditionContext.Provider value={{ condition, addCondition, removeCondition, clearCondition }} className={dataCenterStyle.container}>
      <Header></Header>
      <div className={dataCenterStyle.content}>
        <Options />
        <Condition />
        <List />
      </div>
    </ConditionContext.Provider>
  );
}

export default App;
