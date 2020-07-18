enum Action {
    none = 0,
    pick = 1,
    drop = 2
}

const respondFun = (recipient : string, message : Action) : void => {
    console.log(recipient);
    console.log('Action performed is');
    console.log(Action.pick);
};
respondFun('Dharmik', Action.pick);
