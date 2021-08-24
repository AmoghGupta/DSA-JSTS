class Button {
    #totalClicks = 0;
    click(){
        this.#totalClicks++;
    }

    log(){
        console.log('Clicked ', this.#totalClicks,' times.');
    }
}

const btn = new Button();
btn.click();
btn.click();

btn.log();
// console.log(btn.#totalClicks); //error == private field