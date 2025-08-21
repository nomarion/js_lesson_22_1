export default class OldDataDto {
    static ERROR = `Поле не заполнено или неверный тип данных! Поле:`;
    #success; // полученные заказы "забор"
    #grossIncome; // валовый доход
    #expense;   // расходы
    #operatingProfit; // операционная прибыль
    #staticExpense; // cтатический расход
    #dynamicExpense; // динамический расход
    #oneTimeExpense; // разовый расход
    #returnNpExpense; // возвраты НП расход
    #commissionNvExpense; // комиссия Новапей расход
    #returnUpExpense; // возвраты УКР расход
    #adsExpense; // реклама Расход
    #costPrice // себестоимость


    setSuccess(value) {
        this.#success = this.setter(value, 'Success');
        return this;
    }

    setGrossIncome(value) {
        this.#grossIncome = this.setter(value, 'GrossIncome');
        return this;
    }

    setExpense(value) {
        this.#expense = this.setter(value, 'expense');
        return this;
    }

    setOperatingProfit(value) {
        this.#operatingProfit = this.setter(value, 'OperatingProfit');
        return this;
    }

    setStaticExpense(value) {
        this.#staticExpense = this.setter(value, 'StaticExpense');
        return this;
    }

    setDynamicExpense(value) {
        this.#dynamicExpense = this.setter(value, 'DynamicExpense');
        return this;
    }

    setOneTimeExpense(value) {
        this.#oneTimeExpense = this.setter(value, 'OneTimeExpense');
        return this;
    }

    setReturnNpExpense(value) {
        this.#returnNpExpense = this.setter(value, 'ReturnNpExpense');
        return this;
    }

    setCommissionNvExpense(value) {
        this.#commissionNvExpense = this.setter(value, 'CommissionNvExpense');
        return this;
    }

    setReturnUpExpense(value) {
        this.#returnUpExpense = this.setter(value, 'ReturnUpExpense');
        return this;
    }

    setAdsExpense(value) {
        this.#adsExpense = this.setter(value, 'AdsExpense');
        return this;
    }

    setCostPrice(value) {
        this.#costPrice = this.setter(value, 'CostPrice');
        return this;
    }

    get success() {
        return this.#success;
    }

    get grossIncome() {
        return this.#grossIncome;
    }

    get expense() {
        return this.#expense;
    }

    get operatingProfit() {
        return this.#operatingProfit;
    }

    get staticExpense() {
        return this.#staticExpense;
    }

    get dynamicExpense() {
        return this.#dynamicExpense;
    }

    get oneTimeExpense() {
        return this.#oneTimeExpense;
    }

    get returnNpExpense() {
        return this.#returnNpExpense;
    }

    get commissionNvExpense() {
        return this.#commissionNvExpense;
    }

    get returnUpExpense() {
        return this.#returnUpExpense;
    }

    get adsExpense() {
        return this.#adsExpense;
    }

    get costPrice() {
        return this.#costPrice;
    }

    setter(value, inputName) {
        if (value?.trim() !== '' && Number.parseInt(value?.trim()) > -1) {
            return Number.parseInt(value?.trim());
        }
        throw new Error(`${OldDataDto.ERROR} ${inputName}`)
    }

    toObject() {
        return {
            success: this.success,
            grossIncome: this.grossIncome,
            expense: this.expense,
            operatingProfit: this.operatingProfit,
            staticExpense: this.staticExpense,
            dynamicExpense: this.dynamicExpense,
            oneTimeExpense: this.oneTimeExpense,
            returnNpExpense: this.returnNpExpense,
            commissionNvExpense: this.commissionNvExpense,
            returnUpExpense: this.returnUpExpense,
            adsExpense: this.adsExpense,
            costPrice: this.costPrice
        }
    }

}