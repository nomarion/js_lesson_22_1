'use strict';

import OldDataDto from './old-data-dto'
import SaveService from './service/save-service'
import NewDataDto from "./new-data-dto";
const saveService = new SaveService();

const eventClickOldDataButton = () => {
    const oldMontFormButton = document.body.querySelector('#oldMonth');
    oldMontFormButton.addEventListener('click', (event) => {
        event.preventDefault(); // чтобы форма не отправлялась
        const form = oldMontFormButton.closest('form'); // находим родительскую форму
        const formData = new FormData(form); // собираем данные формы
        const data = Object.fromEntries(formData.entries());
        try {
            const dto = new OldDataDto()
                .setSuccess(data.success)
                .setGrossIncome(data.grossIncome)
                .setExpense(data.expense)
                .setOperatingProfit(data.operatingProfit)
                .setStaticExpense(data.staticExpense)
                .setDynamicExpense(data.dynamicExpense)
                .setOneTimeExpense(data.oneTimeExpense)
                .setReturnNpExpense(data.returnNpExpense)
                .setCommissionNvExpense(data.commissionNvExpense)
                .setReturnUpExpense(data.returnUpExpense)
                .setAdsExpense(data.adsExpense)
                .setCostPrice(data.costPrice);
            saveService.save(dto);
        } catch (e) {
            alert(e.message);
        }
    })
}

const eventClickNewData = () => {
    const newFormButton = document.body.querySelector('#newFormButton');
    newFormButton.addEventListener('click', (event) => {
        event.preventDefault();
        const form = newFormButton.closest('form'); // находим родительскую форму
        const formData = new FormData(form); // собираем данные формы
        const data = Object.fromEntries(formData.entries());
        try {
            const dto = new NewDataDto()
                .setDays(data.days)
                .setCrmProfitBefore(data.profitBefore)
                .setCrmProfitAfter(data.profitAfter)
                .setAdsBefore(data.adsBefore)
                .setAdsAfter(data.adsAfter)
            saveService.save(dto, 'new');

        } catch (e) {
            alert(e.message);
        }
    })
}

eventClickOldDataButton();
eventClickNewData()
saveService.setInputData();



