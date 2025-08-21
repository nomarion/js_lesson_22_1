import OldDataDto from "./old-data-dto";

export default class NewDataDto {
    #days; // данные за кл.дней
    #crmProfitBefore; // прибыль по срм до
    #crmProfitAfter; // прибыль по срм после
    #adsAfter; // рекламный расход до
    #adsBefore; // рекламный расход после


    setDays(value) {
        this.#days = this.setter(value, 'Days');
        return this;
    }

    setCrmProfitBefore(value) {
        this.#crmProfitBefore = this.setter(value, 'CrmProfitBefore');
        return this;
    }

    setCrmProfitAfter(value) {
        this.#crmProfitAfter = this.setter(value, 'CrmProfitAfter');
        return this;
    }

    setAdsAfter(value) {
        this.#adsAfter = this.setter(value, 'AdsAfter');
        return this;
    }

    setAdsBefore(value) {
        this.#adsBefore = this.setter(value, 'AdsBefore');
        return this;
    }

    get days() {
        return this.#days;
    }

    get crmProfitBefore() {
        return this.#crmProfitBefore;
    }

    get crmProfitAfter() {
        return this.#crmProfitAfter;
    }

    get adsAfter() {
        return this.#adsAfter;
    }

    get adsBefore() {
        return this.#adsBefore;
    }

    toObject() {
        return {
            days: this.#days,
            crmProfitBefore: this.#crmProfitBefore,
            crmProfitAfter: this.#crmProfitAfter,
            adsAfter: this.#adsAfter,
            adsBefore: this.#adsBefore
        }
    }

    setter(value, inputName) {
        if (value?.trim() !== '' && Number.parseInt(value?.trim()) > -1) {
            return Number.parseInt(value?.trim());
        }
        throw new Error(`${OldDataDto.ERROR} ${inputName}`)
    }

}