const modal = $.modal({
    title: 'Oleg Modal',
    closable: true,
    content: `
    <p>Lorem ipsum dolor sit amet.</p>    
    `,
    width: '400px',
    footerButtons: [
        {
            text: 'Ok',
            type: 'primary',
            handler() {
                console.log('Primary btn clicked')
                modal.close()
            }
        },
        {
            text: 'Cancel',
            type: 'Danger',
            handler() {
                console.log('Danger btn clicked')
                modal.close()
            }
        },
    ]
});
