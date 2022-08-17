import { Button, Table } from 'antd';
import React, { Fragment, useState, useContext, useEffect } from 'react';
import listStyle from "./list.module.scss";
import { ConditionContext } from "../context/index"

const columns = [
    {
        title: 'PostId',
        dataIndex: 'postId',
        key: 'postId',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Body',
        dataIndex: 'body',
        key: 'body',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (v) => (<Fragment>
            <a href="#!" onClick={() => handleOverview(v)}>Overview</a>
            <a href="#!" onClick={() => handleDownload(v)}>Download</a>
        </Fragment>),
    },
];
const handleOverview = (v) => {
    console.info(v);
}
const handleDownload = (v) => {
    console.info(v);
}

const App = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loadingBtnAll, setLoadingBtnAll] = useState(false);
    const [loadingBtnSelected, setLoadingBtnSelected] = useState(false);
    const [loadingList, setLoadingList] = useState(false);

    const downloadAll = () => {
        setLoadingBtnAll(true); // ajax request after empty completing

        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoadingBtnAll(false);
        }, 1000);
    };

    const downloadSelected = () => {
        setLoadingBtnSelected(true); // ajax request after empty completing
        console.info("selectedRowKeys:", rowSelection.selectedRowKeys);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoadingBtnSelected(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const { condition } = useContext(ConditionContext);
    useEffect(() => {
        setLoadingList(true);
        const baseUrl = "https://jsonplaceholder.typicode.com/comments"
        const params = Object.keys(condition).reduce((prev, cur) => prev += `${cur}=${condition[cur]}&`, "?")
        fetch(baseUrl + params).then(response => response.json())
            .then(result => {
                setData(result);
            })
            .catch(error => {
                console.error('Error:', error);
            }).finally(() => { setLoadingList(false) });
    }, [condition]);

    const [data, setData] = useState([]);

    return (
        <div>
            <div className={listStyle.tools}
                style={{
                    marginBottom: 16,
                }}
            >
                <Button type="primary" onClick={downloadAll} disabled={!data.length} loading={loadingBtnAll}>
                    Download All
                </Button>
                <Button type="primary" onClick={downloadSelected} disabled={!hasSelected} loading={loadingBtnSelected}>
                    Download Selected
                </Button>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table rowKey={record => record.id + ''} rowSelection={rowSelection} columns={columns} dataSource={data} loading={loadingList} />
        </div>
    );
};

export default App;