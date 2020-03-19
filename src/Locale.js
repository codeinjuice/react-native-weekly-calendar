export const applyLocale = (locale, setCancelText, setConfirmText) => {
    switch (locale) {
        case 'en': 
            setCancelText('Cancel')
            setConfirmText('Confirm')
            break
        case 'ko':
            setCancelText('취소')
            setConfirmText('확인')
            break
        case 'zh-cn':
            setCancelText('取消')
            setConfirmText('确定')
            break
        default:
            setCancelText('Cancel')
            setConfirmText('Confirm')
            break
    }
}

export const displayTitleByLocale = (locale, selectedDate, format) => {
    if(format !== undefined) return selectedDate.clone().format(format)

    switch (locale) {
        case 'en': 
            return selectedDate.clone().format('MMMM YYYY')
        case 'ko':
            return selectedDate.clone().format('YYYY년 M월')
        case 'zh-cn':
            return selectedDate.clone().format('YYYY年 M月')
        default:
            return selectedDate.clone().format('MMMM YYYY')
    }
}