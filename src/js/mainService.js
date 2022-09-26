import '@scss/mainService';
import webpackIcon from '@img/webpack_icon.png';

export default class MainService {
    constructor({ targetEl }) {
        this.targetEl = targetEl;
        this.dataList = '';
    }

    init(dataList) {
        this.dataList = dataList.flat(2).join('');
        return this.render(this.dataList);
    }

    render(data) {
        return `<span>${data}</span><br/><img src=${webpackIcon}></img>`;
    }
}
