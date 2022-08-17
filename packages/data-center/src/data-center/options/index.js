import { Select } from 'antd';
import React, { useContext} from 'react';
import optionsStyle from './options.module.scss';
import { ConditionContext } from "../context/index"

const { Option } = Select;

const optionList = {
    postId: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
    name: [{ value: "alias odio sit" }, { value: "provident id voluptas" }, { value: "voluptas deleniti ut" }, { value: "consequatur harum magnam" }],
    email: [{ value: "Mariana_Orn@preston.org" }, { value: "Nikita@garfield.biz" }, { value: "Alia@addison.org" }, { value: "Donnie@alfreda.biz" }],
}

const App = () => {
    const { condition, addCondition } = useContext(ConditionContext);
    const handleChange = (key, value) => {
        addCondition(key, value);
    }

    return (<ul className={optionsStyle.container}>
        <li>
            <span className={optionsStyle.label}>PostId:</span>
            <Select
                value={condition.postId}
                style={{
                    width: 200,
                }}
                onChange={(v) => {handleChange("postId", v)}}
            >
                {optionList.postId.map((item) => (<Option key={item.value} value={item.value}>{item.value}</Option>))}
            </Select>
        </li>
        <li>
            <span className={optionsStyle.label}>Name:</span>
            <Select
                value={condition.name}
                style={{
                    width: 200,
                }}
                onChange={(v) => {handleChange("name", v)}}
            >
                {optionList.name.map((item) => (<Option key={item.value} value={item.value}>{item.value}</Option>))}
            </Select>
        </li>
        <li>
            <span className={optionsStyle.label}>Email:</span>
            <Select
                value={condition.email}
                style={{
                    width: 200,
                }}
                onChange={(v) => {handleChange("email", v)}}
            >
                {optionList.email.map((item) => (<Option key={item.value} value={item.value}>{item.value}</Option>))}
            </Select>
        </li>
    </ul>);
};

export default App;
