export function formatTimeRemaining(timeRemaining: number) {
    const minutes = Math.floor(timeRemaining / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return minutes + 'm ' + seconds + 's';
}

export function getRaceTypeName(type: string) {
    switch (type) {
        case 'T':
            return 'Thoroughbred';
        case 'G':
            return 'Greyhounds';
        case 'H':
            return 'Harness';
        default:
            return '';
    }
}