'use strict'

export default class SaveService {
    #dataOld = JSON.parse(localStorage.getItem('oldData')) ?? {};
    #dataNew = JSON.parse(localStorage.getItem('newData')) ?? {};

    save(obj, type = 'old') {
        if(type === 'new') {
            localStorage.setItem('newData', JSON.stringify(obj.toObject()));
            this.#dataNew = obj.toObject();
            return;
        }
        localStorage.setItem('oldData', JSON.stringify(obj.toObject()));
        this.#dataOld = obj.toObject();
    }

    getData(type = 'old') {
        if(type === 'new') {
            return JSON.parse(localStorage.getItem('newData'));
        }
        return JSON.parse(localStorage.getItem('oldData'));
    }

    setInputData() {
        if(Object.keys(this.#dataOld).length > 0) {
            document.body.querySelector('input[name="success"]').value = this.#dataOld.success ?? 0;
            document.body.querySelector('input[name="grossIncome"]').value = this.#dataOld.grossIncome ?? 0;
            document.body.querySelector('input[name="expense"]').value = this.#dataOld.expense ?? 0;
            document.body.querySelector('input[name="operatingProfit"]').value = this.#dataOld.operatingProfit ?? 0;
            document.body.querySelector('input[name="staticExpense"]').value = this.#dataOld.staticExpense ?? 0;
            document.body.querySelector('input[name="dynamicExpense"]').value = this.#dataOld.dynamicExpense ?? 0;
            document.body.querySelector('input[name="oneTimeExpense"]').value = this.#dataOld.oneTimeExpense ?? 0;
            document.body.querySelector('input[name="returnNpExpense"]').value = this.#dataOld.returnNpExpense ?? 0;
            document.body.querySelector('input[name="commissionNvExpense"]').value = this.#dataOld.commissionNvExpense ?? 0;
            document.body.querySelector('input[name="returnUpExpense"]').value = this.#dataOld.returnUpExpense ?? 0;
            document.body.querySelector('input[name="adsExpense"]').value = this.#dataOld.adsExpense ?? 0;
            document.body.querySelector('input[name="costPrice"]').value = this.#dataOld.costPrice ?? 0;
        }
        if(Object.keys(this.#dataNew).length > 0) {
            document.body.querySelector('input[name="days"]').value = this.#dataNew.days ?? 0;
            document.body.querySelector('input[name="profitBefore"]').value = this.#dataNew.crmProfitBefore ?? 0;
            document.body.querySelector('input[name="profitAfter"]').value = this.#dataNew.crmProfitAfter ?? 0;
            document.body.querySelector('input[name="adsBefore"]').value = this.#dataNew.adsBefore ?? 0;
            document.body.querySelector('input[name="adsAfter"]').value = this.#dataNew.adsAfter ?? 0;
        }

    }
}