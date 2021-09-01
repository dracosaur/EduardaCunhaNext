export declare type Color =   'primary.yellow' | 'primary.black' | 'primay.text' | 'secondary.yellow' | 'secondary.black' | 'background.main' ; 

interface PrimaryColors {
    yellow: string;
    black: string;
    text: string;
}

interface SecondaryColors {
    yellow: string;
    black: string;
    text: string;
}

interface BackgroundColors {
    main: string;
}

export interface Colors {
    primary: PrimaryColors;
    secondary: SecondaryColors;
    background: BackgroundColors;
}
export {};
