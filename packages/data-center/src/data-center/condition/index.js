import React, { useContext } from 'react';
import conditionStyle from './condition.module.scss';
import { Tag } from "antd";
import {
    DeleteOutlined,
} from '@ant-design/icons';

import { ConditionContext } from "../context/index"

export default function ConditionComp () {
    const { condition, removeCondition, clearCondition } = useContext(ConditionContext);
    const handleClose = (tag) => {
        removeCondition(tag);
    }
    const clearAll = () => {
        clearCondition()
    }
    return (
        <div className={conditionStyle.container}>
            <div className={conditionStyle.tips}>Condition Selected:</div>
            <div className={conditionStyle.tags}>
                {Object.keys(condition).map((key) => (condition[key] ? <Tag key={key} closable onClose={() => { handleClose(key) }}>{`${key}: ${condition[key]}`}</Tag> : null))}
            </div>
            <div className={conditionStyle.clear} onClick={clearAll}><DeleteOutlined />Clear All</div>
        </div>
    )
}
