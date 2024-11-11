import { AppService } from './app.service';
import { Country } from './types/country';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getCountries(): Promise<Country[]>;
    findOne({ countryName }: {
        countryName: string;
    }): Promise<any>;
}
