// TypeScript 4.3 introduced the "override" keyword to guard us from unintended behavior when renaming overridden methods
// Enable with --noImplicitOverride tsc option or set in tsconfig.json

class Expander{
    expand(){

    }

    collapse(){

    }
};

class Accordion extends Expander{
    override expand(){

    };
    override collapse(){
        
    };
}