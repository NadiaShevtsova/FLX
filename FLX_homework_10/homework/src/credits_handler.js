function userCard(keyCard) {
    const options = {
        key: keyCard,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    };

    function getCardOptions() {

        return options;
    }

    function putCredits(amount) {
        options.balance += amount;
        options.historyLogs.push({
            operationType: 'Received credits',
            credits: amount,
            operationTime: new Date().toLocaleString('en-GB')
        })
    }

    function takeCredits(amount) {
        if (options.balance >= amount) {
            options.balance -= amount;
            options.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            })
        }
    }

    function setTransactionLimit(amount) {
        options.transactionLimit = amount;
        options.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: amount,
            operationTime: new Date().toLocaleString('en-GB')
        })
    }

    function transferCredits(amount, card) {
        if (amount <= options.transactionLimit || amount <= options.balance || card !== undefined){
            const number = 0.5, hundred = 100;
            let tax = amount - amount * number / hundred;
            card.putCredits(tax);
            this.takeCredits(amount);
        } else{
            console.log('Error');
        }
    }

    return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits}
}

function UserAccount(name) {
    const optionsForUser = {
        name: name,
        cards: []
    };

    function addCard() {
        const maxCardsNumber = 3;
        optionsForUser.cards.push(getCardByKey);

        if (optionsForUser.cards.length > maxCardsNumber) {
            optionsForUser.cards.length -= 1;
        }
    }

    function getCardByKey(key) {
        if (key <= optionsForUser.cards.length) {

            return userCard(key);
        }
    }

    return {addCard, getCardByKey}
}
