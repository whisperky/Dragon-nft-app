export const addSplashEffect = (event: any) => {
    const element = event.currentTarget;
    element!.classList.add('splash');
}
export const removeSplashEffect = (event: any) => {
    const element = event.currentTarget;
    element!.classList.remove('splash');
}