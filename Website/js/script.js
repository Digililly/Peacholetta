$(document).ready(documentReady);

var menuItems = [
    {
        header: 'Eintrag1',
        paragraph: ' ',
	},
    {
        header: 'Eintrag2',
        paragraph: '',
	},
    {
        header: 'Eintrag3',
        paragraph: '',
	},
    {
        header: 'Eintrag4',
        paragraph: ' ',
	}
]

function documentReady() {
    $('.harmonica').find('h2').click(menuItemClicked);

}

function menuItemClicked(event) {
    $(event.currentTarget).parent().toggleClass('visible')
}
