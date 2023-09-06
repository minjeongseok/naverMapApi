// common.scss에서 색상 관리
var chartFont = getComputedStyle(document.documentElement).getPropertyValue('--font');
var chartFontColor = getComputedStyle(document.documentElement).getPropertyValue('--chart-text-color');

var chartColorPalette = {

	red: getComputedStyle(document.documentElement).getPropertyValue('--chart-red'),
	blue: getComputedStyle(document.documentElement).getPropertyValue('--chart-blue'),
	yellow: getComputedStyle(document.documentElement).getPropertyValue('--chart-yellow'),
	green: getComputedStyle(document.documentElement).getPropertyValue('--chart-green'),
	purple: getComputedStyle(document.documentElement).getPropertyValue('--chart-purple'),
	orange: getComputedStyle(document.documentElement).getPropertyValue('--chart-orange'),
	black: getComputedStyle(document.documentElement).getPropertyValue('--chart-black'),

	redBorder: getComputedStyle(document.documentElement).getPropertyValue('--chart-border-red'),
	blueBorder: getComputedStyle(document.documentElement).getPropertyValue('--chart-border-blue'),
	yellowBorder: getComputedStyle(document.documentElement).getPropertyValue('--chart-border-yellow'),
	greenBorder: getComputedStyle(document.documentElement).getPropertyValue('--chart-border-green'),
	purpleBorder: getComputedStyle(document.documentElement).getPropertyValue('--chart-border-purple'),
	orangeBorder: getComputedStyle(document.documentElement).getPropertyValue('--chart-border-orange'),
	blackBorder: getComputedStyle(document.documentElement).getPropertyValue('--chart-border-black'),

	

    success: getComputedStyle(document.documentElement).getPropertyValue('--success-color'),
    warning: getComputedStyle(document.documentElement).getPropertyValue('--warning-color'),
    danger: getComputedStyle(document.documentElement).getPropertyValue('--danger-color'),

};