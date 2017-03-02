import * as email from 'nativescript-email';

export function openEmail() {
    email.available().then((result: boolean) => {
        if (result === true) {
            email.compose({
                subject: 'Test',
                body: 'Hello egg head',
                to: ['bradwaynemartin@gmail.com']                
            }).then((result) => {
                console.log(result);
                }, (err) => {
                    console.log(err);
            })
        }
    })
}