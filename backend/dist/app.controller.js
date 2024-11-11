"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getCountries() {
        const data = await fetch('https://date.nager.at/api/v3/AvailableCountries');
        const countries = (await data.json());
        return countries;
    }
    async findOne({ countryName }) {
        const dataBorder = await fetch(`https://date.nager.at/api/v3/CountryInfo/${countryName}`);
        const { borders, commonName } = await dataBorder.json();
        const [dataPopulation, dataImageFlag] = await Promise.all([
            fetch('https://countriesnow.space/api/v0.1/countries/population', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    country: commonName,
                }),
            }),
            fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    iso2: countryName,
                }),
            }),
        ]);
        const { data: { populationCounts }, } = (await dataPopulation.json());
        const { data: { flag }, } = await dataImageFlag.json();
        return {
            borders,
            population: populationCounts,
            flag,
            name: commonName,
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getCountries", null);
__decorate([
    (0, common_1.Get)(':countryName'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findOne", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('countries'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map