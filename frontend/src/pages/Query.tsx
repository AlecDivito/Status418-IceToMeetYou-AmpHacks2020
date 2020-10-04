import React from 'react';

interface IData {
    url: string,
}

interface IProps {
    data: IData,
    onCompleted: (id: number[]) => void;
}

const Query = (props: IProps) => {
    return <input type="text" />
}

export default Query;