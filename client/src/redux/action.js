export const TOGGLE_DAY = 'TOGGLE_DAY'
export const GET_TODAY = 'GET_TODAY'
export const GET_TOMORROW = 'GET_TOMORROW'
export const GET_YESTERDAY = 'GET_YESTERDAY'

export function toggleDay(value) {
    return {
        type: TOGGLE_DAY,
        value
    }
}

export function getToday(data) {
    return {
        type: GET_TODAY,
        data
    }
}

export function getTomorrow(data) {
    return {
        type: GET_TOMORROW,
        data
    }
}

export function getYesterday(data) {
    return {
        type: GET_YESTERDAY,
        data
    }
}

