export const getFullName = (firstName?: string | null, lastName?: string | null): string => {
    if (firstName === null || firstName === undefined) firstName = '';
    if (lastName === null || lastName === undefined) lastName = '';
    return `${firstName} ${lastName}`;
}